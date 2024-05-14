import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/filterSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        style={s.input}
        placeholder="Search"
        onChangeText={(e) => dispatch(changeFilter(e))}
      />
    </View>
  );
};

const s = StyleSheet.create({
  input: {
    height: 30,
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 20,
  },
});
