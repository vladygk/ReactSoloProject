import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Table, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import styles from "./ProductTabs.module.scss";
import { parseISO, formatDistance } from "date-fns";
import User from "../user/User";
export default function ProductTabs({ text, bids }) {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles["product-tabs"]}>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab className={styles["tab-details"]} label="Details" value="1" />
          <Tab className={styles["tab-bids"]} label="Bids" value="2" />
        </TabList>
        <TabPanel value="1">{text}</TabPanel>
        <TabPanel value="2">
          <Table>
            {bids.map((bid, index) => {

              <TableRow className = {`${styles[`table-row-${index}`]} ${styles[`${index %2 ==0? 'even':'odd' }`]}`}>
                <TableCell>
                  <User
                    name={bid.user.name}
                    avatar={bid.user.avatar}
                    verified={bid.user.verified}
                  />
                </TableCell>
                <TableCell>{bid.amount}</TableCell>
                <TableCell>
                  {formatDistance(parseISO( bid.date,"HH:mm:ss"), Date.now(), { addSuffix: true })}
                </TableCell>
              </TableRow>;
            })}
          </Table>
        </TabPanel>
      </TabContext>
    </div>
  );
}

/*: [
    {
       "user": {
          "avatar" : String
          "name": String,
          "verified": Boolean
       },
       "amount": Number,
       "date": String
    },]*/
