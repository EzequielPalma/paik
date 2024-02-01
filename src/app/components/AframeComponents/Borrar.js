"use client"

export default function Borrar() {
  
  if (!AFRAME.components["borrar"]) {
    AFRAME.registerComponent('borrar', {
      init: function () {
        var el = this.el; // Obtén la referencia al elemento
  
        // Agrega un evento de clic al elemento
        el.addEventListener('click', function () {
          // Elimina la entidad del escenario
          el.parentNode.removeChild(el);
  
          // Espera 1.2 segundos antes de ejecutar el código dentro de la función de callback
          setTimeout(function () {
            // Aquí puedes realizar acciones después de esperar 1.2 segundos
            for (let i = 0; i < 3; i++) {
              // Crea una nueva entidad similar
              var nuevaEntidad = document.createElement('a-entity');
              nuevaEntidad.setAttribute('gltf-model', 'url(images/wooden.glb)');
              nuevaEntidad.setAttribute('position', { x: 14 * i, y: 15, z: -0.5 });
              nuevaEntidad.setAttribute('scale', { x: 30, y: 30, z: 30 });
              nuevaEntidad.setAttribute("rotation",{x: 180.000, y:8.490, z:-12.380})
  
              // Agrega la nueva entidad al escenario
              el.sceneEl.appendChild(nuevaEntidad);
            }
          }, 1200);
        });
      }
    });
  }

   
}
