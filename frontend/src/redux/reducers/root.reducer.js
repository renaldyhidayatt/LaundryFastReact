import { combineReducers } from "redux";
import { registerUserReducer, loginUserReducer } from "./auth.reducer";
import {
  addMemberReducer,
  deleteMemberReducer,
  getmemberIdReducer,
  memberReducer,
  updateMemberReducer,
} from "./member.reducer";

const rootReducer = combineReducers({
  registerReducer: registerUserReducer,
  authReducer: loginUserReducer,
  memberReducer: memberReducer,
  addMemberReducer: addMemberReducer,
  updateMemberReducer: updateMemberReducer,
  getMemberReducer: getmemberIdReducer,
  deleteMemberReducer: deleteMemberReducer,
});

export default rootReducer;
