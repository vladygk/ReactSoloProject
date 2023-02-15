import { Container, Grid } from "@mui/material";
import React from "react";
import styles from "./How.module.scss";



export default function Step({ number, title, description }) {
  return<Container  maxWidth={false} className={styles.container}>
    <Grid className={styles.gridContainer} container>
    <Grid item className={styles.number}>{number}</Grid>
    <Grid item className={styles.info}>
        <div className={styles.titleStep}>{title}</div>
        <div className={styles.descriptionStep}><p className={styles.text}>{description}</p></div>
    </Grid>
  </Grid></Container>;
}
