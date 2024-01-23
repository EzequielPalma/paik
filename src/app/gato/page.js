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
      <Navbar/>
      <a-scene cursor="rayOrigin: mouse">
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
