import React from "react";
import MCard from "@mui/material/Card";
import Avatar from "../avatar/Avatar";
import { Chip } from "@mui/material";
import styles from "./Card.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Card({
  name,
  likes = 0,
  mediaUrl = "./images/nft.jpg",
  user: {
    avatar: { url },
    verified,
  },
  price,
  currency,
}) {
  return (
    <div >
      <MCard className={styles.card} >
        <div className={styles.avatar}>  <Avatar url={url} size={75} verified={verified} /></div>
      

        <img className={styles.media} src={mediaUrl} alt="" />
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>{price} {currency}</div>
        <Chip className={styles.likes} icon = {<FavoriteIcon style={{ color: "#00ff21" }} />}label={millify(likes)} variant="outlined" />
      </MCard>
    </div>
  );
}
