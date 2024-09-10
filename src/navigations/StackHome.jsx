import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import CreatePassword from '../screens/login/SubSteps/CreatePassword';
import Clause from '../screens/Clause/Clause';
import UpdateUser from '../screens/UpdateUser/UpdateUser';
import HomeLogin from '../screens/login/HomeLogin';
import Login from '../screens/login/Login';
import Register from '../screens/login/Register';
import MenuHome from '../components/Menus/MenuHome';

const Stack = createStackNavigator();

export default function StackHome() {

    return (
        <Stack.Navigator initialRouteName="CreatePassword" screenOptions={{
            headerShown: false, // Esconde o cabeçalho em todas as telas
        }}>
            <Stack.Screen name="UpdateUser" component={UpdateUser} />
            <Stack.Screen name="Clause" component={Clause} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

