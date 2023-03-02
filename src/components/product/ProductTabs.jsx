import { TabContext } from '@mui/lab';
import React from 'react'
import styles from "./ProductTabs.module.scss";

export default function ProductTabs({text,bids/*: [
    {
       "user": {
          "avatar" : String
          "name": String,
          "verified": Boolean
       },
       "amount": Number,
       "date": String
    },]*/
 }) {
  return (
    <div className={styles["product-tabs"]}>

<TabContext/>

    </div>
  )
}
