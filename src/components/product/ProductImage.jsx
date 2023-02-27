import React from 'react'

export default function ProductImage({url}) {
  return (
    <div className='product-image'>
        <img className='image' src={url} alt="" />
    </div>
  )
}
