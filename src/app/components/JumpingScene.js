import React, { useState, useEffect } from 'react';

const JumpingScene = () => {
  const [position, setPosition] = useState({ x: 0, y: 1, z: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') { // Espacio
        if (position.y <= 1) {
          setVelocity({ x: 0, y: 5, z: 0 });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [position]);

  useEffect(() => {
    const updatePosition = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + velocity.x,
        y: Math.max(prevPosition.y + velocity.y, 1), // Limita la altura mínima a 1
        z: prevPosition.z + velocity.z,
      }));

      setVelocity((prevVelocity) => ({
        x: prevVelocity.x,
        y: Math.max(prevVelocity.y - 0.1, -5), // Gravedad simulada
        z: prevVelocity.z,
      }));
    };

    const updateFrame = () => {
      updatePosition();
      requestAnimationFrame(updateFrame);
    };

    updateFrame();
  }, [velocity]);

  return (
    <a-scene>
      <a-box position={`${position.x} ${position.y} ${position.z}`} color="tomato"></a-box>
      <a-camera wasd-controls look-controls></a-camera>
    </a-scene>
  );
};

export default JumpingScene;
