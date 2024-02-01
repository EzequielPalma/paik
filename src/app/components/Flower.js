
const Flower= ({ position }) => (
    <a-entity 
        gltf-model="url(images/flower.glb)" 
        position={position}
        scale="2 2 2"
        static-body
       
    > 
        
    </a-entity>
  )

  export default Flower;