import React from "react";
import millify from "millify";

import styles from "./ProductInfoLikes.module.scss";
import { Chip } from "@mui/material";
export default function ProductInfoLikes({ amount = 0 }) {
  return (
    <div className={styles["product-info-likes"]}>
      <div className={styles.likes}><Chip variant="outlined" label={millify(amount)}/></div>
    </div>
  );
}
