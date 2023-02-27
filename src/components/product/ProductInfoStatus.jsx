import { Chip } from '@mui/material'
import React from 'react'
import styles from "./ProductInfoStatus.module.scss"
export default function ProductInfoStatus() {
  return (
    <div className={styles['product-info-status']}><Chip className={styles['status']}/></div>
  )
}
