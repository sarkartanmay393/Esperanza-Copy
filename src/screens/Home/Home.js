import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import HomePageText from "../../components/HomePageText";

const Home = () => {
  return (
    <>
      <HomePageText />
      <Canvas>
        <OrbitControls />
        <Stars />
      </Canvas>
    </>
  );
};

export default Home;
