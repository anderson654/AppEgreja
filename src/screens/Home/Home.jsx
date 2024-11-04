import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import MenuHome from "../../components/Menus/MenuHome";
import DefaultView from "../../components/Views/DefaultView";
import ContentView from "../../components/Views/ContentView";
import ActionSheetIcon from "../../components/ActionSheets/ActionSheetIcon";
import MenuProfile from "../../components/Menus/MenuProfile";
import Inicial from "./Steps/Inicial/Inicial";
import Promocoes from "./Steps/Promocoes/Promocoes";
import { View } from "react-native";


export default function Home() {

    const contextMenuHome = useSelector(context => context.menuHome);

    return (
        <>
            <View style={{ flex: 1 }}>
                {contextMenuHome.routeSelected === 'Home' &&
                    <Inicial />
                }
                {contextMenuHome.routeSelected === 'Promotion' &&
                    <Promocoes />
                }
            </View>
            <MenuHome />
            <ActionSheetIcon />
            <MenuProfile />
        </>
    )
}
