import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyleSheet, Text, View } from "react-native";
import { fetchPokemons } from "../redux/operations";
import { SearchBar } from "../components/SearchBar";
import { ListPokemon } from "../components/ListPokemon";
import { selectPokemons } from "../redux/selectors";
import { useNavigation } from "@react-navigation/native";

export const Pokemons = () => {
  const dispatch = useDispatch();
  const nav = useNavigation();
  const { isLoading, error } = useSelector(selectPokemons);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  useEffect(() => {
    if (!error) return;
    nav.navigate("Error", { title: error });
  }, [error]);
  return (
    <View style={s.container}>
      <Text style={s.title}>Pokemons</Text>
      <SearchBar />
      {!isLoading && <ListPokemon />}
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
