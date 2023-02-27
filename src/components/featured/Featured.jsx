import { Container, ImageList, ImageListItem,srcset } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Featured.module.scss";

export default function Featured({ items = [] }) {

const router = useRouter();

  return (
    <Container  className={styles.wraper}  maxWidth={false}>
      <ImageList 
      className={styles.imageList}
        
        variant="standard"
        cols={2}
        row={2}
        gap={10}
      >
        {items.map((item,index) => (
          <ImageListItem
            
            key={index}
            
          >
            <img
            onClick={()=>{router.push(item.href)}}
            className={index===0? styles["big-image"] :styles.image}
             src={item.image}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
