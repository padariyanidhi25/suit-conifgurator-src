import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import eventEmitter from "./eventEmitter";
import * as THREE from "three";


// collar
export function AmfnotchCollar(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch AMF/notch_collar_AMF 2mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_collar_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload("./11-02-25/GLB NEW/AMF/Noch AMF/notch_collar_AMF 2mm.glb");
// 2mm

export function Amfnotchsingle(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch AMF/notch_single_button_AMF 2mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.needsUpdate = true;
                material.map.flipY = false;
              }
            }
          });
        });
      }
    };
    
    eventEmitter.on("applyFabric", handleApplyFabric);

    return () => {
      eventEmitter.off("applyFabric", handleApplyFabric);
    };
  }, []);
  return (
    <group {...props} dispose={null} scale={20}>
     <mesh
        castShadow
        receiveShadow
        geometry={nodes.notch_single_button_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch AMF/notch_single_button_AMF 2mm.glb"
);


export function AmfnotchDouble(props) {
  const { nodes, materials } = useGLTF("./11-02-25/GLB NEW/AMF/Noch AMF/notch_double_button_AMF 2mm.glb");
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.needsUpdate = true;
                material.map.flipY = false;

              }
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
        geometry={nodes.notch_double_button_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch AMF/notch_double_button_AMF 2mm.glb"
);


export function AmfnotchBreasted(props) {
  const { nodes, materials } = useGLTF("./11-02-25/GLB NEW/AMF/Noch AMF/noch_double_breasted_suit_AMF 2mm.glb");
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;

              }
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
        geometry={nodes.noch_double_breasted_suit_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("./11-02-25/GLB NEW/AMF/Noch AMF/noch_double_breasted_suit_AMF 2mm.glb");

// collar 6mm

export function Amf6mmCollar(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch AMF/notch_collar_AMF 6mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_collar_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch AMF/notch_collar_AMF 6mm.glb"
);
// 6mm
export function Amf6mmsingleButton(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch AMF/notch_single_button_AMF 6mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_single_button_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch AMF/notch_single_button_AMF 6mm.glb"
);

export function Amf6mmdoubleButton(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch AMF/notch_double_button_AMF 6mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_double_button_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch AMF/notch_double_button_AMF 6mm.glb"
);

export function Amf6mmDoublebreasted(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch AMF/noch_double_breasted_suit_AMF 6mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.noch_double_breasted_suit_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch AMF/noch_double_breasted_suit_AMF 6mm.glb"
);

// collar wide 2mm

export function AmfnotchcollarWide(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_collar_wide_AMF 2mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_collar_wide_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload("./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_collar_wide_AMF 2mm.glb");

// 2mm wide  

export function AmfnotchwideSingle(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_single_button_wide_AMF 2mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_single_button_wide_AMF2.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_single_button_wide_AMF 2mm.glb"
);

export function AmfnotchwideDouble(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_double_button_wide_AMF 2mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_double_button_wide_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_double_button_wide_AMF 2mm.glb"
);


export function AmfnotchBreastedwide(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch Wide AMF/noch_double_breasted_wide_suit_AMF 2mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.noch_double_breasted_wide_suit_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch Wide AMF/noch_double_breasted_wide_suit_AMF 2mm.glb"
);

// collar wide 6mm 
export function Amf6mmWidecollar(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_collar_wide_AMF 6mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_collar_wide_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_collar_wide_AMF 6mm.glb"
);



//  6mm wide
export function Amf6mmwidedoubleBreastedwide(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch Wide AMF/noch_double_breasted_wide_suit_AMF 6mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.noch_double_breasted_wide_suit_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch Wide AMF/noch_double_breasted_wide_suit_AMF 6mm.glb"
);


export function Amf6mmdoublebuttonWide(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_double_button_wide_AMF 6mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_double_button_wide_AMF1.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_double_button_wide_AMF 6mm.glb"
);


export function Amf6mmSinglebuttonWide(props) {
  const { nodes, materials } = useGLTF(
    "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_single_button_wide_AMF 6mm.glb"
  );
  useEffect(() => {
    const handleApplyFabric = ({ textureURL }) => {
      if (textureURL) {
        const loader = new THREE.TextureLoader();
        loader.load(textureURL, (texture) => {
          Object.keys(materials).forEach((key) => {
            if (!key.includes("Button")) {
              // Skip button materials
              const material = materials[key];
              if (material.map) {
                material.map = texture;
                material.map.flipY = false;

                material.needsUpdate = true;
              }
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
        geometry={nodes.notch_single_button_wide_AMF2.geometry}
        material={materials.AMF}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
  </group>
  );
}

useGLTF.preload(
  "./11-02-25/GLB NEW/AMF/Noch Wide AMF/notch_single_button_wide_AMF 6mm.glb"
);
  



