"use client"


import React, { useState, useEffect } from 'react';
import Suelo from './components/Suelo';
import Gato from './components/Gato';
import Moon from './components/Moon';
import ColumnsRec from './components/ColumnsRec';
import FlowerGroup from './components/FlowerGroup';
import Grass from './components/Grass';
import Sky from './components/Sky';
import FrameGroup from './components/FrameGroup';
import ChartGroup from './components/ChartGroup';
import Navbar from './components/Navbar';
import Script from 'next/script'
import Eze from './components/Eze';
import AframeComponents from './components/AframeComponents/AframeComponents';
import CameraEntity from './components/CameraEntity';


const Home = () => {

  const [rendered, setRendered] = useState(false);


  useEffect(() => {
    setRendered(true);

    if (typeof window !== 'undefined') {
      require('aframe');
      require("aframe-extras");

    }
  }, [setRendered]);

  if (!rendered) {
    return <>loading</>;

  }

  return (
    <>
     <Script src="https://aframe.io/releases/1.5.0/aframe.min.js"></Script>
     <Script src="https://cdn.jsdelivr.net/gh/mrturck/aframe-joystick@master/joystick.min.js"/>

     <Navbar />

     <AframeComponents/>


     <a-scene joystick cursor="rayOrigin: mouse">

        


        <CameraEntity/>
        <Eze />
        <Suelo />
        <Gato/>
        <Grass />
        <Moon />
        <ColumnsRec />
        <FlowerGroup />
        <Sky />
        <FrameGroup />
        <ChartGroup />





      </a-scene>
    </>
  );
};

export default Home;





