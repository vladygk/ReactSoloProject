import React,{useState} from "react";
import styles from "./TopCollectors.module.scss";
import { Select,MenuItem,Container, Grid } from "@mui/material";
import CollectorColumn from "./CollectorColumn";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import _ from "lodash"
export default function TopCollectors({collectors=[]}) {
    const [selectedValue, setSelectedValue] = useState();
    collectors.map((item,index)=>item.id=index+1)
  return (
    <div >
        <Container maxWidth={false} className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Top Collectors</h1>
        <Select
          defaultValue={"week"}
          value={selectedValue}
          IconComponent={ExpandMoreIcon}
          sx={{
            "& .MuiSvgIcon-root": {
              color: "white",
              scale: "2",
              marginRight: "20px",
            },
          }}
          className={styles.select}
        >
          <MenuItem value={"week"}>This week</MenuItem>
          <MenuItem value={"month"}>This month</MenuItem>
          <MenuItem value={"year"}>This year</MenuItem>
        </Select>
      </header>
      </Container>
      <Grid container className={styles.gridContainer}>
         
          {_.chunk(collectors,3).map(item=><Grid item><CollectorColumn items={item}/></Grid>)}

      </Grid>
    </div>
  );
}
