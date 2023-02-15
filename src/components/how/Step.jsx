import { Container, Grid } from "@mui/material";
import React from "react";
//import styles from "./How.module.scss";
import styles from "./Step.module.scss";


export default function Step({ number, title, description }) {
  
    return  <Grid className={styles.container} container>
    <Grid item className={styles.number}>{number}</Grid>
    <Grid item className={styles.info}>
        <div className={styles.titleStep}>{title}</div>
        <div className={styles.descriptionStep}><p className={styles.text}>{description}</p></div>
    </Grid>
  </Grid>;
}
