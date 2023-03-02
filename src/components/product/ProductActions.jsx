import { Button, Grid } from '@mui/material'
import React from 'react'
import styles from "./ProductActions.module.scss"

export default function ProductActions({isLive,
currency,
buyAmount,
bidAmount,
onBuy,
onBid}) {
  return (
    <div className={styles["product-actions"]}>
<Grid container>
    <Grid  xs={7} item>
        <Button variant='contained' disabled={isLive ? false: true} onClick={onBuy} className={styles["button"]}>{`Buy for ${buyAmount} ${currency}`}</Button>
    </Grid>
    <Grid  xs={5} item>
        <Button variant='outlined'  disabled={isLive ? false: true} onClick={onBid} className={styles["button"]}>{`Place a Bid fro ${bidAmount} ${currency}`}</Button>
    </Grid>
</Grid>
    </div>
  )
}
