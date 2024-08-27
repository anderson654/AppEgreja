import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";


export default function MenuSelectService() {

    const CardImage = ({ imageUri }) => (
        <View>
            <Card style={styles.containerCard}>
                <Image style={styles.imageCard} resizeMode="contain" source={{ uri: imageUri }} />
            </Card>
            <Text variant="labelSmall" style={styles.container}>Label Small</Text>
        </View>
    )

    return (
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }} horizontal={true}>
            <CardImage imageUri={'https://picsum.photos/701'} />
            <CardImage imageUri={'https://picsum.photos/702'} />
            <CardImage imageUri={'https://picsum.photos/703'} />
            <CardImage imageUri={'https://picsum.photos/704'} />
            <CardImage imageUri={'https://picsum.photos/705'} />
            <CardImage imageUri={'https://picsum.photos/706'} />
            <CardImage imageUri={'https://picsum.photos/707'} />
            <CardImage imageUri={'https://picsum.photos/708'} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imageCard: {
        width: 65,
        height: 65,
    },
    containerCard: {
        overflow: "hidden",
        marginRight: 20
    },
    container: {
        width: 65,
    }
});