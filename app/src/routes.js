import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import ListDocas from "./pages/ListDocas";
import ListPessoas from "./pages/ListPessoas";
import ListSaida from "./pages/ListSaida";

const AppNavigator = createStackNavigator({
  Login,
  Timeline,
  ListDocas,
  ListPessoas,
  ListSaida
});

const Routes = createAppContainer(AppNavigator);

export default Routes;
