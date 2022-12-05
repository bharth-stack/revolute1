import React, { Fragment } from "react";
import classes from "./Header.module.css";
import I1 from "../Images/brand.png";
export default function Header() {
  return (
    <Fragment>
      <div>
        <img className={classes.header_align} alt="Img" src={I1}></img>
      </div>
    </Fragment>
  );
}
