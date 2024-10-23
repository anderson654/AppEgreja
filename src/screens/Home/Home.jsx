import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import MenuHome from "../../components/Menus/MenuHome";
import DefaultView from "../../components/Views/DefaultView";
import ContentView from "../../components/Views/ContentView";
import ActionSheetIcon from "../../components/ActionSheets/ActionSheetIcon";
import MenuProfile from "../../components/Menus/MenuProfile";
import Inicial from "./Steps/Inicial/Inicial";
import Promocoes from "./Steps/Promocoes/Promocoes";


export default function Home() {

    const contextMenuHome = useSelector(context => context.menuHome);

    return (
        <>
            {contextMenuHome.routeSelected === 'Home' &&
                <Inicial />
            }
            {contextMenuHome.routeSelected === 'Promotion' &&
                <Promocoes />
            }
            <MenuHome />
            <ActionSheetIcon />
            <MenuProfile/>
        </>
    )
}
