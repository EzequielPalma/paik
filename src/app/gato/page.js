"use client"
import React, { useState, useEffect } from 'react';
import Suelo from '../components/Suelo';
import Gato from '../components/Gato';
import Moon from '../components/Moon';
import ColumnsRec from '../components/ColumnsRec';
import FlowerGroup from '../components/FlowerGroup';
import Grass from '../components/Grass';
import Sky from '../components/Sky';
import FrameGroup from '../components/FrameGroup';
import ChartGroupGato from '../components/ChartGroupGato';
import Navbar from '../components/Navbar';
import Script from 'next/script';
import Grow from '../components/AframeComponents/Grow';


const Momo = () => {
 
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);

    if (typeof window !== 'undefined') {
      require('aframe');
    }
  }, [setRendered]);

  if (!rendered) {
    return <>loading</>;
    
  }


  return (
    <> 
      <Script src="https://cdn.jsdelivr.net/gh/mrturck/aframe-joystick@master/joystick.min.js"/>

      <Navbar/>

      <Grow/>


      <a-scene joystick  cursor="rayOrigin: mouse"    >
        <a-camera position="0 5 0" rotation="-90 0 0" id="camera" >
          <a-entity gltf-model="images/eze.glb" scale="2 2 2" rotation="0 180 0" position="-0.64 -5.56 -7.02" dynamic-body ></a-entity>
        </a-camera>

        <Suelo/>
        <Gato/>
        <Grass/>
        <Moon/> 
        <ColumnsRec/>
        <FlowerGroup/>
        <Sky/>    
        <FrameGroup/>
        <ChartGroupGato/>         
      </a-scene>
    </>
  )
}

export default Momo;
