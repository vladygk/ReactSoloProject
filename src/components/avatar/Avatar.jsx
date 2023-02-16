import React from "react";
import styles from "./Avatar.module.scss";
export default function Avatar({
  size = 90,
  url=null ,
  verified = false,
}) {
  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      <img className={styles.image} src={url? url: "./images/avatar.png"} alt="" />
      {verified && (
        <img className={styles.badge} src="./images/verified.svg" alt="" />
      )}
    </div>
  );
}
