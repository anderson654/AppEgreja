import { View } from "native-base";
import React, { useEffect, useState } from "react";
import ArrowBack from "../../components/Buttons/ArrowBack";
import KeyBoardView from "../../components/Views/KeyBoardView";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../../components/Typograph/Typographs";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { getMyServices, getNextPage } from "../../apis/EgrejaApi/egreja";
import TextPoppins from "../../components/Typograph/TextPoppins";
import { formatToBRL } from "../../utils/formatValues";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

export default function ShowServicesAndProducts() {

    const [services, setServices] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const navigation = useNavigation();
    const isFocus = useIsFocused();

    useEffect(() => {
        if (isFocus) {
            (async () => {
                try {
                    const response = await getMyServices();
                    setServices(response.data.services.data);
                    setNextPage(response.data.services.next_page_url);
                } catch (error) {
                    console.log(error);
                }
            })()
        }
    }, [isFocus]);


    async function handlerNextPage() {

        if (!nextPage) {
            return;
        }

        try {
            const response = await getNextPage(nextPage);
            setServices([...services, ...response.data.services.data]);
            setNextPage(response.data.services.next_page_url);
        } catch (error) {
            console.log(error);
        }
    }


    const CustomCard = ({ data }) => {

        return (
            <Card style={{ backgroundColor: "#fff", marginBottom: 20 }} elevation={0} onPress={() => navigation.navigate('ProductsAndServices', { action: 'PUT', data: data })}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ padding: 10 }}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{ width: 100, height: 120 }} />
                    </View>
                    <View style={{ padding: 20, justifyContent: "space-between" }}>
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
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <FlatList
                    data={services}
                    renderItem={({ item }) => <CustomCard data={item} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.6}
                    onEndReached={handlerNextPage}
                    contentContainerStyle={{ paddingTop: 20, paddingBottom: 100 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerHeader: {
        padding: 20,
        backgroundColor: "#fff"
    }
});