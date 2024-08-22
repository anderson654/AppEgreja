import React from "react";
import { StyleSheet, View } from "react-native";

export function Space20() {
    return (
        <View style={styles.mb20}></View>
    )
}
export function Space40() {
    return (
        <View style={styles.mb40}></View>
    )
}




const styles = StyleSheet.create({
    mb20: {
        marginBottom: 20
    },
    mb40: {
        marginBottom: 40
    }
});
