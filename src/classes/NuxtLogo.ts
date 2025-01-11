import type { FScene } from '@fibbojs/3d'
import { FSTL } from './FSTL'

export default class NuxtLogo extends FSTL {
  constructor(scene: FScene) {
    super(scene, {
      name: 'nuxt-logo',
      position: { x: 0, y: -10, z: 0 },
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      rotationDegree: { x: -90, y: 0, z: 20 },
    })
  }
}
