import React from "react";
import styles from "./Collector.module.scss";
import User from "../user/User";
export default function Collector({
  name,
  avatar,
  verified,
  type,
  id = 0,
  nftsCount = 0,
}) {
  const classNameNumber = `number-${type}`;
  const classNameContainer = `container-${type}`;

  return (
    <div class={styles[classNameContainer]}>
      <div className={styles[classNameNumber]}>{id}</div>
      <div className={styles.userContainer}>
        <User
          name={name}
          info={`${nftsCount} items`}
          avatar={avatar}
          verified={verified}
        />
      </div>
    </div>
  );
}
