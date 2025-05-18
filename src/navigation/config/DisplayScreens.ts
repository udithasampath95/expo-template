import RegisterScreen from "@/screens/commonScreens/RegisterScreen";
import { ActivityIndicator } from "@/screens/componentsDisplayScreens/ActivityIndicator";
import { CustomButtons } from "@/screens/componentsDisplayScreens/Buttons";
import DrawerNavigator from "../navigators/DrawerNavigator";
import { displayScreensRouteKeys } from "./DisplayScreensRouteKeys";
import { screenOptions } from "./ScreenOptions";

export const displayScreens = [
    {
        name: displayScreensRouteKeys.RegisterScreen, component: RegisterScreen, screenOptions: {
            ...screenOptions,
            headerShown: false,
            animation: 'slide_from_left'

        }
    },
    {
        name: displayScreensRouteKeys.InitialScreen, component: DrawerNavigator, screenOptions: {
            ...screenOptions,
            headerShown: false,
            animation: 'slide_from_right'

        }
    },
    { name: displayScreensRouteKeys.ActivityIndicatorScreen, component: ActivityIndicator, screenOptions: screenOptions },
    { name: displayScreensRouteKeys.CustomButtonScreen, component: CustomButtons, screenOptions: screenOptions },
];