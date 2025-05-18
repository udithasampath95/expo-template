import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestScreen from "../../screens/mainScreens/TestScreen";
import { routeKeys, screenOptions } from "../config";

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={routeKeys.TestScreen}
        component={TestScreen}
        options={screenOptions}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
