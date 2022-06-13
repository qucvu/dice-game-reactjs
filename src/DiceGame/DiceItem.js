import React, { Component } from "react";
import styles from "./DiceItem.module.css";
import { connect } from "react-redux";

class DiceItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };
  }
  handleChoice = (choice, evt) => {
    // if (!this.props.playerChoice) {
    //   evt.target.classList.remove(`${styles.shadow}`);
    //   this.props.onChoose();
    //   return;
    // }
    this.setState({
      active: choice,
    });
    this.props.onChoose(choice);
  };
  render() {
    const { dices, result, totalPoint } = this.props;
    console.log(result);
    return (
      <div className="row text-center">
        <div className="col-sm-4">
          <div
            className={
              this.state.active === 1
                ? `${styles["dice-choice"]} ${styles.shadow}`
                : `${styles["dice-choice"]}`
            }
            onClick={(evt) => this.handleChoice(1, evt)}
          >
            TÀI
          </div>
        </div>
        <div className="col-sm-4">
          <div className="mb-1">
            {dices.map((dice, index) => {
              return (
                <img
                  key={index}
                  src={dice}
                  alt={`dice ${index}`}
                  width="90px"
                  className="img-fluid animate__animated animate__bounce"
                />
              );
            })}
          </div>
          {result ? (
            <div className="text-success fs-1">
              {result === 1 ? "BẠN ĐÚNG!!!" : "BẠN SAI!!!"}
              <p className="text-warning bg-dark fs-3">
                KẾT QUẢ: {totalPoint} - {totalPoint % 2 !== 0 ? "TÀI" : "XỈU"}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-sm-4">
          <div
            className={
              this.state.active === 2
                ? `${styles["dice-choice"]} ${styles.shadow}`
                : `${styles["dice-choice"]}`
            }
            onClick={(evt) => this.handleChoice(2, evt)}
          >
            XỈU
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dices: state.dice.dices,
    result: state.dice.result,
    totalPoint: state.dice.totalPoint,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChoose: (choice) => {
      const action = { type: "SELECT_CHOICE", choice };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiceItem);
