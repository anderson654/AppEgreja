import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Clause from '../screens/Clause/Clause';
import UpdateUser from '../screens/UpdateUser/UpdateUser';
import DefaultView from '../components/Views/DefaultView';
import HomeOrganization from '../screens/HomeOrganization/HomeOrganization';
import ProductsAndServices from '../screens/ProductsAndServices/ProductsAndServices';
import ShowServicesAndProducts from '../screens/ShowServicesAndProducts/ShowServicesAndProducts';

const Stack = createStackNavigator();

export default function StackHome() {

    return (
        //todos as telas devvem ficar aqui para reduzir a complexidade;

        <DefaultView spaceTopBar={true} background="#fff">
            <Stack.Navigator initialRouteName="CreatePassword" screenOptions={{
                headerShown: false, // Esconde o cabeçalho em todas as telas
            }}>
                <Stack.Screen name="UpdateUser" component={UpdateUser} />
                <Stack.Screen name="Clause" component={Clause} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="HomeOrganization" component={HomeOrganization} />
                <Stack.Screen name="ProductsAndServices" component={ProductsAndServices} />
                <Stack.Screen name="ShowServicesAndProducts" component={ShowServicesAndProducts} />
                {/* //deve ser criado aqui se vc não quiser o menu embaixo  */}
            </Stack.Navigator>
        </DefaultView>
    );
}

