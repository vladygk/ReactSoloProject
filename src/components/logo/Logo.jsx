
import React from 'react'

export default function Logo(props) {

  const {type='default'} = props;
  console.log(type)
  return (

    <img src={type==='muted'? "./images/logo-muted.svg":"./images/logo.svg"} alt="" />
    
  )
}

