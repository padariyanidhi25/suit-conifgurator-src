import { useEffect } from "react";
import * as THREE from "three";
import eventEmitter from "./eventEmitter";
import { useGLTF } from "@react-three/drei";

export function Notch_Collar(props) {
  const { nodes, materials } = useGLTF("./GLB NEW (26-1-25)/Noch/notch_collar.glb" );

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            const material = materials[key];
            if (material.map) {
              material.map = texture;
              material.needsUpdate = true;
            }
          });
        });
      }
    };

    eventEmitter.on("applyFabric", handleApplyFabric);

    return () => {
      eventEmitter.off("applyFabric", handleApplyFabric);
    };
  }, [materials]);

  return (
    <group {...props} dispose={null} scale={20}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notch_collar1.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}
useGLTF.preload("./GLB NEW (26-1-25)/Noch/notch_collar.glb");

export function Notch_Wide(props) {
  const { nodes, materials } = useGLTF("./GLB NEW (26-1-25)/Noch Wide/notch_collar_wide.glb");

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            const material = materials[key];
            if (material.map) {
              material.map = texture;
              material.needsUpdate = true;
            }
          });
        });
      }
    };

    eventEmitter.on("applyFabric", handleApplyFabric);

    return () => {
      eventEmitter.off("applyFabric", handleApplyFabric);
    };
  }, [materials]);

  return (
    <group {...props} dispose={null} scale={20}>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.notch_collar_wide1.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}
useGLTF.preload("./GLB NEW (26-1-25)/Noch Wide/notch_collar_wide.glb");


export function Peak_Collor(props) {
  const { nodes, materials } = useGLTF("./GLB NEW (26-1-25)/Peak/peak_collar.glb");

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            const material = materials[key];
            if (material.map) {
              material.map = texture;
              material.needsUpdate = true;
            }
          });
        });
      }
    };

    eventEmitter.on("applyFabric", handleApplyFabric);

    return () => {
      eventEmitter.off("applyFabric", handleApplyFabric);
    };
  }, [materials]);

  return (
    <group {...props} dispose={null} scale={20}>
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.peak_collar1.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}
useGLTF.preload("./GLB NEW (26-1-25)/Peak/peak_collar.glb");

export function Peak_Wide(props) {
  const { nodes, materials } = useGLTF("./GLB NEW (26-1-25)/Peak Wide/peak_collar_wide.glb");

  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            const material = materials[key];
            if (material.map) {
              material.map = texture;
              material.needsUpdate = true;
            }
          });
        });
      }
    };

    eventEmitter.on("applyFabric", handleApplyFabric);

    return () => {
      eventEmitter.off("applyFabric", handleApplyFabric);
    };
  }, [materials]);

  return (
    <group {...props} dispose={null} scale={20}>
   <mesh
        castShadow
        receiveShadow
        geometry={nodes.peak_collar_wide.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}
useGLTF.preload("./GLB NEW (26-1-25)/Peak Wide/peak_collar_wide.glb");
