import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  url: string;
  name: string;
  id: string;
};

export const PokemonCart = ({ url, name, id }: Props) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      style={s.item}
      onPress={() => nav.navigate("Moreinfo", { id })}
    >
      <Image
        style={s.img}
        source={{
          uri: url,
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
  text: {
    color: "#fff",
  },
});
