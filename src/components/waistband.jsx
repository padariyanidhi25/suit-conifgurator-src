
import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import eventEmitter from './eventEmitter';
import * as THREE from 'three'

export function Singleside(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/Single_Side_Closure_5cm.glb')

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
        geometry={nodes.Single_Side_Closure_4cm.geometry}
        material={materials['Pant cloth']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Single_Side_Closure_huck.geometry}
        material={materials.closure_huck}
        position={[0, 0.001, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}


useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/Single_Side_Closure_5cm.glb')

export function Doubleside(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/Double_Side_Closure_5cm.glb')

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
        geometry={nodes.Double_Side_Closure_5cm001.geometry}
        material={materials['Pant cloth']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Double_Side_Closure_huck.geometry}
        material={materials.closure_huck}
        position={[0, 0.001, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}


useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/Double_Side_Closure_5cm.glb')

export function Standardhidden(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/5cm standard_hidden_button.glb')

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
        geometry={nodes.standard_hidden_button_5cm.geometry}
        material={materials['Pant cloth']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}


useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/5cm standard_hidden_button.glb')

export function Standardhidden4cm(props) {
  const { nodes, materials } = useGLTF('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/4cm standard_hidden_button.glb')

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
      geometry={nodes.standard_hidden_button_4cm.geometry}
      material={materials['Pant cloth']}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
)
}


useGLTF.preload('./latest/trouser/Pant Revision GLB/Pant Revision GLB/Waistband/ 4cm standard_hidden_button.glb')