import React, { useRef,useEffect } from 'react'
import * as THREE from "three";
import eventEmitter from "./eventEmitter";
import { useGLTF } from "@react-three/drei";

export function AmfPeakcollar2mm(props) {
  const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_collar_AMF 2mm.glb')
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
      geometry={nodes.peak_collar_AMF.geometry}
      material={materials.Jacket}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
  )
}

useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_collar_AMF 2mm.glb')


export function AmfPeakcollar6mm(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_collar_AMF 6mm.glb')
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
        geometry={nodes.peak_collar_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_collar_AMF 6mm.glb')
  
  export function AmfPeakcollar2mmWide(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/Peak_collar_wide_AMF 2mm.glb')
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
        geometry={nodes.Peak_collar_wide_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/Peak_collar_wide_AMF 2mm.glb')
  

  export function AmfPeakcollar6mmWide(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/Peak_collar_wide_AMF 6mm.glb')
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
        geometry={nodes.Peak_collar_wide_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/Peak_collar_wide_AMF 6mm.glb')
     
  export function AmfPeakbreasted2mm(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_breasted_AMF 2mm.glb')
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
        geometry={nodes.peak_double_breasted_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_breasted_AMF 2mm.glb')
  

  export function AmfPeakbreasted6mm(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_breasted_AMF 6mm.glb')
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
        geometry={nodes.peak_double_breasted_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_breasted_AMF 6mm.glb')

  export function AmfPeakbreasted2mmWide(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_breasted_wide_AMF 2mm.glb')
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
        geometry={nodes.peak_double_breasted_wide_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_breasted_wide_AMF 2mm.glb')

  export function AmfPeakbreasted6mmWide(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_breasted_wide_AMF 6mm.glb')
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
        geometry={nodes.peak_double_breasted_wide_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_breasted_wide_AMF 6mm.glb')

  export function AmfPeakDoublebtn2mm(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_button_AMF 2mm.glb')
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
        geometry={nodes.peak_double_button_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_button_AMF 2mm.glb')

  export function AmfPeakDoublebtn6mm(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_button_AMF 6mm.glb')
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
        geometry={nodes.peak_double_button_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_button_AMF 6mm.glb')

  export function AmfPeakDoublebtn2mmWide(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_button_wide_AMF 2mm.glb')
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
        geometry={nodes.peak_double_button_wide_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_button_wide_AMF 2mm.glb')
  
  export function AmfPeakDoublebtn6mmWide(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_button_wide_AMF 6mm.glb')
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
        geometry={nodes.peak_double_button_wide_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_double_button_wide_AMF 6mm.glb')

  export function AmfPeaksinglebtn2mm(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_single_button_AMF 2mm.glb')
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
        geometry={nodes.peak_single_button_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_single_button_AMF 2mm.glb')

  export function AmfPeaksinglebtn6mm(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_single_button_AMF 6mm.glb')
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
        geometry={nodes.peak_single_button_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_single_button_AMF 6mm.glb')

  export function AmfPeaksinglebtn2mmWide(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_single_button_wide_AMF 2mm.glb')
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
        geometry={nodes.peak_single_button_wide_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_single_button_wide_AMF 2mm.glb')

  
export function AmfPeaksinglebtn6mmWide(props) {
    const { nodes, materials } = useGLTF('./Coat GLB New modify/Peak AMF GLB/GLB/peak_single_button_wide_AMF 6mm.glb')
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
        geometry={nodes.peak_single_button_wide_AMF.geometry}
        material={materials.Jacket}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
    )
  }
  
  useGLTF.preload('./Coat GLB New modify/Peak AMF GLB/GLB/peak_single_button_wide_AMF 6mm.glb')
  