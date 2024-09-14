import { useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export const useCameraLerp = (initialPosition) => {
  const { camera } = useThree();
  const [targetPosition, setTargetPosition] = useState(initialPosition);
  const lerpSpeed = 0.05;

  useFrame(() => {
    camera.position.lerp(targetPosition, lerpSpeed);
  });

  return setTargetPosition;
};
