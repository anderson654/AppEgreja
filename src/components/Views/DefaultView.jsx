import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default function DefaultView({ spaceTopBar = false, background = 'transparent', children }) {

    const containerStyle = {
        ...styles.container,
        paddingTop: spaceTopBar ? Constants.statusBarHeight : 0,
        backgroundColor: background
    }

    return (
        <View style={containerStyle}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});