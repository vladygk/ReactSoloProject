import React from 'react'
import styles from "./ProductInfo.module.scss"
import ProductInfoTitle from "./ProductInfoTitle"
import ProductInfoPrice from "./ProductInfoPrice"
import ProductInfoStatus from "./ProductInfoStatus"
import ProductInfoLikes from "./ProductInfoLikes"
import ProductInfoCreator from "./ProductInfoCreator"
import ProductInfoTimer from "./ProductInfoTimer"
import { Grid, Stack } from '@mui/material'
export default function ProductInfo({
    title,
    creator,
    price,
    currency,
    likes,
    onTimeEnd,
    timeEnd,
    isLive
    }) {
  return (
    <div className='product-info'>
        <ProductInfoTitle text={title}/>

        {isLive && <ProductInfoStatus/>}
        <Stack className="stats">
        <ProductInfoPrice amount={price} currency={currency} />
        <ProductInfoLikes amount={likes}/>
        </Stack>
        <Grid columns={{ xs: 7, md: 5 }} container>
            <Grid item> <ProductInfoCreator name={creator.name} avatar={cretor.avatar} verified={creator.verified}/></Grid>
            <Grid item> <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/></Grid>
        </Grid>
       
       
    </div>
  )
}
