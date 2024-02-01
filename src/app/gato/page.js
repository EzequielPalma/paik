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
import CameraEntity from '../components/CameraEntity';


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
        <CameraEntity/>
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
