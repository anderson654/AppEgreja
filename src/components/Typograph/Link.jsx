import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function Link({ children, color = '#33a4da', fontFamily = '', underline = false }) {

    const styleLink = {
        ...styles.linkColor,
        color,
        fontFamily: fontFamily,
        textDecorationLine: underline ? 'underline' : 'none'
    }

    return (
        <Text variant="bodyLarge" style={styleLink}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    linkColor: {
        fontWeight: 600
    }
});