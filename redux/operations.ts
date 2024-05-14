import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=20"
      );
      const list = data.results.map((item: {}, index: number) => ({
        ...item,
        id: index + 1,
      }));
      return list;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
