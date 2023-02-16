import React from "react";
import styles from "./CollectorColumn.module.scss";
import Collector from "./Collector";
export default function CollectorColumn({ items = [] }) {
  return (
    <div className={styles.wrapper}>
      {items.map((x, index) => (
        <Collector
          name={x.name}
          type={index%2===0 ? "darker":"lighter"}
          verified={x.verified}
          avatar={x.avatar}
          id={x.id}
          nftsCount={x.nftsCount}
        />
      ))}
    </div>
  );
}
