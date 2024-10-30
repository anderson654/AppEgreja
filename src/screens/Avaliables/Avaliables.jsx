
import React, { useEffect, useState } from "react";
import KeyBoardView from "../../components/Views/KeyBoardView";
import { Title } from "../../components/Typograph/Typographs";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, Card, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ArrowBack from "../../components/Buttons/ArrowBack";
import TextPoppins from "../../components/Typograph/TextPoppins";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Stars from "../../components/Stars/Stars";
import { useTheme } from "react-native-paper";
import CardComents from "../../components/Cards/CardComents/CardComents";
import { getSendFeedBacks, getNextPage, getReceivedFeedBacks } from "../../apis/EgrejaApi/egreja";
import FlatMapAvaliables from "../../components/FlatLists/FlatMapAvaliables/FlatMapAvaliables";

export default function Avaliables() {

    const [page, setPage] = useState('Recebidos');
    const [sendAvaliables, setSendAvaliables] = useState([]);
    const [nextSendLink, setNextSendLink] = useState(null);

    const [receivedAvaliables, setReceivedAvaliables] = useState([]);
    const [receivedLink, setReceivedLink] = useState(null);


    const navigation = useNavigation();
    const theme = useTheme();

    // uma rota para pegar as enviadas e recebidas
    async function fetchGetSendAvaliables() {
        try {
            const response = await getSendFeedBacks();
            setSendAvaliables(response.data.sendFeedBacks.data);
            setNextSendLink(response.data.sendFeedBacks.next_page_url);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchGetReceivedAvaliables() {
        try {
            const response = await getReceivedFeedBacks();
            setReceivedAvaliables(response.data.receivedFeedBacks.data)
            setReceivedLink(response.data.receivedFeedBacks.next_page_url);
        } catch (error) {
            console.log(error);
        }
    }



    //executar sempre que um acabar
    async function handlerGetNextPage() {
        const response = await getNextPage();
        console.log(response)
    }

    function init() {
        fetchGetSendAvaliables();
        fetchGetReceivedAvaliables();
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 20, backgroundColor: "#fff", paddingBottom: 0 }}>
                <ArrowBack onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.containerHeader}>
                <Title>Avaliações</Title>
                <Text variant="bodyLarge" style={{ color: "#757575" }}>Você poderá visualizar todas as avaliações que já realizou, assim como as avaliações que recebeu de outros usuários.</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Card elevation={0} style={[styles.cardSelectType, { marginRight: 5, backgroundColor: page === 'Recebidos' ? theme.colors.primary : '#fff' }]} onPress={() => setPage('Recebidos')}>
                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Recebidas</Text>
                </Card>
                <Card elevation={0} style={[styles.cardSelectType, { marginLeft: 5, backgroundColor: page === 'Enviados' ? theme.colors.primary : '#fff' }]} onPress={() => setPage('Enviados')}>
                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Enviadas</Text>
                </Card>
            </View>
            {page === 'Recebidos' &&
                <View style={{ padding: 20 }}>
                    <FlatMapAvaliables data={receivedAvaliables} />
                </View>
            }
            {page === 'Enviados' &&
                <View style={{ padding: 20 }}>
                    <FlatMapAvaliables data={sendAvaliables} />
                </View>
            }
        </View>
    )
}




const styles = StyleSheet.create({
    containerHeader: {
        padding: 20,
        backgroundColor: "#fff",
    },
    card: {
        padding: 20,
        backgroundColor: "#fff",
        marginBottom: 20
    },
    cardSelectType: {
        padding: 20,
        backgroundColor: "#fff",
        flex: 1
    }
});