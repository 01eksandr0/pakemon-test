import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";

export const ErrorScreen = () => {
  const { title } = useRoute();
  return <Text style={s.error}>{title || "Error"} </Text>;
};
const s = StyleSheet.create({
  error: { paddingTop: 80, textAlign: "center", fontSize: 30, color: "red" },
});
