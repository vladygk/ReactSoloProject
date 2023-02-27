import { Typography } from '@mui/material'
import React from 'react'

export default function ProductInfoTitle({text}) {
  return (
    <div className='product-info-title'>
        <Typography className='title' variant='h2'>{text}</Typography>
    </div>
  )
}
