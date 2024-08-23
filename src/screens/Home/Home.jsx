import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import MenuHome from "../../components/Menus/MenuHome";
import DefaultView from "../../components/Views/DefaultView";
import ContentView from "../../components/Views/ContentView";
import StackInitial from "../../navigations/StackInitial";
import ActionSheetIcon from "../../components/ActionSheets/ActionSheetIcon";


export default function Home() {

    const contextMenuHome = useSelector(context => context.menuHome);

    return (
        <DefaultView spaceTopBar={true} background="#fff">
            {contextMenuHome.routeSelected === 'Home' &&
                <StackInitial />
            }
            <MenuHome />
            <ActionSheetIcon />
        </DefaultView>
    )
}
