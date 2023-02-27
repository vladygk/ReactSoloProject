import React from 'react'
import User from "../user/User"
import styles from "./ProductInfoCreator.module.scss"

export default function ProductInfoCreator({
    name,
   avatar,
   verified=false,
   }) {
  return (
    <div className={styles['product-info-creator']}>
        <label className={styles['title']}>Creator</label>
        <div className={styles['user-container']}>
            <User name={name} avatar={avatar} verified={verified}/>
        </div>
        
    </div>
  )
}
