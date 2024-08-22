import React from "react";
import { StyleSheet, View } from "react-native";
import Link from "./Link";



export default function TextAndLines({ text }) {

    const Line = () => {
        return (
            <View style={styles.line}></View>
        )
    }

    return (
        <View style={styles.container}>
            <Line />
            <View style={styles.containerLink}>
                <Link color="#757575">{text || 'Login com'}</Link>
            </View>
            <Line />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    line: {
        flex: 1,
        flexDirection: "row",
        height: 1,
        backgroundColor: "#b9b9b9"
    },
    containerLink: {
        marginHorizontal: 20
    }
});