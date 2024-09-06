import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import HomeLogin from '../screens/login/HomeLogin';
import Login from '../screens/login/Login';
import Register from '../screens/login/Register';
import CreatePassword from '../screens/login/SubSteps/CreatePassword';
import MenuHome from '../components/Menus/MenuHome';

const Stack = createStackNavigator();

export default function StackHome() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false, // Esconde o cabeçalho em todas as telas
          }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

