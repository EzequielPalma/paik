// NavigateArrows.js
import { useEffect } from 'react';

const NavigateArrows = () => {
  useEffect(() => {
    const AFRAME = window.AFRAME;

    // Verifica si el componente ya está registrado antes de intentar registrarlo
    if (!AFRAME.components['navigate-arrows']) {
      console.log('Registrando el componente navigate-arrows...');

      AFRAME.registerComponent('navigate-arrows', {
        init: function () {
          // Escucha eventos de clic emitidos por los botones
          document.getElementById('upButton').addEventListener('click', () => {
            this.handleArrowEvent('ArrowUp');
          });

          document.getElementById('downButton').addEventListener('click', () => {
            this.handleArrowEvent('ArrowDown');
          });

          document.getElementById('leftButton').addEventListener('click', () => {
            this.handleArrowEvent('ArrowLeft');
          });

          document.getElementById('rightButton').addEventListener('click', () => {
            this.handleArrowEvent('ArrowRight');
          });
        },

        handleArrowEvent: function (key) {
          // Lógica para manejar eventos de flechas
          console.log(`Se hizo clic en el botón: ${key}`);
          // Puedes realizar acciones adicionales aquí, como mover la cámara, etc.

          // Actualiza la posición del componente según la tecla presionada
          const currentPosition = this.el.object3D.position.clone();

          switch (key) {
            case 'ArrowUp':
              currentPosition.z -= 1;
              break;
            case 'ArrowDown':
              currentPosition.z += 1;
              break;
            case 'ArrowLeft':
              currentPosition.x -= 1;
              break;
            case 'ArrowRight':
              currentPosition.x += 1;
              break;
            default:
              break;
          }

          this.el.setAttribute('position', currentPosition);
        },
      });
    }
  }, []); // El arreglo vacío asegura que el efecto se ejecute solo una vez

  // Devuelve un componente nulo ya que no necesitas renderizar nada
  return null;
};

export default NavigateArrows;
