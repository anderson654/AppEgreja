import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Surface, Text, FAB, useTheme, Icon } from "react-native-paper";
import { setRoute, setSubMenu } from "../../context/reducers/menuHome";

export default function MenuHome() {
    const [open, setOpen] = useState(false);
    const menuHome = useSelector(context => context.menuHome);
    const dispatch = useDispatch();

    const theme = useTheme();

    const surfaceIcon = {
        ...styles.surfaceIcon,
    }

    const styleSurfece = (routeName) => {
        const backColor = menuHome.routeSelected === routeName ? theme.colors.primary : "#fff"
        return { backgroundColor: backColor };
    }

    const surfaceEleveition = (routeName) => {
        return menuHome.routeSelected === routeName ? 1 : 0
    }

    const colorIcon = (routeName) => {
        return menuHome.routeSelected === routeName ? "#fff" : theme.colors.primary
    }

    const handlerSetRoute = (routeName) => {
        dispatch(setRoute(routeName));
    }

    const handelerOpenAndHideMenu = () => {
        setOpen(!open);
        dispatch(setSubMenu(true));
    }

    return (
        <Surface style={styles.surface} elevation={4}>
            <TouchableOpacity onPress={() => handlerSetRoute('Home')} activeOpacity={0.9} style={styles.containerIcon}>
                <Surface style={[surfaceIcon, styleSurfece('Home')]} elevation={surfaceEleveition('Home')}>
                    <Icon
                        source="home-variant-outline"
                        color={colorIcon('Home')}
                        size={20}
                    />
                </Surface>
                <Text variant="labelSmall">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlerSetRoute('Promotion')} activeOpacity={0.9} style={styles.containerIcon}>
                <Surface style={[surfaceIcon, styleSurfece('Promotion')]} elevation={surfaceEleveition('Promotion')}>
                    <Icon
                        source="flash-outline"
                        color={colorIcon('Promotion')}
                        size={20}
                    />
                </Surface>
                <Text variant="labelSmall">Promoções</Text>
            </TouchableOpacity>
            <FAB
                background={"#fff"}
                icon={open ? 'dots-hexagon' : 'dots-grid'}
                style={styles.fab}
                onPress={handelerOpenAndHideMenu}
                color={theme.colors.primary}
                size="medium"
            />
            <TouchableOpacity onPress={() => handlerSetRoute('Chat')} activeOpacity={0.9} style={styles.containerIcon}>
                <Surface style={[surfaceIcon, styleSurfece('Chat')]} elevation={surfaceEleveition('Chat')}>
                    <Icon
                        source="chat-outline"
                        color={colorIcon('Chat')}
                        size={20}
                    />
                </Surface>
                <Text variant="labelSmall">Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlerSetRoute('Cart')} activeOpacity={0.9} style={styles.containerIcon}>
                <Surface style={[surfaceIcon, styleSurfece('Cart')]} elevation={surfaceEleveition('Cart')}>
                    <Icon
                        source="cart-outline"
                        color={colorIcon('Cart')}
                        size={20}
                    />
                </Surface>
                <Text variant="labelSmall">Compras</Text>
            </TouchableOpacity>
        </Surface>
    )
}

const styles = StyleSheet.create({
    surface: {
        padding: 10,
        height: 80,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row",
        marginTop: -20
    },
    fab: {
        backgroundColor: "#fff",
        borderRadius: 50,
        marginBottom: 10
    },
    containerIcon: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    surfaceIcon: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,

    }
});