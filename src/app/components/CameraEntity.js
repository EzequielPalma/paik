import React from 'react'

export default function CameraEntity() {
  return (
    <>
    <a-camera position="0 5 0" rotation="-90 0 0" id="camera" >
      <a-entity 
        gltf-model="images/eze.glb" 
        scale="2 2 2" 
        rotation="0 180 0" ç
        position="-0.64 -5.56 -7.02">
      </a-entity>
    </a-camera>
    </>
  )
}
