 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { displayScreens } from "../config/DisplayScreens";


const ComponentsDisplayStack = createNativeStackNavigator();

const ComponentsDisplayNavigator = () => {  
  return (
    <ComponentsDisplayStack.Navigator>
      {displayScreens.map((screenData, index) => (
        <ComponentsDisplayStack.Screen
          key={index}
          name={screenData.name}
          component={screenData.component}
          options={{
            ...screenData.screenOptions,
            headerTitle: screenData.name,
          }}
        />
      ))}
    </ComponentsDisplayStack.Navigator>
  );
};

export default ComponentsDisplayNavigator; 
