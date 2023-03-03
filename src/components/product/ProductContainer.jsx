import React from 'react'
import styles from "ProductContainer.module.scss"
import { Grid } from '@mui/material'
import ProductTabs from './ProductTabs'
import ProductImage from './ProductImage'
import ProductActions from './ProductActions'
import ProductInfo from "./ProductInfo"





export default function ProductContainer({name,bids,source,currency,price,likes,owner,details,auction_end}) {
  return (
    <div className={styles['product-container']}>
<Grid container>
    <Grid xs={6} item>
        <ProductTabs text={details} bids={bids}/>
    </Grid>
    <Grid xs={5} item>
        <ProductImage url={source.url}/>
    </Grid>
    <Grid xs={5} item>
        <ProductActions />
    </Grid>
    <Grid xs={5} item>
        <ProductInfo title={name} creator={owner} price={price} currency={currency} likes={likes} timeEnd={auction_end}  />
    </Grid>
</Grid>
    </div>
  )
}
