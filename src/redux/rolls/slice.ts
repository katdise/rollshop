import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Roll, RollSliceState, Status } from "./types";
import { fetchRolls } from "./asyncActions";

const initialState: RollSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const rollSlice = createSlice({
  name: "roll",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Roll[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (bouilder) => {
    bouilder.addCase(fetchRolls.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    bouilder.addCase(fetchRolls.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    bouilder.addCase(fetchRolls.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = rollSlice.actions;

export default rollSlice.reducer;
