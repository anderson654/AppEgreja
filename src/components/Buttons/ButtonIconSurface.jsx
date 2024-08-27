import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Surface } from "react-native-paper";

export default function ButtonIconSurface({ onPress = () => { }, icon="menu-open", elevation = 1, styles = {} }) {

    const styleSurface = {
        ...internalStyles.surface,
        ...styles
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <Surface style={styleSurface} elevation={elevation}>
                <Icon
                    source={icon}
                    color={'#000'}
                    size={25}
                />
            </Surface>
        </TouchableOpacity>
    )
}

const internalStyles = StyleSheet.create({
    surface: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
});