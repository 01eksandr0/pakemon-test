import { selectFilterPokemons, selectPokemons } from "../redux/selectors";
import { PokemonCart } from "../components/PokemonCart";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const ListPokemon = () => {
  const list = useSelector(selectFilterPokemons);
  return (
    <FlatList
      style={s.list}
      data={list}
      renderItem={({ item }) => (
        <PokemonCart
          name={item.name}
          url={item.sprites.back_default}
          id={item.id}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const s = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});
