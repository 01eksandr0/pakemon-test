import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { filterReducer } from "./filterSlice";
import { pokemonsReducer } from "./pokemonsSlice";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
