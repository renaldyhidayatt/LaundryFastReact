import { combineReducers } from "redux";
import { registerUserReducer, loginUserReducer } from "./auth.reducer";
import {
  addMemberReducer,
  deleteMemberReducer,
  getmemberIdReducer,
  memberReducer,
  updateMemberReducer,
} from "./member.reducer";

import {
  outletListReducer,
  addOutletReducer,
  updateOutletReducer,
  deleteOutletReducer,
  getOutletIdReducer,
} from "./outlet.reducer";

import {
  paketListReducer,
  addPaketReducer,
  updatePaketReducer,
  getPaketIdReducer,
  deletePaketReducer,
} from "./paket.reducer";

const rootReducer = combineReducers({
  registerReducer: registerUserReducer,
  authReducer: loginUserReducer,
  memberReducer: memberReducer,
  addMemberReducer: addMemberReducer,
  updateMemberReducer: updateMemberReducer,
  getMemberReducer: getmemberIdReducer,
  deleteMemberReducer: deleteMemberReducer,
  outletListReducer: outletListReducer,
  addOutletReducer: addOutletReducer,
  updateOutletReducer: updateOutletReducer,
  deleteOutletReducer: deleteOutletReducer,
  getOutletIdReducer: getOutletIdReducer,
  paketListReducer,
  addPaketReducer,
  updatePaketReducer,
  getPaketIdReducer,
  deletePaketReducer,
});

export default rootReducer;
