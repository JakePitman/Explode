/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/about-jake.glb -o app/AboutJake.tsx -r public -k 
*/

import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Euler, MathUtils, Vector3, Group, Mesh } from "three";
import { BreakingStates } from "./Experience";

type AboutJakeProps = {
  breakingState: BreakingStates;
  setBreakingState: React.Dispatch<React.SetStateAction<BreakingStates>>;
};
export function AboutJake({ breakingState, setBreakingState }: AboutJakeProps) {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const { nodes, materials } = useGLTF("/models/about-jake.glb");
  const group = useRef<Group>(null);

  useEffect(() => {
    const groupWorldPosition = new Vector3();
    group.current.getWorldPosition(groupWorldPosition); // World pos of world [ 0,0,0 ]

    group.current &&
      group.current.children.forEach((mesh) => {
        mesh.originalPosition = mesh.position.clone(); // Clone pos of current mesh
        const meshWorldPosition = new Vector3();
        mesh.getWorldPosition(meshWorldPosition); // World pos of current mesh

        // direction from world origin to current mesh
        // normalized so distance doesn't matter
        mesh.directionVector = meshWorldPosition
          .clone()
          .sub(meshWorldPosition)
          .normalize();

        mesh.targetPosition = mesh.originalPosition
          .clone()
          .add(mesh.directionVector)
          .clone()
          .multiplyScalar(3);

        mesh.originalRotation = mesh.rotation.clone();
        mesh.targetRotation = new Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
      });
  }, []);

  useEffect(() => {
    // Set origin mesh to visible only when in original state
    if (group.current) {
      const originMesh = group.current.children.find(
        (child) => child.name === "origin"
      ) as Mesh;
      if (breakingState === "original") {
        originMesh.visible = true;
      } else {
        originMesh.visible = false;
      }
    }
  }, [breakingState]);

  useFrame((_state, delta) => {
    if (breakingState === "breaking") {
      setElapsedTime(elapsedTime + delta);
    } else if (breakingState === "fixing") {
      if (elapsedTime - delta < 0) {
        setElapsedTime(0);
        setBreakingState("original");
      } else {
        setElapsedTime(elapsedTime - delta);
      }
    }

    group.current &&
      group.current.children.forEach((mesh) => {
        if (mesh.originalPosition) {
          mesh.position.x = MathUtils.lerp(
            mesh.originalPosition.x,
            mesh.targetPosition.x,
            elapsedTime / 50
          );
          mesh.position.y = MathUtils.lerp(
            mesh.originalPosition.y,
            mesh.targetPosition.y,
            elapsedTime / 50
          );
          mesh.position.z = MathUtils.lerp(
            mesh.originalPosition.z,
            mesh.targetPosition.z,
            elapsedTime / 50
          );
          mesh.rotation.x = MathUtils.lerp(
            mesh.originalRotation.x,
            mesh.targetRotation.x,
            elapsedTime / 50
          );
          mesh.rotation.y = MathUtils.lerp(
            mesh.originalRotation.y,
            mesh.targetRotation.y,
            elapsedTime / 50
          );
          mesh.rotation.z = MathUtils.lerp(
            mesh.originalRotation.z,
            mesh.targetRotation.z,
            elapsedTime / 50
          );
        }
      });
  });

  return (
    <group dispose={null} ref={group}>
      <mesh
        name="origin"
        visible={true}
        geometry={nodes.AboutJake.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        name="AboutJake_cell004"
        geometry={nodes.AboutJake_cell004.geometry}
        material={materials["Material.001"]}
        position={[3.197, 0.211, -0.577]}
      />
      <mesh
        name="AboutJake_cell006"
        geometry={nodes.AboutJake_cell006.geometry}
        material={materials["Material.001"]}
        position={[1.888, -0.006, 1.613]}
      />
      <mesh
        name="AboutJake_cell005_cell"
        geometry={nodes.AboutJake_cell005_cell.geometry}
        material={materials["Material.001"]}
        position={[2.155, -0.851, 0.409]}
      />
      <mesh
        name="AboutJake_cell005_cell001"
        geometry={nodes.AboutJake_cell005_cell001.geometry}
        material={materials["Material.001"]}
        position={[1.659, 0.33, 0.029]}
      />
      <mesh
        name="AboutJake_cell005_cell002"
        geometry={nodes.AboutJake_cell005_cell002.geometry}
        material={materials["Material.001"]}
        position={[1.386, -0.722, -0.448]}
      />
      <mesh
        name="AboutJake_cell005_cell003"
        geometry={nodes.AboutJake_cell005_cell003.geometry}
        material={materials["Material.001"]}
        position={[-0.189, -1.013, -0.038]}
      />
      <mesh
        name="AboutJake_cell005_cell004"
        geometry={nodes.AboutJake_cell005_cell004.geometry}
        material={materials["Material.001"]}
        position={[-0.302, -0.853, -0.002]}
      />
      <mesh
        name="AboutJake_cell005_cell005"
        geometry={nodes.AboutJake_cell005_cell005.geometry}
        material={materials["Material.001"]}
        position={[-0.224, -0.708, 0.119]}
      />
      <mesh
        name="AboutJake_cell005_cell006"
        geometry={nodes.AboutJake_cell005_cell006.geometry}
        material={materials["Material.001"]}
        position={[0.358, -0.236, -0.288]}
      />
      <mesh
        name="AboutJake_cell005_cell008"
        geometry={nodes.AboutJake_cell005_cell008.geometry}
        material={materials["Material.001"]}
        position={[1.046, -0.473, 0.376]}
      />
      <mesh
        name="AboutJake_cell005_cell010"
        geometry={nodes.AboutJake_cell005_cell010.geometry}
        material={materials["Material.001"]}
        position={[1.523, 0.478, -0.208]}
      />
      <mesh
        name="AboutJake_cell003_cell001"
        geometry={nodes.AboutJake_cell003_cell001.geometry}
        material={materials["Material.001"]}
        position={[-0.677, 0.365, -0.569]}
      />
      <mesh
        name="AboutJake_cell003_cell002"
        geometry={nodes.AboutJake_cell003_cell002.geometry}
        material={materials["Material.001"]}
        position={[-0.683, -0.027, -0.286]}
      />
      <mesh
        name="AboutJake_cell003_cell003"
        geometry={nodes.AboutJake_cell003_cell003.geometry}
        material={materials["Material.001"]}
        position={[0.311, -0.471, -0.008]}
      />
      <mesh
        name="AboutJake_cell003_cell004"
        geometry={nodes.AboutJake_cell003_cell004.geometry}
        material={materials["Material.001"]}
        position={[0.82, 0.631, 0.162]}
      />
      <mesh
        name="AboutJake_cell003_cell005"
        geometry={nodes.AboutJake_cell003_cell005.geometry}
        material={materials["Material.001"]}
        position={[0.528, 0.229, -0.572]}
      />
      <mesh
        name="AboutJake_cell003_cell008"
        geometry={nodes.AboutJake_cell003_cell008.geometry}
        material={materials["Material.001"]}
        position={[1.116, 1.314, 0.125]}
      />
      <mesh
        name="AboutJake_cell003_cell009"
        geometry={nodes.AboutJake_cell003_cell009.geometry}
        material={materials["Material.001"]}
        position={[1.448, 0.867, -0.02]}
      />
      <mesh
        name="AboutJake_cell003_cell010"
        geometry={nodes.AboutJake_cell003_cell010.geometry}
        material={materials["Material.001"]}
        position={[1.283, 0.764, 0.112]}
      />
      <mesh
        name="AboutJake_cell003_cell013"
        geometry={nodes.AboutJake_cell003_cell013.geometry}
        material={materials["Material.001"]}
        position={[-1.727, 0.771, -0.064]}
      />
      <mesh
        name="AboutJake_cell003_cell014"
        geometry={nodes.AboutJake_cell003_cell014.geometry}
        material={materials["Material.001"]}
        position={[1.533, 1.008, -0.081]}
      />
      <mesh
        name="AboutJake_cell_cell"
        geometry={nodes.AboutJake_cell_cell.geometry}
        material={materials["Material.001"]}
        position={[-2.013, -0.06, 0.046]}
      />
      <mesh
        name="AboutJake_cell_cell002"
        geometry={nodes.AboutJake_cell_cell002.geometry}
        material={materials["Material.001"]}
        position={[-0.941, -0.797, 0.187]}
      />
      <mesh
        name="AboutJake_cell_cell005"
        geometry={nodes.AboutJake_cell_cell005.geometry}
        material={materials["Material.001"]}
        position={[-1.22, -0.33, -0.04]}
      />
      <mesh
        name="AboutJake_cell_cell007"
        geometry={nodes.AboutJake_cell_cell007.geometry}
        material={materials["Material.001"]}
        position={[-1.818, 0.206, 0.117]}
      />
      <mesh
        name="AboutJake_cell001_cell"
        geometry={nodes.AboutJake_cell001_cell.geometry}
        material={materials["Material.001"]}
        position={[-1.572, 0.102, -0.323]}
      />
      <mesh
        name="AboutJake_cell001_cell001"
        geometry={nodes.AboutJake_cell001_cell001.geometry}
        material={materials["Material.001"]}
        position={[-0.3, -0.711, 0.027]}
      />
      <mesh
        name="AboutJake_cell001_cell002"
        geometry={nodes.AboutJake_cell001_cell002.geometry}
        material={materials["Material.001"]}
        position={[-0.556, -0.01, 0.17]}
      />
      <mesh
        name="AboutJake_cell001_cell003"
        geometry={nodes.AboutJake_cell001_cell003.geometry}
        material={materials["Material.001"]}
        position={[-0.442, -0.052, -0.116]}
      />
      <mesh
        name="AboutJake_cell001_cell005"
        geometry={nodes.AboutJake_cell001_cell005.geometry}
        material={materials["Material.001"]}
        position={[-0.447, -0.521, -0.222]}
      />
      <mesh
        name="AboutJake_cell001_cell006"
        geometry={nodes.AboutJake_cell001_cell006.geometry}
        material={materials["Material.001"]}
        position={[-1.187, 0.878, 0.084]}
      />
      <mesh
        name="AboutJake_cell001_cell008"
        geometry={nodes.AboutJake_cell001_cell008.geometry}
        material={materials["Material.001"]}
        position={[-0.718, -0.714, 0.088]}
      />
      <mesh
        name="AboutJake_cell001_cell010"
        geometry={nodes.AboutJake_cell001_cell010.geometry}
        material={materials["Material.001"]}
        position={[-0.7, -0.591, -0.036]}
      />
      <mesh
        name="AboutJake_cell001_cell011"
        geometry={nodes.AboutJake_cell001_cell011.geometry}
        material={materials["Material.001"]}
        position={[-0.83, -0.424, -0.241]}
      />
      <mesh
        name="AboutJake_cell001_cell012"
        geometry={nodes.AboutJake_cell001_cell012.geometry}
        material={materials["Material.001"]}
        position={[-1.34, -0.456, -0.146]}
      />
      <mesh
        name="AboutJake_cell001_cell013"
        geometry={nodes.AboutJake_cell001_cell013.geometry}
        material={materials["Material.001"]}
        position={[-1.516, -0.048, 0.376]}
      />
      <mesh
        name="AboutJake_cell001_cell014"
        geometry={nodes.AboutJake_cell001_cell014.geometry}
        material={materials["Material.001"]}
        position={[-1, 0.377, 0.083]}
      />
      <mesh
        name="AboutJake_cell001_cell015"
        geometry={nodes.AboutJake_cell001_cell015.geometry}
        material={materials["Material.001"]}
        position={[-1.743, 0.168, -0.336]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell"
        geometry={nodes.AboutJake_cell005_cell007_cell.geometry}
        material={materials["Material.001"]}
        position={[0.487, -1.213, 0.065]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell001"
        geometry={nodes.AboutJake_cell005_cell007_cell001.geometry}
        material={materials["Material.001"]}
        position={[0.769, -0.692, 0.313]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell002"
        geometry={nodes.AboutJake_cell005_cell007_cell002.geometry}
        material={materials["Material.001"]}
        position={[0.217, -0.773, -0.082]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell003"
        geometry={nodes.AboutJake_cell005_cell007_cell003.geometry}
        material={materials["Material.001"]}
        position={[0.881, -0.972, 0.133]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell004"
        geometry={nodes.AboutJake_cell005_cell007_cell004.geometry}
        material={materials["Material.001"]}
        position={[0.383, -0.784, 0.286]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell005"
        geometry={nodes.AboutJake_cell005_cell007_cell005.geometry}
        material={materials["Material.001"]}
        position={[0.431, -0.603, 0.171]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell008"
        geometry={nodes.AboutJake_cell005_cell007_cell008.geometry}
        material={materials["Material.001"]}
        position={[0.754, -0.48, -0.089]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell009"
        geometry={nodes.AboutJake_cell005_cell007_cell009.geometry}
        material={materials["Material.001"]}
        position={[1.615, -0.78, 0.028]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell010"
        geometry={nodes.AboutJake_cell005_cell007_cell010.geometry}
        material={materials["Material.001"]}
        position={[1.671, -0.751, 0.05]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell011"
        geometry={nodes.AboutJake_cell005_cell007_cell011.geometry}
        material={materials["Material.001"]}
        position={[1.202, -0.155, -0.113]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell012"
        geometry={nodes.AboutJake_cell005_cell007_cell012.geometry}
        material={materials["Material.001"]}
        position={[1.378, -0.74, 0.303]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell013"
        geometry={nodes.AboutJake_cell005_cell007_cell013.geometry}
        material={materials["Material.001"]}
        position={[1.153, -0.752, -0.071]}
      />
      <mesh
        name="AboutJake_cell005_cell007_cell015"
        geometry={nodes.AboutJake_cell005_cell007_cell015.geometry}
        material={materials["Material.001"]}
        position={[1.492, -0.971, -0.051]}
      />
      <mesh
        name="AboutJake_cell002_cell001"
        geometry={nodes.AboutJake_cell002_cell001.geometry}
        material={materials["Material.001"]}
        position={[-1.544, -1.027, -0.357]}
      />
      <mesh
        name="AboutJake_cell002_cell003"
        geometry={nodes.AboutJake_cell002_cell003.geometry}
        material={materials["Material.001"]}
        position={[-0.981, -0.873, -0.009]}
      />
      <mesh
        name="AboutJake_cell002_cell004"
        geometry={nodes.AboutJake_cell002_cell004.geometry}
        material={materials["Material.001"]}
        position={[-1.485, -1.253, 0.019]}
      />
      <mesh
        name="AboutJake_cell002_cell005"
        geometry={nodes.AboutJake_cell002_cell005.geometry}
        material={materials["Material.001"]}
        position={[-0.24, -0.71, 0.017]}
      />
      <mesh
        name="AboutJake_cell002_cell006"
        geometry={nodes.AboutJake_cell002_cell006.geometry}
        material={materials["Material.001"]}
        position={[-0.373, -0.713, -0.301]}
      />
      <mesh
        name="AboutJake_cell002_cell007"
        geometry={nodes.AboutJake_cell002_cell007.geometry}
        material={materials["Material.001"]}
        position={[-0.237, -0.88, -0.167]}
      />
      <mesh
        name="AboutJake_cell002_cell008"
        geometry={nodes.AboutJake_cell002_cell008.geometry}
        material={materials["Material.001"]}
        position={[-0.202, -0.963, 0.013]}
      />
    </group>
  );
}

useGLTF.preload("/models/about-jake.glb");
