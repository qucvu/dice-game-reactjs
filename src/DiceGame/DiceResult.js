import React, { Component } from "react";
import { connect } from "react-redux";

class DiceResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rolling: false,
    };
  }
  onRoll = () => {
    if (!this.props.choice) {
      alert("Vui lòng chọn TÀI hoặc XỈU");
      return;
    }
    this.props.onResetResult();
    this.setState({ rolling: true });
    const timeRoll = setInterval(() => {
      this.props.onRandomDice();
    }, 50);
    setTimeout(() => {
      clearInterval(timeRoll);
      this.props.onHandleResult();
      this.setState({ rolling: false });
    }, 2000);
  };

  componentDidUpdate(prevProps) {
    // if(this.props.)
  }

  render() {
    const { goals, totalGames, choice } = this.props;
    return (
      <div className="text-center mt-4">
        <h1 className="mb-3">
          BẠN CHỌN: <span className="text-danger">{choice}</span>
        </h1>
        <h3 className="mb-3">
          Số bàn thắng: <span className="text-success">{goals}</span>
        </h3>
        <h3 className="mb-3">
          Tổng số bàn chơi: <span className="text-primary">{totalGames}</span>
        </h3>
        <button
          className="btn btn-success"
          onClick={this.onRoll}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "ROLLING..." : "PLAY GAME"}
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={this.props.handleResetDice}
        >
          Reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.dice.goals,
    totalGames: state.dice.totalGames,
    choice: state.dice.playerChoice,
    result: state.dice.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleResult: () => {
      const action = { type: "CACULATE_RESULT_DICE" };
      dispatch(action);
    },
    onRandomDice: () => {
      const action = { type: "RANDOM_DICE" };
      dispatch(action);
    },
    onResetResult: () => {
      dispatch({ type: "RESET_DICE_RESULT" });
    },
    handleResetDice: () => {
      dispatch({ type: "RESET_DICE_ALL" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiceResult);
