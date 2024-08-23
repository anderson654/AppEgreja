import React from "react";
import { StyleSheet } from "react-native";
import { Icon, Surface } from "react-native-paper";

export default function ButtonIconSurface() {
    return (
        <Surface style={styles.surface} elevation={1}>
            <Icon
                source="menu-open"
                color={'#000'}
                size={25}
            />
        </Surface>
    )
}

const styles = StyleSheet.create({
    surface: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
});