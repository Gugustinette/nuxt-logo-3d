import { FAmbientLight, FDirectionalLight, FOrbitCamera, FScene } from '@fibbojs/3d'
import { fDebug } from '@fibbojs/devtools'
import './style.css'
import NuxtLogo from './classes/NuxtLogo'

(async () => {
  // Initialize the scene
  const scene = new FScene({
    shadows: true,
  })
  scene.init()
  await scene.initPhysics()
  // Debug the scene
  if (import.meta.env.DEV)
    fDebug(scene)

  // Add directional light to represent the sun
  new FDirectionalLight(scene, {
    position: { x: 20, y: 20, z: 0 },
    color: 0xFFFFFF,
    intensity: 3,
    shadowQuality: 12,
  })
  // Add ambient light
  new FAmbientLight(scene, {
    color: 0x404040,
    intensity: 20,
  })


  // Create the NuxtLogo
  const nuxtLogo = new NuxtLogo(scene)

  scene.camera = new FOrbitCamera(scene, {
    target: nuxtLogo
  })
})()
