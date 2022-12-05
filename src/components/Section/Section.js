import React, { useRef } from "react";
import I5 from "../Images/men.png";
import I6 from "../Images/v1.png";
import I7 from "../Images/1.png";
import I8 from "../Images/5.png";
import I9 from "../Images/6.png";
import classes from "./Section.module.css";
import { useDispatch } from "react-redux";
import { numberHandler, nextHandler } from "../Store/counterSlice";
export default function Section() {
  const mobileInputRef = useRef();
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    const enteredNumber = mobileInputRef.current.value;
    console.log(enteredNumber);
    dispatch(numberHandler(enteredNumber));
    if (enteredNumber !== "") dispatch(nextHandler(true));
  }
  return (
    <div className={classes.section_align}>
      <img className={classes.section_align_i7} alt="Img" src={I7} />
      <img className={classes.section_align_i8} alt="Img" src={I8} />
      <img className={classes.section_align_i9} alt="Img" src={I9} />
      <img className={classes.section_img} alt="Img" src={I5} />

      <div className={classes.section_about}>
        <h2>Learn and Earn from Stock Market with Fun</h2>
        <h1>Launching STOCKSY App (beta version)</h1>
        <div className={classes.section_inputField}>
          <p>Get Early Access</p>
          <form onSubmit={submitHandler}>
            <input
              className={classes.section_input}
              placeholder="Enter Phone No."
              type="tel"
              id="phone"
              name="phone"
              ref={mobileInputRef}
            />
            <button className={classes.section_input_button}>Get Link</button>
          </form>
        </div>
        <div className={classes.section_contact}>
          <p>Contact</p>
          <div className={classes.section_email}>
            <img alt="Img" src={I6}></img>
            <p>hello@stocksy.app</p>
          </div>
        </div>
        <div className={classes.section_blur}></div>
      </div>
    </div>
  );
}
