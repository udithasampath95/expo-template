import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Tab.Screen
                component={() => <View>       <Text
                    style={{
                        color: "black",
                    }}
                >
                    An update is available 1
                </Text> </View>}
                name={"Components"}
                options={{

                    tabBarLabel: ({ focused }) =>
                        focused ? <Text>{"Components"}</Text> : null,
                }}
            />

            <Tab.Screen
                component={() => <View>       <Text
                    style={{
                        color: "white",
                    }}
                >
                    An update is available 2
                </Text> </View>}
                name={"Components2"}
                options={{

                    tabBarLabel: ({ focused }) =>
                        focused ? <Text>{"Components2"}</Text> : null,
                }}
            />

        </Tab.Navigator>
    )

}

export default TabNavigator;