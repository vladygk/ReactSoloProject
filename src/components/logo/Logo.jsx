import React from 'react'

export default function Logo(props) {
  const {type} = props; 
  
  return (
    <img src={type==='muted'? "./images/logo-muted.svg":"./images/logo.svg"} alt="" />
  )
}

