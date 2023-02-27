import React from 'react'
import styles from "./ProductInfo.module.scss"
import ProductInfoTitle from "./ProductInfoTitle"
import ProductInfoPrice from "./ProductInfoPrice"
import ProductInfoStatus from "./ProductInfoStatus"
export default function ProductInfo({
    title,
    creator: {
           //"name": String,
           //"avatar": String,
           //"verified": Boolean
    },
    price,
    currency,
    likes,
    onTimeEnd,
    timeEnd,
    isLive
    }) {
  return (
    <div className={styles['product-info']}>
        <ProductInfoTitle text={title}/>
        <ProductInfoPrice amount={price} currency={currency} />
        <ProductInfoStatus/>

    </div>
  )
}
