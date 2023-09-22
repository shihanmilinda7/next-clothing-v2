import { combineReducers } from "@reduxjs/toolkit";
import poReducer from "./purchaseorder/po-slice";

const rootReducer = combineReducers({
  poReducer,
});

export default rootReducer;
