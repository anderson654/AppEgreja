import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";


export default function MenuSelectService({ onPress }) {

    const home = useSelector(state => state.home);

    const CardImage = ({ imageUri, data }) => (
        <View>
            <Card style={styles.containerCard} onPress={() => handlerOnPress(data)}>
                <Image style={styles.imageCard} resizeMode="contain" source={{ uri: imageUri }} />
            </Card>
            <Text variant="labelSmall" style={styles.container}>{data?.title}</Text>
        </View>
    )

    const handlerOnPress = (data) => {
        if (typeof onPress === 'function') {
            onPress(data);
        }
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }} horizontal={true}>
            {home?.selectedCategory?.service_types.map((data) => {
                return (
                    <CardImage key={data.id} data={data} imageUri={'https://picsum.photos/701'} />
                );
            }, [])}
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