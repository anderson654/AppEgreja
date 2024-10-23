import { View } from "native-base";
import React, { useEffect, useState } from "react";
import ArrowBack from "../../components/Buttons/ArrowBack";
import KeyBoardView from "../../components/Views/KeyBoardView";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../../components/Typograph/Typographs";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { getMyServices } from "../../apis/EgrejaApi/egreja";
import TextPoppins from "../../components/Typograph/TextPoppins";
import { formatToBRL } from "../../utils/formatValues";
// import CText from "../../components/Typograph/CText";

export default function ShowServicesAndProducts() {

    const [services, setServices] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        (async () => {

            try {
                const response = await getMyServices();
                setServices(response.data.services);
            } catch (error) {
                console.log(error);
            }

        })()
    }, []);


    const CustomCard = ({ data }) => {

        console.log(data);

        return (

            <Card style={{ backgroundColor: "#fff", marginBottom: 20 }} elevation={1}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ padding: 10 }}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{ width: 100, height: 120 }} />
                    </View>
                    <View style={{ padding: 20, justifyContent:"space-between" }}>
                        <View>
                            <TextPoppins variant="titleMedium" fontWeight={700}>{data?.title}</TextPoppins>
                            <TextPoppins>{data?.description}</TextPoppins>
                        </View>
                        <View>
                            <TextPoppins variant="titleLarge" fontWeight={600}>{formatToBRL(data?.price)}</TextPoppins>
                            <TextPoppins variant="labelSmall" fontWeight={600}>desconto {formatToBRL(data?.discount)}</TextPoppins>
                        </View>
                    </View>
                </View>
            </Card>

        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.containerHeader}>
                <View style={{ marginBottom: 20 }}>
                    <ArrowBack onPress={() => navigation.goBack()} />
                </View>
                <Title>Meus produtos e serviços</Title>
                <Text variant="bodyLarge" style={{ color: "#757575" }}>Por que pedimos os dados da sua empresa?</Text>
            </View>
            <KeyBoardView>
                <View style={{ padding: 20 }}>
                    {services.map((obj) => (
                        <CustomCard key={obj.id} data={obj} />
                    ))}
                </View>
            </KeyBoardView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerHeader: {
        padding: 20,
        backgroundColor: "#fff"
    }
});