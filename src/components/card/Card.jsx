import React from "react";
import MCard from "@mui/material/Card";
import Avatar from "../avatar/Avatar";
import { Chip } from "@mui/material";
import styles from "./Card.module.scss";
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Countdown from 'react-countdown';
import CircleIcon from '@mui/icons-material/Circle';
export default function Card({
  name,
  likes = 0,
  mediaUrl = "./images/nft.jpg",
  user ,
  price,
  currency,
  timeLeft
}) {
  return (
    <div >
      <MCard className={styles.card} >
        <div className={styles.avatar}>  <Avatar url={user? user.avatar:null} size={75} verified={user? user.verified : false} /></div>

        {timeLeft&&<div className={styles.timerWrapper}><Countdown className={styles.timer} date={Date.now() + timeLeft} /></div>}

        {timeLeft&&<div className={styles.badge}><CircleIcon sx={{scale:"0.6"}}/>Live</div>}
        <img className={styles.media} src={mediaUrl} alt="" />
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>{price} {currency}</div>
        <Chip className={styles.likes} icon = {<FavoriteIcon style={{ color: "#00ff21" }} />}label={millify(likes)} variant="outlined" />
      </MCard>
    </div>
  );
}
