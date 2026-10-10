import * as BABYLON from '@babylonjs/core';
import { ImportMeshAsync } from '@babylonjs/core/Loading/sceneLoader';

const SKY_PANO_URL = '/assets/ptb/models/sky_pano_milkyway.glb';

export async function setupSkyPano(scene: BABYLON.Scene): Promise<void> {
  const result = await ImportMeshAsync(SKY_PANO_URL, scene);
  if (result.meshes.length === 0) {
    return;
  }

  const root = result.meshes[0];
  root.name = 'sky-pano-root';
  root.infiniteDistance = true;
  root.isPickable = false;
  root.position.set(0, 0, 0);

  for (const mesh of result.meshes) {
    if (!(mesh instanceof BABYLON.Mesh)) {
      continue;
    }
    mesh.isPickable = false;
    mesh.checkCollisions = false;
    mesh.infiniteDistance = true;
    mesh.renderingGroupId = 0;
    mesh.sideOrientation = BABYLON.Mesh.BACKSIDE;
    mesh.receiveShadows = false;

    if (mesh.material) {
      mesh.material.backFaceCulling = false;
      const mat = mesh.material;
      if ('disableLighting' in mat) {
        (mat as BABYLON.PBRMaterial).disableLighting = true;
      }
    }
  }

  root.computeWorldMatrix(true);
  const bounds = root.getHierarchyBoundingVectors(true);
  const size = bounds.max.subtract(bounds.min);
  const maxDim = Math.max(size.x, size.y, size.z, 0.001);
  const targetDiameter = 800;
  const scale = targetDiameter / maxDim;
  root.scaling.set(scale, scale, scale);

  scene.clearColor = new BABYLON.Color4(0.02, 0.02, 0.06, 1);
}
