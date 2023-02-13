import React from "react";

export default function Logo({type = 'default'}) {
  

  let src = "";

  if (type == "default") {
    src = "./images/logo.svg";
  } else if (type === "muted") {
    src = "./images/logo-muted.svg";
  }

  return <img src={src} alt="" />;
}
