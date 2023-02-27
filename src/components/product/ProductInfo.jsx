import React from 'react'
import styles from "./ProductInfo.module.scss"
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
    <div>ProductInfo</div>
  )
}
