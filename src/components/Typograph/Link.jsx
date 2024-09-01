import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

export default function Link({ children, color = '#33a4da', fontFamily = '', underline = false, onPress }) {

    const styleLink = {
        ...styles.linkColor,
        color,
        fontFamily: fontFamily,
        textDecorationLine: underline ? 'underline' : 'none'
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Text variant="bodyLarge" style={styleLink}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    linkColor: {
        fontWeight: 600
    }
});