import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Avatar, Button, Icon, useTheme, Text } from "react-native-paper";
import { Space10 } from "../SpacesLine/Spaces";


export default function MenuSelectTypeService() {

    const theme = useTheme();

    // theme.colors.elevation.level1

    const IconFood = props => <Avatar.Icon {...props} size={35} icon="food" />
    const IconProducts = props => <Avatar.Icon {...props} size={35} icon="basket-plus" />
    const IconService = props => <Avatar.Icon {...props} size={35} icon="brush-variant" />
    const IconHome = props => <Avatar.Icon {...props} size={35} icon="home-city-outline" />
    // brush-variant

    const MyComponent = ({ icon, title = "title" }) => (
        <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
                {icon || <IconFood />}
                <Space10 />
                <Text variant="labelSmall">{title}</Text>
            </Card.Content>
        </Card>
    );

    return (
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }} horizontal={true}>
            <MyComponent icon={<IconFood />} title="Alimentação"/>
            <MyComponent icon={<IconProducts />} title="Produtos"/>
            <MyComponent icon={<IconService />} title="Serviços"/>
            <MyComponent icon={<IconHome />} title="imóveis"/>
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
        alignItems: "center",
    }
});