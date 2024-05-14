import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  url: string;
  name: string;
};

type Data = {
  sprites?: object;
};
export const PokemonCart = ({ url, name }: Props) => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const { data } = await axios.get(url);
        console.log(data);

        setInfo(data);
      } catch (error) {}
    };
    fetchInfo();
  });
  return (
    <TouchableOpacity style={s.item}>
      <Image
        style={s.img}
        source={{
          uri: info.sprites.front_default,
        }}
      />
      <Text style={s.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  item: {
    width: "100%",
    height: 60,
    backgroundColor: "#9c9a9a",
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    paddingRight: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    height: 50,
    width: 50,
  },
});
