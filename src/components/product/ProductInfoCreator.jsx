import React from 'react'
import User from "../user/User"
export default function ProductInfoCreator({
    name,
   avatar,
   verified=false,
   }) {
  return (
    <div className='product-info-creator'>
        <label className='title'>Creator</label>
        <div className='user-container'>
            <User name={name} avatar={avatar} verified={verified}/>
        </div>
        
    </div>
  )
}
