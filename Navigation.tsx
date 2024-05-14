import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Pokemons } from "./screens/Pokemons";
import { PokemonMoreInfo } from "./screens/PokemonMoreInfo";
import { ErrorScreen } from "./screens/ErrorScreen";
import { useSelector } from "react-redux";
import { selectLoading, selectPokemons } from "./redux/selectors";
import { Loading } from "./components/Loading";

const MyNavigation = () => {
  const { isLoading } = useSelector(selectPokemons);
  const loading = useSelector(selectLoading);
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
      {(isLoading || loading) && <Loading />}
    </NavigationContainer>
  );
};
export default MyNavigation;
