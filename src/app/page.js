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
import Joystick from './components/Joystick';

import Script from 'next/script'





const Home = () => {
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
  
     
      <Navbar />
      {/* <Joystick/> */}

      <Script src="https://cdn.rawgit.com/mrturck/aframe-joystick/master/joystick.min.js"/>

    
    <a-scene className="relative z-1" cursor="rayOrigin: mouse" joystick   >
    <a-camera position="-10 4 -10" id="camera"></a-camera>

    {/* <Entity primitive="a-camera"  look-controls="enabled: true" wasd-controls="enabled: true"  joystick>
          <Entity primitive="a-box" position="-2 0 -2" rotation="0 45 0" color="#4CC3D9"  /> */}
        {/* </Entity> */}
      <Suelo/>
      <Gato/>
      <Grass/>  
      <Moon/> 
      <ColumnsRec/>
      <FlowerGroup/>
      <Sky/>    
      <FrameGroup/>
      <ChartGroup/>     
      
    </a-scene>
    </>
  );
};

export default Home;





