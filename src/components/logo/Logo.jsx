import React from 'react'

function Logo(props) {
  return (
    <img src={props.type==='muted'? "./images/logo-muted.svg":"./images/logo.svg"} alt="" />
  )
}

export default Logo;