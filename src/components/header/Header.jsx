import React from "react";
import Logo from "../logo/Logo";
import { Grid, Container, Button, TextField,startAdornment,InputAdornment,InputProps } from "@mui/material";

 import styles from "./Header.module.scss";
 import SearchIcon from '@mui/icons-material/Search';


export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container} maxWidth="false">
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid className={styles.logoGrid} item xs={1}>
        <Logo />
      </Grid>
      <Grid className={styles.inputGrid} item xs={6}>
        
      <TextField
      fullWidth
        id="input-with-icon-textfield"
        className={styles.input}
        placeholder="Find items, users and activities"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: "white" }} />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
       
      </Grid>
      <Grid className={styles.buttonGrid} item xs={5}>
        <Button   className={styles.textBtn} variant="text">Home</Button>
        <Button className={styles.textBtn}  variant="text">Activity</Button>
        <Button className={styles.containedBtn} variant="contained">Explore</Button>
      </Grid>
    </Grid>
    </Container>
    </div>
  );
}
