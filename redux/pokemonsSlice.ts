import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemons } from "./operations";

type Pokemon = {
  name: string;
  type: string;
  id: number;
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: { items: [], isLoading: false, error: null } as {
    items: Pokemon[];
    isLoading: boolean;
    error: string | null;
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, handlePending)
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPokemons.rejected, handleRejected);
  },
});
export const pokemonsReducer = pokemonsSlice.reducer;
