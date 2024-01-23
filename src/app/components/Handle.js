import React from 'react'

export default function Handle() {
  return (
    <>
    AFRAME.registerComponent('handle-events', {
       init: function () {
         var el = this.el;
         console.log(el)  //
         el.addEventListener('mouseenter', function () {
           console.log(el.getAttribute('data-info'));
           console.log("mouseenter");

         });
         el.addEventListener('mouseleave', function () {
             console.log(el.getAttribute('data-info'));
             console.log("mouseleave");
         });
         el.addEventListener('click', function () {
             console.log(el.getAttribute('data-info'));
             console.log("click");
             alert(el.getAttribute('data-info'));
         });
       }
    });
    </>
  )
}
