import React, { Fragment } from "react";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import { useSelector, useDispatch } from "react-redux";
import { nextHandler } from "./components/Store/counterSlice";
// import Contact from "./components/Contact/Contact";
import "./App.css";
import { useState } from "react";

function App() {
  // const [pageUp,pageUpHandler]=useState(false);
  const dispatch = useDispatch();
  const page = useSelector((state) => {
    return state.counter.nextPage;
  });
  console.log(page);
  const number = useSelector((state) => {
    return state.counter.value;
  });
  function backHandler(event) {
    event.preventDefault();
    dispatch(nextHandler(false));
  }
  // page?{}
  return (
    <Fragment>
      {!page && (
        <div className="App">
          <Header></Header>
          <Section></Section>
          <Footer></Footer>
        </div>
      )}
      {page && (
        <div>
          <h1> THIS IS YOUR LINK PAGE with NUMBER </h1>
          <h2>{number}</h2>
          <button onClick={backHandler}>go back</button>
        </div>
      )}
    </Fragment>
  );
}

export default App;
