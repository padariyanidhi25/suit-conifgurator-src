import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import eventEmitter from './eventEmitter';





export function Flap_Pocket(props) {
  const { nodes, materials } = useGLTF('./pockets/Flap_Pocket_n.glb');
  const [textureURL, setTextureURL] = useState(null);

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

    eventEmitter.on('applyFabric', handleApplyFabric);

    return () => {
      eventEmitter.off('applyFabric', handleApplyFabric);
    };
  }, [materials]);


  return (
    <group {...props} dispose={null} scale={45}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Flap_Pocket.geometry}
      material={materials.Jacket}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
  );
}

useGLTF.preload('./pockets/Flap_Pocket_n.glb');

export function Patch_Pocket(props) {
  const { nodes, materials } = useGLTF('./pockets/Patch_Pockets_n.glb');
  const [textureURL, setTextureURL] = useState(null);

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

    eventEmitter.on('applyFabric', handleApplyFabric);

    return () => {
      eventEmitter.off('applyFabric', handleApplyFabric);
    };
  }, [materials]);
 


  return (
    <group {...props} dispose={null} scale={45}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Patch_Pockets.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload('./pockets/Patch_Pockets_n.glb');

export function Besom_Pocket(props) {
  const { nodes, materials } = useGLTF('./pockets/Besom_Pocket_n.glb');
  const [textureURL, setTextureURL] = useState(null);

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

    eventEmitter.on('applyFabric', handleApplyFabric);

    return () => {
      eventEmitter.off('applyFabric', handleApplyFabric);
    };
  }, [materials]);

  return (
    <group {...props} dispose={null} scale={45}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Besom_Pocket.geometry}
      material={materials.Jacket}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
  );
}

useGLTF.preload('./pockets/Besom_Pocket_n.glb');

export function Upperpocket(props) {
  const { nodes, materials } = useGLTF('./pockets/upper_Normal_pocket_n.glb')
  const [textureURL, setTextureURL] = useState(null);

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

    eventEmitter.on('applyFabric', handleApplyFabric);

    return () => {
      eventEmitter.off('applyFabric', handleApplyFabric);
    };
  }, [materials]);
 
  return (
    <group {...props} dispose={null} scale={45}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.upper_Normal_pocket.geometry}
      material={materials.Jacket}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
  )
}

useGLTF.preload('./pockets/upper_Normal_pocket_n.glb')
export function Halfmoon(props) {
  const { nodes, materials } = useGLTF('./pockets/upper_halfmoon_pocket_n.glb')
  const [textureURL, setTextureURL] = useState(null);

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

    eventEmitter.on('applyFabric', handleApplyFabric);

    return () => {
      eventEmitter.off('applyFabric', handleApplyFabric);
    };
  }, [materials]);
  return (
    <group {...props} dispose={null} scale={45}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.upper_halfmoon_pocket.geometry}
      material={materials.Jacket}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
  )
}

useGLTF.preload('./pockets/upper_halfmoon_pocket_n.glb')
export function Patch_Pocket_Upper(props) {
  const { nodes, materials } = useGLTF('./pockets/Patch_pocket_new.glb')
  const [textureURL, setTextureURL] = useState(null);

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

    eventEmitter.on('applyFabric', handleApplyFabric);

    return () => {
      eventEmitter.off('applyFabric', handleApplyFabric);
    };
  }, [materials]);
  return (
    <group {...props} dispose={null} scale={45}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Patch_Pocket_Upper.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('./pockets/Patch_pocket_new.glb')
