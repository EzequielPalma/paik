import React from 'react'
export default function Moon() {
    return (
        <> 
        
        <a-assets>
            <a-asset-item id="moon-obj" src="images/moon/moon.obj"></a-asset-item>
        </a-assets>

        <a-entity
          id="moon"
          material="src: images/moon/diffuse.png" 
          position="30 120 150"
          rotation="0 190 0"
          obj-model="obj: #moon-obj"
          scale="15 15 15">
        </a-entity></>
    )
}
