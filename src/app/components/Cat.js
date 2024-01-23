import React from 'react'

export default function Cat() {
  return (
    <>    <a-assets>
    <a-asset-item id="cat-obj" src="images/Cat/Mesh_Cat.obj"></a-asset-item>
    <a-asset-item id="cat-mtl" src="images/Cat/Mesh_Cat.mtl"></a-asset-item>

   </a-assets>

   <a-entity 
    id="cat"
    material="src: images/Cat/Tex_Cat.png"
    position="19 0 0" 
    rotation="270 0 180" 
    obj-model="obj: #cat-obj; mtl: #cat-mtl" 
    scale="0.025 0.025 0.025"
   >
    </a-entity></>
  )
}
