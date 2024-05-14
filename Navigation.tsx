import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Pokemons } from "./screens/Pokemons";
import { PokemonMoreInfo } from "./screens/PokemonMoreInfo";
import { ErrorScreen } from "./screens/ErrorScreen";

const MyNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FavoriteHome">
        <Stack.Screen
          name="Pokemons"
          component={Pokemons}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Moreinfo" component={PokemonMoreInfo} />
        <Stack.Screen name="Error" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyNavigation;
