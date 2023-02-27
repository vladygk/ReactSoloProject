import { Typography } from '@mui/material'
import React from 'react'
import styles from "./ProductInfoTitle.module.scss"

export default function ProductInfoTitle({text}) {
  return (
    <div className={styles['product-info-title']}>
        <Typography className={styles['title']} variant='h2'>{text}</Typography>
    </div>
  )
}
