import React from "react";
import Avatar from "../avatar/Avatar";
import styles from "./User.module.scss";

export default function User({
  name = "",
  info = "",
  avatar = "",
  size = 55,
  verified = false,
}) {
  return (
    <div
      className={styles.user}
      style={{  width: size * 2.2 }}
    >
      <Avatar size={size} url={avatar?avatar: "/images/avatar.png"} verified={verified} />
      <div className={styles.nameInfo}>
        <div className={styles.name}>{name}</div>
        <div className={styles.info}>{info}</div>
      </div>
    </div>
  );
}
