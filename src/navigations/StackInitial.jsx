import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../screens/Home/Steps/Inicial/Inicial';
import RegisterAfiliate from '../screens/RegisterAfiliate/RegisterAfiliate';
import StackAfiliate from './StackAfiliate';

const Stack = createStackNavigator();

export default function StackInitial() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false, // Esconde o cabeçalho em todas as telas
          }}>
            <Stack.Screen name="Inicial" component={Inicial} />
            <Stack.Screen name="StackAfiliate" component={StackAfiliate} />
        </Stack.Navigator>
    );
}

