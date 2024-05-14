import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Loading = () => {
  return (
    <View style={s.container}>
      <Text style={s.text}>Loading ... </Text>
    </View>
  );
};
const s = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  text: { fontSize: 28, color: "#fff" },
});
