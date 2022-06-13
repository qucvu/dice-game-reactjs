import { combineReducers } from "redux";
import diceReducer from "./diceReducer";

const rootReducer = combineReducers({
  dice: diceReducer,
});

export default rootReducer;
