
import React from 'react'

export default function Grass() {
  return (
    <>
      <a-assets>
          <a-asset-item
           id="grass-obj"
            src="images/grass/grass.obj">

          </a-asset-item>
      </a-assets>

      <a-entity
          id="grass"
          material="src: images/grass/grass.jpg; repeat: 2 2"
          position="0 -0.86 0"
          rotation="270 45 0"
          obj-model="obj: #grass-obj"
          scale="0.15 0.15 0.15">
      </a-entity>
      </>
  )
}
