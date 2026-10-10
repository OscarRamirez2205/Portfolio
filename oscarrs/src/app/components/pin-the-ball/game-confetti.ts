import confetti from 'canvas-confetti';
import type { Options } from 'canvas-confetti';

const CONFETTI_COLORS = ['#ff00fa', '#1bf9fb', '#ffea1c', '#ff6c11', '#7cffac', '#ffffff'];

/** Misma cantidad de confeti que la versión larga (~4,5 s), pero termina antes. */
const DURATION_MS = 1400;
/** Ráfagas laterales equivalentes a 4500 ms con intervalo de 450 ms (10 + la del celebrate). */
const SIDE_BURST_COUNT = 11;

/** Confeti con canvas-confetti al mostrar el modal de fin de partida. */
export function launchGameConfetti(durationMs = DURATION_MS): void {
  if (typeof window === 'undefined') {
    return;
  }

  const defaults: Options = {
    colors: CONFETTI_COLORS,
    zIndex: 25,
    disableForReducedMotion: true,
    ticks: 95,
    gravity: 1.4,
    decay: 0.92,
  };

  const burst = (particleRatio: number, options: Options): void => {
    confetti({
      ...defaults,
      ...options,
      particleCount: Math.floor(200 * particleRatio),
    });
  };

  const shootSides = (): void => {
    confetti({
      ...defaults,
      particleCount: 14,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.65 },
    });
    confetti({
      ...defaults,
      particleCount: 14,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.65 },
    });
  };

  burst(0.25, { spread: 26, startVelocity: 55, origin: { y: 0.6 } });
  burst(0.2, { spread: 60, origin: { y: 0.6 } });
  burst(0.35, { spread: 100, decay: 0.91, scalar: 0.8, origin: { y: 0.55 } });
  burst(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, origin: { y: 0.5 } });
  burst(0.1, { spread: 120, startVelocity: 45, origin: { y: 0.5 } });
  shootSides();

  for (let i = 1; i < SIDE_BURST_COUNT; i++) {
    window.setTimeout(shootSides, (durationMs * i) / (SIDE_BURST_COUNT - 1));
  }
}
