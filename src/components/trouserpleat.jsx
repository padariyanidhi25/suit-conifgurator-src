import React, { useRef,useState,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from './eventEmitter';
import * as THREE from 'three';

export function Forward_double_pleat(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/forward_double_pleat.glb')

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
    <group {...props} dispose={null} scale={15} position={[0,1.6,0]}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.forward_double_pleat2.geometry}
      material={materials['Pant cloth']}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
)
}

useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/forward_double_pleat.glb')

export function Forward_single_pleat(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/forward_single_pleat.glb')
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
    <group {...props} dispose={null} scale={15} position={[0,1.6,0]}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.forward_single_pleat3.geometry}
      material={materials['Pant cloth']}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
)
}
useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/forward_single_pleat.glb')

export function Pleat_none(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/pleat_none.glb')
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
    <group {...props} dispose={null} scale={15} position={[0,1.6,0]}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.pleat_none1.geometry}
      material={materials['Pant cloth']}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
)
}

useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/pleat_none.glb')


export function Standard_double_pleat(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/standard_double_pleat.glb')

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
    <group {...props} dispose={null} scale={15} position={[0,1.6,0]}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.standard_double_pleat1.geometry}
      material={materials['Pant cloth']}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
)
}

useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/standard_double_pleat.glb')

export function Standard_single_pleat(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/standard_single_pleat.glb')
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
    <group {...props} dispose={null} scale={15} position={[0,1.6,0]}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.standard_single_pleat2.geometry}
      material={materials['Pant cloth']}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
)
}

useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Pleat/standard_single_pleat.glb')
