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
        
        variant="quilted"
        cols={6}
        rows={2}
        gap={10}
      >
        {items.map((item) => (
          <ImageListItem
            
            key={item.title}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
            onClick={()=>{router.push(item.href)}}
            className={styles.image}
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
