import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => { 
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    height: 52,
                    marginBottom: 10,
                },

                header: () => (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingHorizontal: 11,
                            marginTop: 5,
                            marginBottom: 14,
                        }}
                    >
                        {/* Left Icon (Hamburger Menu) */}
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                            style={{
                                width: 44,
                                height: 44,

                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Button title="Click" />
                        </TouchableOpacity>

                        {/* Center Content (Logo Text) */}
                        <View
                            style={{
                                flex: 1, // Ensures the center content takes up available space
                                alignItems: "center", // Centers the content horizontally
                            }}
                        >
                            <Text
                                style={{
                                    letterSpacing: 2,
                                    fontSize: 16,
                                    fontWeight: "700",
                                    textAlign: "center",
                                }}
                            >
                                VITALHUB
                            </Text>
                            <Text
                                style={{
                                    letterSpacing: 1,
                                    fontSize: 16,
                                    fontWeight: "700",
                                    textAlign: "center",
                                }}
                            >
                                MOBILE CORE ENGINE
                            </Text>
                        </View>

                        {/* Right Empty Space (Optional) */}
                        <View
                            style={{
                                width: 44, // Keep the width the same as your IconButton for symmetry
                                height: 20,
                            }}
                        />
                    </View>
                ),

                headerTitleAlign: "center", // Ensures the image is centered
                drawerLabelStyle: {
                    fontSize: 15,
                },
            })}
        >
            <Drawer.Screen
                component={TabNavigator}
                name="TabNavigator"
                options={{ title: "Components" }}
            />
            <Drawer.Screen
                component={() => <View> <Text>Settings </Text></View>}
                name="Settings"
                options={{ title: "Settings" }}
            />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;