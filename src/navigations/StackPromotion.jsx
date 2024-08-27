import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../screens/Home/Steps/Inicial/Inicial';
import Promocoes from '../screens/Home/Steps/Promocoes/Promocoes';

const Stack = createStackNavigator();

export default function StackPromotion() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false, // Esconde o cabeçalho em todas as telas
          }}>
            <Stack.Screen name="Promocoes" component={Promocoes} />
        </Stack.Navigator>
    );
}

