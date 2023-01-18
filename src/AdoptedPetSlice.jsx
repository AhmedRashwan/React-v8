import { createSlice } from "@reduxjs/toolkit";
const AdoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: { adoptedPet: null },
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { adopt } = AdoptedPetSlice.actions;
export default AdoptedPetSlice.reducer;
