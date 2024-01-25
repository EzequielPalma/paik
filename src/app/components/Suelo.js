import React from 'react'

export default function Suelo() {
  return (
    <a-box 
       position="-1 0 0"
       rotation="0 45 0"
       scale="100 0.005 100"
       material="src: images/wall/cinder.jpg; repeat: 20 20; color: #696969; roughness: 1; metalness: 0">   </a-box>
  )
}
