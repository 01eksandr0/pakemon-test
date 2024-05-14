import { createSelector } from "@reduxjs/toolkit";

export const selectPokemons = (state) => state.pokemons;

export const selectFilters = (state) => state.filter;

export const selectLoading = (state) => state.loading;

export const selectItems = createSelector(
  [selectPokemons],
  (pokemons) => pokemons.items
);

export const selectFilterPokemons = createSelector(
  [selectFilters, selectItems],
  (filter, items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);
