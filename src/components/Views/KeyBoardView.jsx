import React from "react";
import { KeyboardAvoidingView, StyleSheet, useWindowDimensions, ScrollView, Platform } from "react-native";


export default function KeyBoardView({ children }) {

    // const { height, width } = useWindowDimensions();

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}