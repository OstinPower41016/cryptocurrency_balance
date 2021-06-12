import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const sumSlice = createSlice({
  name: "sum",
  initialState: {
    totalBalance: "",
    inOrders: "",
    freeVolume: "",
  },
  reducers: {
    setSumData: (state, action: PayloadAction<{ data: any }>) => {
      const data = action.payload.data;
      let totalBalance = 0;
      let inOrders = 0;
      let freeVolume = 0;

      data.forEach((val: any) => {
        totalBalance += val.balance * val.price;
        inOrders += val.frozen * val.price;
        freeVolume += val.available * val.price;
      });

      state.totalBalance = totalBalance.toFixed(5);
      state.inOrders = inOrders.toFixed(5);
      state.freeVolume = freeVolume.toFixed(5);
    },
  },
});

export const { setSumData } = sumSlice.actions;

export default sumSlice.reducer;
