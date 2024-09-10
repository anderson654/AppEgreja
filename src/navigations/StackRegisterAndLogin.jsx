import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeLogin from '../screens/login/HomeLogin';
import Login from '../screens/login/Login';
import Register from '../screens/login/Register';
import CreatePassword from '../screens/login/SubSteps/CreatePassword';
import StackHome from './StackHome';
import LoginWhatsApp from '../screens/login/LoginWhatsApp/LoginWhatsApp';
import VerifyCodeWhatsApp from '../screens/login/LoginWhatsApp/VerifyCodeWhatsApp';
import LoginEmail from '../screens/login/LoginEmail/LoginEmail';
import VerifyCodeEmail from '../screens/login/LoginEmail/VerifyCodeEmail';
import RegisterWhatsApp from '../screens/login/RegisterWhatsApp';

const Stack = createStackNavigator();

export default function StackRegisterAndLogin() {
    return (
        <Stack.Navigator initialRouteName="HomeLogin" screenOptions={{
            headerShown: false, // Esconde o cabeçalho em todas as telas
        }}>
            <Stack.Screen name="HomeLogin" component={HomeLogin} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoginWhatsApp" component={LoginWhatsApp} />
            <Stack.Screen name="StackHome" component={StackHome} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="VerifyCodeWhatsApp" component={VerifyCodeWhatsApp} />
            <Stack.Screen name="CreatePassword" component={CreatePassword} />
            <Stack.Screen name="LoginEmail" component={LoginEmail} />
            <Stack.Screen name="VerifyCodeEmail" component={VerifyCodeEmail} />
            <Stack.Screen name="RegisterWhatsApp" component={RegisterWhatsApp} />
        </Stack.Navigator>
    );
}

