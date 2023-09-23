import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCustomerData,
  fetchFabricData,
  fetchSelPoDataForEdit,
  fetchSupplierData,
} from "./utils";

interface poState {
  customerOptionValues: any[];
  supplierOptionValues: any[];
  fabricOptionValues: any[];
  poDetailTableData: any[];
  selPoForEdit: any[];
}

const initialState: poState = {
  customerOptionValues: [],
  supplierOptionValues: [],
  fabricOptionValues: [],
  poDetailTableData: [],
  selPoForEdit: [],
};

const poSlice = createSlice({
  name: "po",
  initialState,
  reducers: {
    setPoDetailTableData: (state, action) => {
      state.poDetailTableData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerData.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        state.customerOptionValues = action.payload;
      })
      .addCase(fetchCustomerData.rejected, (state, action) => {
        // Handle rejected state if needed
      })
      .addCase(fetchSupplierData.fulfilled, (state, action) => {
        state.supplierOptionValues = action.payload;
      })
      .addCase(fetchFabricData.fulfilled, (state, action) => {
        state.fabricOptionValues = action.payload;
      })
      .addCase(fetchSelPoDataForEdit.fulfilled, (state, action) => {
        state.selPoForEdit = action.payload;
        console.log("selPoForEdit", action.payload);
      });
  },
});

export const { setPoDetailTableData } = poSlice.actions;

export default poSlice.reducer;
