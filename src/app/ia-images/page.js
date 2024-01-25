"use client"
import React, { useState, useEffect } from 'react';
import Sky from '../components/Sky';
import Moon from '../components/Moon';
import Navbar from '../components/Navbar';
import Joystick from '../components/Joystick';
import {Entity} from "aframe-react"

const IaImages= () => {
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
         
      <Navbar/>
      {/* <Joystick/> */}
        {/* <a-scene className="relative z-1" cursor="rayOrigin: mouse"  >
    <Entity primitive="a-camera"  look-controls="enabled: true" wasd-controls="enabled: true" joystick-controls="turnSpeed:3; moveSpeed:4; margin:80 80;">
          <Entity primitive="a-box" position="-2 0 -2" rotation="0 45 0" color="#4CC3D9"  />
        </Entity>
      
      <Moon/>
      
      <Sky/>    
           
      
    </a-scene> */}
    </>
  )
}

export default IaImages;
