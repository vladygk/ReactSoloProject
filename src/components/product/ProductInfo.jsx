import React from 'react'
import styles from "./ProductInfo.module.scss"
import ProductInfoTitle from "./ProductInfoTitle"
import ProductInfoPrice from "./ProductInfoPrice"
import ProductInfoStatus from "./ProductInfoStatus"
import ProductInfoLikes from "./ProductInfoLikes"
import ProductInfoCreator from "./ProductInfoCreator"
import ProductInfoTimer from "./ProductInfoTimer"
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
        {isLive && <ProductInfoStatus/>}
        <ProductInfoLikes amount={likes}/>
        <ProductInfoCreator name={creator.name} avatar={cretor.avatar} verified={creator.verified}/>
        <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/>
    </div>
  )
}
