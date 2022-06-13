import dice1 from "../img/1.png";
import dice2 from "../img/2.png";
import dice3 from "../img/3.png";
import dice4 from "../img/4.png";
import dice5 from "../img/5.png";
import dice6 from "../img/6.png";

const initialState = {
  dices: [dice1, dice2, dice3],
  playerChoice: "",
  goals: 0,
  totalGames: 0,
  totalPoint: 0,
  result: null,
};

const diceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CHOICE": {
      if (!action.choice) return { ...state, playerChoice: "" };
      const choice = action.choice === 1 ? "TÀI" : "XỈU";
      return { ...state, playerChoice: choice, result: null };
    }
    case "CACULATE_RESULT_DICE": {
      // const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];
      // let totalPoint = 0;
      // const dices = state.dices.map((item) => {
      //   const face = Math.floor(Math.random() * 5 + 0);
      //   totalPoint += face + 1;
      //   return diceFaces[face];
      // });
      let goals = state.goals;
      let result = state.result;
      if (
        (state.totalPoint % 2 !== 0 && state.playerChoice === "TÀI") ||
        (state.totalPoint % 2 === 0 && state.playerChoice === "XỈU")
      ) {
        goals++;
        result = 1;
      } else result = -1;
      return {
        ...state,
        totalGames: state.totalGames + 1,
        goals,
        result,
      };
    }
    case "RANDOM_DICE": {
      const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];
      let totalPoint = 0;
      const dices = state.dices.map((item) => {
        const face = Math.floor(Math.random() * 5 + 0);
        totalPoint += face + 1;
        return diceFaces[face];
      });
      return { ...state, dices, totalPoint };
    }

    case "RESET_DICE": {
      return { ...state, result: null };
    }
    default:
      return state;
  }
};

export default diceReducer;
