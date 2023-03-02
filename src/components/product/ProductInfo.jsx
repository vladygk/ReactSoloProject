import React from "react";
import styles from "./ProductInfo.module.scss";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import { Grid, Stack } from "@mui/material";
export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={styles["product-info"]}>
      <Grid container>
        <Grid item>
          <ProductInfoTitle text={title} />
        </Grid>

        {isLive && (
          <Grid item>
            <ProductInfoStatus />
          </Grid>
        )}
        <Grid item>
          <Stack className="stats">
            <ProductInfoPrice amount={price} currency={currency} />
            <ProductInfoLikes amount={likes} />
          </Stack>
        </Grid>

        <Grid xs={5} item>
          <ProductInfoCreator
            name={creator.name}
            avatar={creator.avatar}
            verified={creator.verified}
          />
        </Grid>
        <Grid xs={7} item>
          <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
        </Grid>
      </Grid>
    </div>
  );
}
