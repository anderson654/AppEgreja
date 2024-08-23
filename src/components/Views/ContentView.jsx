import React from "react";
import { StyleSheet, View } from "react-native";

export default function ContentView({ children, backgound = 'transparent' }) {

    const styleContainer = {
        ...styles.container,
        backgroundColor: backgound
    }

    return (
        <View style={styleContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
});