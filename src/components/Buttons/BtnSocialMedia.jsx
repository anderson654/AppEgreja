import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Surface } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';

export default function BtnSocialMedia({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.container}>
            <FontAwesome name="whatsapp" size={32} color="#0cc042" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 100,
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ebebeb"
    },
});