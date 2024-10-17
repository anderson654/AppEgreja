import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeOrganization from "../screens/HomeOrganization/HomeOrganization";

const Stack = createStackNavigator();

export default function StackAfiliate() {
    return (
        <Stack.Navigator initialRouteName="CreatePassword" screenOptions={{
            headerShown: false, // Esconde o cabeçalho em todas as telas
        }}>
            <Stack.Screen name="HomeOrganization" component={HomeOrganization} />
        </Stack.Navigator>
    )

}