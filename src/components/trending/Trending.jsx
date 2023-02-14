import { Container, Grid, Select, MenuItem, InputLabel } from "@mui/material";
import React, { useState } from "react";
import Card from "../card/Card";
import styles from "./Trending.module.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Trending({ cards=[] }) {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <div className={styles.wraper}>
      <Container maxWidth={false} className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Trending</h1>

          <Select
            defaultValue={"week"}
            value={selectedValue}
            IconComponent ={ExpandMoreIcon}
            sx={{
                
                '& .MuiSvgIcon-root': {
                    color: 'white',
                    scale:"2",
                    marginRight:"20px"
                }
            }}
            className={styles.select}
          >
            <MenuItem value={"week"}>This week</MenuItem>
            <MenuItem value={"month"}>This month</MenuItem>
            <MenuItem value={"year"}>This year</MenuItem>
          </Select>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item>
            <Card
              user={cards[0].user}
              name={cards[0].name}
              price={cards[0].price}
              currency={cards[0].currency}
            />
          </Grid>
          <Grid item>
            <Card
              user={cards[1].user}
              name={cards[1].name}
              price={cards[1].price}
              currency={cards[1].currency}
            />
          </Grid>
          <Grid item>
            <Card
              user={cards[2].user}
              name={cards[2].name}
              price={cards[2].price}
              currency={cards[2].currency}
            />
          </Grid>
          <Grid item>
            <Card
              user={cards[3].user}
              name={cards[3].name}
              price={cards[3].price}
              currency={cards[3].currency}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
