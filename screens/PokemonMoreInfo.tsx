import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectPokemons } from "../redux/selectors";
import { upperFirst } from "../helpers/upperFirst";
import axios from "axios";
import { falseLoading, trueLoading } from "../redux/loadingSlice";

type Info = { name?: string; sprites?: { back_default: string } };

export const PokemonMoreInfo = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const {
    params: { id },
  } = useRoute();
  const { items } = useSelector(selectPokemons);
  const [info, setInfo] = useState<Info>({});
  const [color, setColor] = useState("");

  useEffect(() => {
    const item = items.find((i) => i.id === id);
    setInfo(item);

    const getCharacteristic = async () => {
      dispatch(trueLoading());
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${id}/`
        );
        const colorUrl = data.color.url;
        const colorResponse = await axios.get(colorUrl);
        setColor(colorResponse.data.name);
      } catch (error) {
        nav.navigate("Error", { title: error.message });
      } finally {
        dispatch(falseLoading());
      }
    };

    getCharacteristic();
  }, [id, items]);

  return (
    <View style={s.container}>
      {info.name && (
        <>
          <Text style={s.title}>{upperFirst(info.name)}</Text>
          <Image
            style={s.img}
            source={{ uri: info.sprites?.back_default || "" }}
          />
          {color && (
            <Text style={s.color}>
              Color: <Text style={{ color: `${color}` }}>{color}</Text>
            </Text>
          )}
        </>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: { padding: 25 },
  title: { textAlign: "center", fontSize: 28 },
  img: {
    height: 220,
    width: 220,
    marginLeft: "auto",
    marginRight: "auto",
  },
  color: { fontSize: 20 },
});
