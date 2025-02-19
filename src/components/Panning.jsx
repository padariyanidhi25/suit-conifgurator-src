import React, { useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const Panning = () => {
  const { camera, gl } = useThree(); // Access the camera and WebGL renderer
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState([0, 0]);
  const [velocity, setVelocity] = useState([0, 0]);

  // Store the panning factor (sensitivity of panning)
  const panningFactor = 0.002; 

  // Prevent context menu from opening on right-click
  const onContextMenu = (e) => e.preventDefault();

  // Pointer Down Event: Detect right-click and start dragging
  const onPointerDown = (e) => {
    if (e.button === 2) { // Right mouse button
      setDragging(true);
      setStartPosition([e.clientX, e.clientY]);
    }
  };

  // Pointer Move Event: Update camera position as user drags
  const onPointerMove = (e) => {
    if (dragging) {
      const [startX, startY] = startPosition;
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      // Smooth panning calculation with velocity applied
      const newVelocity = [deltaX * panningFactor, deltaY * panningFactor];
      setVelocity(newVelocity);

      // Update start position for next move
      setStartPosition([e.clientX, e.clientY]);
    }
  };

  // Pointer Up Event: Stop dragging
  const onPointerUp = (e) => {
    if (e.button === 2) { // Right mouse button
      setDragging(false);
    }
  };

  // Use requestAnimationFrame for smoother updates (smooth motion frame by frame)
  useEffect(() => {
    const animateCamera = () => {
      if (dragging) {
        // Apply the panning velocity to the camera position
        camera.position.x -= velocity[0];
        camera.position.y += velocity[1];
      }
      requestAnimationFrame(animateCamera); // Loop the animation
    };

    animateCamera(); // Start the animation loop

    // Attach events to the canvas
    gl.domElement.addEventListener('pointerdown', onPointerDown);
    gl.domElement.addEventListener('pointermove', onPointerMove);
    gl.domElement.addEventListener('pointerup', onPointerUp);
    gl.domElement.addEventListener('contextmenu', onContextMenu);

    // Cleanup event listeners when the component is unmounted
    return () => {
      gl.domElement.removeEventListener('pointerdown', onPointerDown);
      gl.domElement.removeEventListener('pointermove', onPointerMove);
      gl.domElement.removeEventListener('pointerup', onPointerUp);
      gl.domElement.removeEventListener('contextmenu', onContextMenu);
    };
  }, [gl.domElement, dragging, velocity, camera]); // Dependency on dragging and velocity for smooth updates

  return null;
};

export default Panning;
