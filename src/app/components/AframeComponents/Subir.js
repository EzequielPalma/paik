"use client"

import { useEffect } from 'react'

export default function Subir() {
    useEffect(() => {

    if (!AFRAME.components["subir"]) {
        AFRAME.registerComponent('subir', {
          init: function () {
            var el = this.el;
      
            // Agrega un evento de clic al elemento
            el.addEventListener('click', function () {
              // Función para iniciar la animación
              function iniciarAnimacion() {
                // Establece una animación para cambiar de posición en forma circular
                el.setAttribute('animation__position', {
                  property: 'position',
                  dur: 2000,
                  easing: 'linear',
                  to: { x: -0.098, y: 20, z: 4.225 }
                });
      
                // Establece una animación para la rotación
                el.setAttribute('animation__rotation', {
                  property: 'rotation',
                  dur: 2000,
                  easing: 'linear',
                  to: { x: 20, y: 180, z: 0 }
                });
      
                var nuevaEntidad = document.createElement('a-entity');
                nuevaEntidad.setAttribute('gltf-model', 'url(images/gift/scene.gltf)');
                nuevaEntidad.setAttribute('position', { x: 0.193, y: 20, z: -10 });
                nuevaEntidad.setAttribute('scale', { x: 0.04, y: 0.04, z: 0.04 });
                nuevaEntidad.setAttribute('borrar', '');   
                // Agrega la nueva entidad al escenario
      
                // Espera 2 segundos antes de ejecutar el código dentro de la función de callback
                setTimeout(function () {
                  // Aquí puedes realizar acciones después de esperar 2 segundos
                  el.sceneEl.appendChild(nuevaEntidad);
                  
                }, 2200);
      
                // Escucha el evento 'animationcomplete' para reiniciar la animación
                
              }
      
              // Inicia la animación al hacer clic
              iniciarAnimacion();
            });
          }
        });
      }
    }, []); 
  return 
}
