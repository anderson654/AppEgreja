import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Card, Avatar, Button, Icon, useTheme } from "react-native-paper";
import { Space10 } from "../SpacesLine/Spaces";


export default function MenuSelectTypeService() {

    const theme = useTheme();

    // theme.colors.elevation.level1

    const LeftContent = props => <Avatar.Icon {...props} size={40} icon="home-variant-outline" />

    const MyComponent = () => (
        <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
                <LeftContent />
                <Space10 />
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
        </Card>
    );

    return (
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }} horizontal={true}>
            <MyComponent />
            <MyComponent />
            <MyComponent />
            <MyComponent />
            <MyComponent />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        width: 120,
        marginRight: 20
    },
    cardContent: {
        justifyContent: "center",
        alignItems: "center"
    }
});