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
      <Joystick/>


    
    <a-scene className="relative z-1" cursor="rayOrigin: mouse">
    <a-camera position="-10 4 -10" joystick-controls="turnSpeed:3; moveSpeed:4; margin:80 80;"></a-camera>
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





