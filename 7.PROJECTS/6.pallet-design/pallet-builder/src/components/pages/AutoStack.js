import React, {Suspense, useRef} from 'react'
import "./Autostack.css"
import {Canvas, useFrame } from "@react-three/fiber";
import {OrbitControls ,useGLTF} from "@react-three/drei";


function Model(props) {
  const group = useRef()
  const { nodes, materials} = useGLTF('/scene.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI/2,0,0]} scale={1}>
      <mesh geometry={nodes.Box.geometry} material={nodes.Box.material} position={[-0.05, 0, -0.09]} scale={[5, 0.4, 3]} />
      <mesh geometry={nodes.Box_1.geometry} material={nodes.Box_1.material} position={[-1.63, 0.5, 0.54]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_2.geometry} material={nodes.Box_2.material} position={[-0.49, 0.55, 0.53]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_3.geometry} material={nodes.Box_3.material} position={[0.56, 0.48, 0.55]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_4.geometry} material={nodes.Box_4.material} position={[1.65, 0.47, 0.58]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_5.geometry} material={nodes.Box_5.material} position={[-1.62, 0.51, -0.76]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_6.geometry} material={nodes.Box_6.material} position={[-0.49, 0.5, -0.75]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_7.geometry} material={nodes.Box_7.material} position={[0.55, 0.5, -0.75]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_8.geometry} material={nodes.Box_8.material} position={[1.68, 0.49, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_11.geometry} material={nodes.Box_11.material} position={[1.67, 1.08, -0.71]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_12.geometry} material={nodes.Box_12.material} position={[0.54, 1.08, -0.71]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_13.geometry} material={nodes.Box_13.material} position={[-0.52, 1.08, -0.71]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_14.geometry} material={nodes.Box_14.material} position={[-1.63, 1.08, -0.74]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_15.geometry} material={nodes.Box_15.material} position={[-1.63, 1.08, 0.53]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_16.geometry} material={nodes.Box_16.material} position={[-0.48, 1.08, 0.53]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_17.geometry} material={nodes.Box_17.material} position={[0.57, 1.08, 0.53]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_18.geometry} material={nodes.Box_18.material} position={[1.67, 1.08, 0.53]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_19.geometry} material={nodes.Box_19.material} position={[1.67, 1.68, 0.53]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_20.geometry} material={nodes.Box_20.material} position={[1.67, 1.68, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_21.geometry} material={nodes.Box_21.material} position={[0.54, 1.68, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_22.geometry} material={nodes.Box_22.material} position={[0.54, 1.68, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_23.geometry} material={nodes.Box_23.material} position={[-0.52, 1.67, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_24.geometry} material={nodes.Box_24.material} position={[-1.64, 1.68, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_25.geometry} material={nodes.Box_25.material} position={[-1.64, 1.68, 0.63]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_26.geometry} material={nodes.Box_26.material} position={[-0.47, 1.68, 0.63]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_27.geometry} material={nodes.Box_27.material} position={[0.55, 1.66, 0.63]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_28.geometry} material={nodes.Box_28.material} position={[1.67, 2.27, 0.53]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_29.geometry} material={nodes.Box_29.material} position={[1.67, 2.27, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_30.geometry} material={nodes.Box_30.material} position={[0.55, 2.27, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_31.geometry} material={nodes.Box_31.material} position={[-0.54, 2.27, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_32.geometry} material={nodes.Box_32.material} position={[-1.63, 2.27, -0.73]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_33.geometry} material={nodes.Box_33.material} position={[0.58, 2.27, 0.6]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_34.geometry} material={nodes.Box_34.material} position={[-0.48, 2.27, 0.6]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_35.geometry} material={nodes.Box_35.material} position={[-1.63, 2.27, 0.6]} scale={[1, 0.6, 1.2]} />
      <mesh geometry={nodes.Box_9.geometry} material={nodes.Box_9.material} position={[4.64, -0.46, -2.99]} scale={0} />
      <mesh geometry={nodes.Box_10.geometry} material={nodes.Box_10.material} position={[3.9, 0, 0]} scale={0} />
    </group>
    </group>
  )
}

useGLTF.preload('/scene.glb')


const AutoStack = () => {

  return (
    <div className='main-body'>
        <div className=''>
        <h1>New Project</h1>
        </div>
        <Canvas camera={{fov:70, position:[0,0,10]}}>
          <Suspense fallback={null}>
            <ambientLight/>
              <Model/>
              <OrbitControls enablePan={true} enableZoom={ true} enableRotate={true} />
          </Suspense>
        </Canvas>
    </div>
  )
}

export default AutoStack