import React from 'react'

export default function Logo(props) {
  // let type;
  // if(props.type === undefined){
  //    type = 'default'; 
  // }else{
  //   type = props.type ;
  // }
 const type = props.type !== undefined ? props.type : 'default';
  
  return (

    <img src={type==='muted'? "./images/logo-muted.svg":"./images/logo.svg"} alt="" />
    
  )
}

