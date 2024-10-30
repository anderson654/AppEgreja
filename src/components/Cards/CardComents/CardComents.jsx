import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import TextPoppins from "../../Typograph/TextPoppins";
import Stars from "../../Stars/Stars";

export default function CardComents({ name = '', coments = '', rating = 0 }) {
    return (
        <Card style={styles.card} elevation={0}>
            <View style={{ flexDirection: 'row' }}>
                <Avatar.Image size={60} source={{ uri: 'https://picsum.photos/700' }} />
                <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                    <TextPoppins variant='bodyMedium' fontWeight={700}>{name}</TextPoppins>
                    <TextPoppins variant='bodyMedium' fontWeight={700} color="#949494">Vendedor</TextPoppins>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Stars value={rating} />
                </View>
            </View>
            <TextPoppins variant='bodyMedium' fontWeight={400} color="#949494">{`\n`}{coments}</TextPoppins>
        </Card>
    );
}


const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: "#fff",
        marginBottom: 20
    },
});