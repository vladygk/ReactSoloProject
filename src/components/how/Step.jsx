import { Container, Grid, Item } from "@mui/material";
import React from "react";
import styles from "./Step.module.scss";



export default function Step({ number, title, description }) {
  return<Container  maxWidth={false} className={styles.container}>
    <Grid className={styles.gridContainer} container>
    <Grid item className={styles.number}>{number}</Grid>
    <Grid item className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}><p className={styles.text}>{description}</p></div>
    </Grid>
  </Grid></Container>;
}
