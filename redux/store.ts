import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { pokemonsReducer } from "./pokemonsSlice";
import { loadingReducer } from "./loadingSlice";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
