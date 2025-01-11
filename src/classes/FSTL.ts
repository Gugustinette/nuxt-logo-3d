import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import type { FModelOptions, FScene } from '@fibbojs/3d'
import { FModel } from '@fibbojs/3d'

/**
 * A STL model in Fibbo.
 * @category Model
 * @example
 * ```ts
 * import { FScene, FSTL } from '@fibbojs/3d'
 *
 * const scene = new FScene()
 *
 * const stl = new FSTL(scene, {
 *  path: 'model.stl',
 * })
 * ```
 */
export class FSTL extends FModel {
  constructor(scene: FScene, options: FModelOptions) {
    super(scene, {
      fileExtension: 'stl',
      ...options,
    })

    const material = new THREE.MeshPhongMaterial({
      color: 0x00DC82,
      opacity: 1.0,
    })

    const loader = new STLLoader()
    loader.load(
      this.path,
      (geometry: THREE.BufferGeometry) => {
          // Create the mesh from the stl geometry
          this.__MESH__ = new THREE.Mesh(geometry, material)
    
          // Define mesh transforms
          this.defineMeshTransforms()
    
          // Call the onLoaded Callbacks
          this.emitOnLoaded()
      },
      (_xhr: any) => {
      },
      (error: any) => {
        console.log(`An error happened while loading the model : ${this.path}`)
        console.log(error)
      }
    )
  }
}
