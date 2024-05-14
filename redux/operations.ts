import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=20"
      );
      const { results } = data;
      const list = await Promise.all(
        results.map(async (pokemon) => {
          const { data: info } = await axios.get(pokemon.url);
          return info;
        })
      );
      return list;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
