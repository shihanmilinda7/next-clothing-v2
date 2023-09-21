import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomerData, fetchFabricData, fetchSupplierData } from "./utils";

interface poState {
  customerOptionValues: any[];
  supplierOptionValues: any[];
  fabricOptionValues: any[];
}

const initialState: poState = {
  customerOptionValues: [],
  supplierOptionValues: [],
  fabricOptionValues: [],
};

const poSlice = createSlice({
  name: "po",
  initialState,
  reducers: {},
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
      });
  },
});

export default poSlice.reducer;
