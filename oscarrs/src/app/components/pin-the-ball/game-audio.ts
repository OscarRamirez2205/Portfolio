const AUDIO_BASE = '/assets/ptb/audio';
const CONFETTI_AUDIO_FILE = 'game-over.mp3';

export interface GameSounds {
  playBumper(): void;
  playPlunger(): void;
  playFlipper(): void;
  playLoseLife(): void;
  playConfetti(): void;
  unlock(): void;
  dispose(): void;
}

class HtmlSfx {
  private readonly audio: HTMLAudioElement;
  private unlocked = false;

  constructor(file: string, volume: number) {
    this.audio = new Audio(`${AUDIO_BASE}/${encodeURIComponent(file)}`);
    this.audio.preload = 'auto';
    this.audio.volume = volume;
  }

  /** Prepara el audio tras el primer gesto del usuario (política del navegador). */
  prime(): void {
    if (this.unlocked) {
      return;
    }
    const prevVolume = this.audio.volume;
    this.audio.volume = 0;
    const playAttempt = this.audio.play();
    if (playAttempt !== undefined) {
      void playAttempt
        .then(() => {
          this.audio.pause();
          this.audio.currentTime = 0;
          this.audio.volume = prevVolume;
          this.unlocked = true;
        })
        .catch(() => {
          this.audio.volume = prevVolume;
        });
    }
  }

  play(): void {
    const node = this.audio.cloneNode(true) as HTMLAudioElement;
    node.volume = this.audio.volume;
    void node.play().catch(() => {});
  }

  dispose(): void {
    this.audio.pause();
    this.audio.removeAttribute('src');
    this.audio.load();
  }
}

export function createGameSounds(): GameSounds {
  const bumper = new HtmlSfx('hit-bumper.mp3', 0.85);
  const plunger = new HtmlSfx('hit-plunger.mp3', 0.9);
  const flipper = new HtmlSfx('move-flipper.mp3', 0.75);
  const loseLife = new HtmlSfx('loose-a-ball.mp3', 0.9);
  const confetti = new HtmlSfx(CONFETTI_AUDIO_FILE, 0.95);

  const primeAll = (): void => {
    bumper.prime();
    plunger.prime();
    flipper.prime();
    loseLife.prime();
    confetti.prime();
  };

  return {
    playBumper: () => bumper.play(),
    playPlunger: () => plunger.play(),
    playFlipper: () => flipper.play(),
    playLoseLife: () => loseLife.play(),
    playConfetti: () => confetti.play(),
    unlock: primeAll,
    dispose: () => {
      bumper.dispose();
      plunger.dispose();
      flipper.dispose();
      loseLife.dispose();
      confetti.dispose();
    },
  };
}

/** Desbloquea el audio en la primera tecla o clic (requerido por Chrome/Safari/Firefox). */
export function bindAudioUnlock(canvas: HTMLCanvasElement, sfx: GameSounds): void {
  const unlock = (): void => {
    sfx.unlock();
    window.removeEventListener('keydown', unlock);
    window.removeEventListener('pointerdown', unlock);
    canvas.removeEventListener('pointerdown', unlock);
  };

  window.addEventListener('keydown', unlock, { once: false });
  window.addEventListener('pointerdown', unlock, { once: false });
  canvas.addEventListener('pointerdown', unlock, { once: false });
}
