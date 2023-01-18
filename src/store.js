import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./AdoptedPetSlice";
import searchParams from "./SearchParamsSlice";
import language from "./LanguageSlice";
import { petApi } from "./PetApiService";
const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    language,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(petApi.middleware);
  },
});
export default store;
