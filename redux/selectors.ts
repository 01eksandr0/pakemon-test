export const selectPokemons = (state) => state.pokemons;

export const selectFilters = (state) => state.filter;

export const selectFilterPokemons = (state) => {
  const filter = selectFilters(state);
  const { items } = selectPokemons(state);
  return items.filter((i) =>
    i.name.toLowerCase().includes(filter.toLowerCase())
  );
};
