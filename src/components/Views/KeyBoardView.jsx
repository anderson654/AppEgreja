import React from "react";
import { KeyboardAvoidingView, StyleSheet, useWindowDimensions, ScrollView } from "react-native";


export default function KeyBoardView({ children }) {

    // const { height, width } = useWindowDimensions();

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});