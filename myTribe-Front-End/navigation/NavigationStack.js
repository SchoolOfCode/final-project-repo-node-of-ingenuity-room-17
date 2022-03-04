import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import AddChores from "../screens/AddChores.js";
import ChoreList from "../screens/ChoreList.js";
import Family from "../screens/Family.js";
import Login from "../screens/Login.js";
import SignUp from "../screens/SignUp.js";
import Welcome from "../screens/Welcome.js";
import Dashboard from "../screens/Dashboard.js";
import Streak from "../screens/Streak";

const ChoresNavigator = createStackNavigator(
  {
    Login: Login,

    SignUp: SignUp,
    Welcome: Welcome,
    AddChores: AddChores,
    ChoreList: ChoreList,
    Family: Family,
    Dashboard: Dashboard,
    Streak: Streak,
  },
  {
    headerMode: "none",
  }

  //navigationOptions: { header: { visible: false } }
);

export default createAppContainer(ChoresNavigator);
