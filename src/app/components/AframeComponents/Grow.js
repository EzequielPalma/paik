"use client"

import React, { useEffect } from 'react';

export default function Grow() {
  useEffect(() => {
    if (!AFRAME.components['grow']) {
      AFRAME.registerComponent('grow', {
        init: function () {
          var el = this.el; // Obtén la referencia al elemento

          // Agrega un evento de clic al elemento
          el.addEventListener('click', function () {
            // Incrementa el tamaño del objeto en 0.1 unidades en cada dimensión
            el.object3D.scale.x += 0;
            el.object3D.scale.y += 1;
            el.object3D.scale.z += 1;
            el.object3D.position.y += 1;

            // Puedes ajustar los valores según tus necesidades
          });
        }
      });
    }
  }, []); // Asegúrate de que este efecto se ejecute solo una vez al montar el componente

  // Renderiza un fragmento vacío, ya que no necesitas elementos en este componente
  return <></>;
}
