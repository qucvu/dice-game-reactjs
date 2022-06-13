import React, { Component } from "react";
import styles from "./DiceGame.module.css";
import DiceItem from "./DiceItem";
import DiceResult from "./DiceResult";
import bg from "../img/bgGame.png";
class DiceGame extends Component {
  render() {
    return (
      <div className={styles.dice} style={{ backgroundImage: `url(${bg})` }}>
        <div className="container py-5">
          <h1 className={`text-center ${styles.title}`}>GAME ĐỔ XÚC XẮC</h1>
          <div className="my-4">
            <DiceItem />
          </div>
          <DiceResult />
        </div>
      </div>
    );
  }
}

export default DiceGame;
