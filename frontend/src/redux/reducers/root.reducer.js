import { combineReducers } from "redux";
import { registerUserReducer, loginUserReducer } from "./auth.reducer";
import { memberReducer } from "./member.reducer";

const rootReducer = combineReducers({
  registerReducer: registerUserReducer,
  authReducer: loginUserReducer,
  memberReducer: memberReducer,
});

export default rootReducer;
