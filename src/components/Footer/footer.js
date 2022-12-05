import React, { Fragment } from "react";
import classes from "./footer.module.css";
import I2 from "../Images/Path1.png";
import I3 from "../Images/Path.png";
import I4 from "../Images/Vector.png";
export default function footer() {
  return (
    <Fragment>
      <div className={classes.footer_align}>
        <ul>
          <div className={classes.footer_policy}>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </div>
          <li>© Copyright ©2021 All rights reserved </li>
          <li>
            <div className={classes.footer_img}>
              <img className={classes.header_align} alt="Img" src={I2}></img>
              <img className={classes.header_align} alt="Img" src={I3}></img>
              <img className={classes.header_align} alt="Img" src={I4}></img>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
