import { combineReducers } from "@reduxjs/toolkit";
// import baseinfoupdateReducer from "./basinfo-update";
// import setbaseinfoupdateReducer from "./setsaved-baseinfo-inselect";
import itemReducer from "./items/item-slice";
import poReducer from "./purchaseorder/po-slice";
import baseinfoReducer from "./baseinfo-slice";

const rootReducer = combineReducers({
  // baseinfoupdateReducer,
  // setbaseinfoupdateReducer,
  poReducer,
  itemReducer,
  baseinfoReducer,
});

export default rootReducer;
