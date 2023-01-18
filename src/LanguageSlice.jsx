import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
  name: "language",
  initialState: {
    value: { language: "en" },
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default LanguageSlice.reducer;
