import React from "react";
import KeyBoardView from "../../components/Views/KeyBoardView";
import { Title } from "../../components/Typograph/Typographs";
import { StyleSheet, View } from "react-native";
import { Text, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ArrowBack from "../../components/Buttons/ArrowBack";

export default function HomeStore() {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 20, backgroundColor: "#fff", paddingBottom: 0 }}>
                <ArrowBack onPress={() => navigation.goBack()} />
            </View>
            <KeyBoardView>
                <View style={styles.containerHeader}>
                    <Title>Nome da loja</Title>
                    <Text variant="bodyLarge" style={{ color: "#757575" }}>Por que pedimos os dados da sua empresa?</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <Card elevation={0} style={styles.card} onPress={() => navigation.navigate('ProductsAndServices')}>
                        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Registrar um produto ou seriço</Text>
                    </Card>
                    <Card elevation={0} style={styles.card} onPress={() => navigation.navigate('ShowServicesAndProducts')}>
                        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Meus produtos e serviços</Text>
                    </Card>
                    <Card elevation={0} style={styles.card}>
                        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Minhas vendas</Text>
                    </Card>
                    <Card elevation={0} style={styles.card}>
                        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Receita gerada</Text>
                    </Card>
                    <Card elevation={0} style={styles.card}>
                        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Visão geral</Text>
                    </Card>
                </View>
            </KeyBoardView>
        </View>
    )
}




const styles = StyleSheet.create({
    containerHeader: {
        padding: 20,
        backgroundColor: "#fff",
        flex: 1
    },
    card: {
        padding: 20,
        backgroundColor: "#fff",
        marginBottom: 20
    }
});