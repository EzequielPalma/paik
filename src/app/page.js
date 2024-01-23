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
    <Navbar/>

    <a-scene className="relative z-1" cursor="rayOrigin: mouse">
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


AFRAME.registerComponent('hello', {
  init: function () {
      var el = this.el; // Obtén la referencia al elemento

      // Agrega un evento de clic al elemento
      el.addEventListener('click', function () {
          console.log('Hello, World!');
          alert('¡Hola! Al fin, joder!!!');
      });
  }
});




// // const AFRAME = window.AFRAME;

// AFRAME.registerComponent('console', {
//   init: function () {
//   console.log("hola")
//   }
//   })

// AFRAME.registerComponent('handle-events', {
//   init: function () {
//     var el = this.el;
//     console.log(el)  //
//     el.addEventListener('mouseenter', function () {
//       console.log(el.getAttribute('data-info'));
//       console.log("mouseenter");

//     });
//     el.addEventListener('mouseleave', function () {
//         console.log(el.getAttribute('data-info'));
//         console.log("mouseleave");
//     });
//     el.addEventListener('click', function () {
//         console.log(el.getAttribute('data-info'));
//         console.log("click");
//         alert(el.getAttribute('data-info'));
//     });
//   }
// });