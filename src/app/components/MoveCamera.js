import React from 'react'

export default function MoveCamera() 
pos = document.getElementsByTagName('a-camera')[0].getAttribute('position').z
    document.getElementsByTagName('a-camera')[0].getAttribute('position').z = pos + 1;{
  return (
    <>
    pos = document.getElementsByTagName('a-camera')[0].getAttribute('position').z
    document.getElementsByTagName('a-camera')[0].getAttribute('position').z = pos + 1;
    </>
  )
}
