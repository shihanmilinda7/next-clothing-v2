import { createSlice } from "@reduxjs/toolkit";

interface invoiceState {
  allPoDataList: any[];
  selectedPoDataList: any[];
  modifiedPoList: any[];
}

const initialState: invoiceState = {
  allPoDataList: [],
  selectedPoDataList: [],
  modifiedPoList: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setSelectedPoList: (state, action) => {
      state.selectedPoDataList = action.payload;
    },
    setAllPoDataList: (state, action) => {
      state.allPoDataList = action.payload;
    },
    setModifiedPoDataList: (state, action) => {
      state.modifiedPoList = action.payload;
    },
  },
});

export const { setSelectedPoList, setAllPoDataList, setModifiedPoDataList } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
