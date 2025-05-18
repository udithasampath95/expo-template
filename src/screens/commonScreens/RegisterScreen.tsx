import React from "react";
import { Button, ScrollView, Text, View } from "react-native";

const RegisterScreen = () => {

    return (
        <ScrollView>
            <View  >
                <Button title="Click me Reg" onPress={() => console.log("Clicked!")} />
                <Text> {process.env.EXPO_PUBLIC_API_URL}</Text>
            </View>
            <View style={{ flex: 1, padding: 0, backgroundColor: '#000000' }}>
                <Button title="Click me Reg" onPress={() => console.log("Clicked!")} />
                <Text> {process.env.EXPO_PUBLIC_API_URL}</Text>
            </View>
            <View style={{ flex: 1, padding: 0, backgroundColor: '#000000' }}>
                <Button title="Click me Reg" onPress={() => console.log("Clicked!")} />
                <Text> {process.env.EXPO_PUBLIC_API_URL}</Text>
            </View>
            <View style={{ flex: 1, padding: 0, backgroundColor: '#000000' }}>
                <Button title="Click me Reg" onPress={() => console.log("Clicked!")} />
                <Text> {process.env.EXPO_PUBLIC_API_URL}</Text>
            </View>

        </ScrollView>
    )
};
export default RegisterScreen; 