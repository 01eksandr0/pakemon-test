import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetchPokemons } from "../redux/operations";
import { SearchBar } from "../components/SearchBar";
import { selectFilterPokemons } from "../redux/selectors";
import { PokemonCart } from "../components/PokemonCart";

export const Pokemons = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectFilterPokemons);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  return (
    <View style={s.container}>
      <Text style={s.title}>Pokemons</Text>
      <SearchBar />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <PokemonCart name={item.name} url={item.url} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const s = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
});
