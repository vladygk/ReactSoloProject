import { Container, Grid, Select, MenuItem, InputLabel } from "@mui/material";
import React, { useState } from "react";
import Card from "../card/Card";
import styles from "./Auctions.module.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Trending({ cards=[] }) {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <div className={styles.wraper}>
      <Container maxWidth={false} className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>🔥Live Auctions</h1>

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
          {cards.map(x=><Grid item>
            <Card
              user={x.user}
              name={x.name}
              likes={x.likes}
              price={x.price}
              currency={x.currency}
              timeLeft={x.timeLeft}
            />
          </Grid>)}
          
        </Grid>
      </Container>
    </div>
  );
}
