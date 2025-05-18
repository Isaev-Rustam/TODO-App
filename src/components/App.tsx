import React from "react";
import classes from "@/App.module.css";
import btn from "@/assets/image.svg";
import bgBtn from "@/assets/image.jpeg";

export class App extends React.Component {
  render(): React.ReactElement {
    return (
      <div className={classes.example}>
        <button
          style={{ background: `url(${bgBtn}) no-repeat center/cover` }}
          className={classes.button}
          onClick={() => console.log(classes, classes)}
        >
          <img width={50} height={50} src={btn} alt="App Image" />
          <span> Click me!</span>
        </button>
      </div>
    );
  }
}
