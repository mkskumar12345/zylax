import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PopupState {
  ISOPEN: string;
}

const initialState: PopupState = {
  ISOPEN: "CLOSE",
};

export const popupSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    TOGGLE: (state, action: PayloadAction<string>) => {
      state.ISOPEN = action.payload;
    },
    // CLOSE: (state) => {
    //   state.ISOPEN = "CLOSE";
    // },
  },
});

export const { TOGGLE } = popupSlice.actions;

export default popupSlice.reducer;
