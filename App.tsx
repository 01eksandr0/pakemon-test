import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./redux/store";
import MyNavigation from "./Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <MyNavigation />
    </Provider>
  );
}
