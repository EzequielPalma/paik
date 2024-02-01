import React from 'react';

const Gato = () => (
    
  <>
    <a-assets>
      <a-asset-item id="gato-obj" src="images/gato/gato.obj"></a-asset-item>
    </a-assets>

    <a-entity
      id="gato"
      position="0 0 0"
      rotation="270 0 180"
      obj-model="obj: #gato-obj"
      scale="0.025 0.025 0.025"
      material="color: #25282A; roughness: 0.730; metalness:0.800"      
      sound="src: url(images/maullido.mp3); on: click"
      >
    </a-entity>

  </>
);

export default Gato;
