import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeLogin from '../screens/login/HomeLogin';
import Login from '../screens/login/Login';
import Register from '../screens/login/Register';
import VerifyCode from '../screens/login/SubSteps/VerifyCode';
import CreatePassword from '../screens/login/SubSteps/CreatePassword';

const Stack = createStackNavigator();

export default function StackRegisterAndLogin() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false, // Esconde o cabeçalho em todas as telas
          }}>
            <Stack.Screen name="HomeLogin" component={HomeLogin} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="VerifyCode" component={VerifyCode} />
            <Stack.Screen name="CreatePassword" component={CreatePassword} />
        </Stack.Navigator>
    );
}

