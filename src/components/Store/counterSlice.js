import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "showMail",
  initialState: {
    value: "",
    nextPage: false,
  },
  reducers: {
    numberHandler: (state, action) => {
      state.value = action.payload;
    },
    nextHandler: (state, action) => {
      console.log(action.payload);
      state.nextPage = action.payload;
    },
  },
});

export const { numberHandler, nextHandler } = counterSlice.actions;
export default counterSlice.reducer;
