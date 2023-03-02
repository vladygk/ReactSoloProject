import { Button, Grid } from '@mui/material'
import React from 'react'
import styles from "./ProductActions.module.scss"

export default function ProductActions(isLive,
currency,
buyAmount,
bidAmount,
onBuy,
onBid) {
  return (
    <div className={styles["product-actions"]}>
<Grid container>
    <Grid  sx={7} item><Button disabled={isLive? true: false} onClick={onBuy} className={styles["button"]}>{`Buy for ${buyAmount} ${currency}`}</Button></Grid>
    <Grid  sx={5} item><Button disabled={isLive? true: false} onClick={onBid} className={styles["button"]}>{`Place a Bid fro ${bidAmount} ${currency}`}</Button></Grid>
</Grid>
    </div>
  )
}
