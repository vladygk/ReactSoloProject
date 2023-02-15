import { Button, Grid } from "@mui/material";
import React from "react";
import styles from "./How.module.scss";
import Step from "./Step";
export default function How({ description, title, items = [], link }) {
  return (
    <>
      <Grid container className={styles.wrapper}>
        <Grid item className={styles.title}>
          {title}
        </Grid>
        <Grid item className={styles.descriptionWrapper}>
          <p className={styles.description}>{description}</p>
        </Grid>
        <Button href={link} className={styles.btn} variant="contained">
          LEARN MORE
        </Button>

        <div className={styles.steps}>
          {items.map((x, index) => (
            <Step
              key={index + 1}
              number={index + 1}
              title={x.title}
              description={x.description}
            />
          ))}
        </div>
      </Grid>
    </>
  );
}
