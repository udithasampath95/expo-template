import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RootNavigation from "./src/navigation/navigators/RootNavigation";
function App() {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <NavigationContainer  >
                        <RootNavigation />
                    </NavigationContainer>
                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>
    );
}

registerRootComponent(App);