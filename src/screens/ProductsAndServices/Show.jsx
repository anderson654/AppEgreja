import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, Card, Avatar } from "react-native-paper";
import SlidImages from "../../components/FlatLists/SlidImages/SlidImages";
import KeyBoardView from "../../components/Views/KeyBoardView";
import TextPoppins from "../../components/Typograph/TextPoppins";
import { Space40, Space20 } from "../../components/SpacesLine/Spaces";
import { formatToBRL } from "../../utils/formatValues";
import DefaultButton from "../../components/Buttons/DefaultButton";
import Stars from "../../components/Stars/Stars";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { setAlert } from "../../context/reducers/alertSnackBar";
import { createLead } from "../../apis/EgrejaApi/egreja";




export default function Show({ route: { params } }) {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { price, title, discount, description, id } = params.product;

    const teste = [
        {
            id: 1,
            image: 'https://picsum.photos/700'
        },
        {
            id: 2,
            image: 'https://picsum.photos/701'
        },
        {
            id: 3,
            image: 'https://picsum.photos/702'
        },
        {
            id: 4,
            image: 'https://picsum.photos/703'
        },
    ]


    async function handlerContact() {
        setLoading(true);
        try {
            console.log(id);
            
            const response = await createLead({ service_id: id });

            dispatch(setAlert({
                type: 'sucess',
                text: 'Código enviado.'
            }));

        } catch (error) {
            dispatch(setAlert({
                type: 'error',
                text: error?.response?.data?.message || 'Erro ao registrar usuário.'
            }));
        } finally {
            setLoading(false);
        }
    }

    return (

        <View style={{ flex: 1, position: 'relative' }}>
            <KeyBoardView>
                <SlidImages itens={teste} />
                <View style={{ flex: 1, padding: 20 }}>
                    <Card style={styles.card} elevation={0}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TextPoppins variant='bodyMedium' fontWeight={700} color="#949494">Produto ou serviço:</TextPoppins>
                            <Stars />
                        </View>
                        <TextPoppins variant='titleLarge' fontWeight={700}>{title}</TextPoppins>
                    </Card>
                </View>
                <View style={{ flex: 1, padding: 20, paddingTop: 0 }}>
                    <Card style={styles.card} elevation={0}>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar.Image size={60} source={{ uri: 'https://picsum.photos/700' }} />
                            <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                                <TextPoppins variant='bodyMedium' fontWeight={700}>Anderson gabriel s...</TextPoppins>
                                <TextPoppins variant='bodyMedium' fontWeight={700} color="#949494">Vendedor</TextPoppins>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ justifyContent: "center" }}>
                                    <Ionicons onPress={() => console.log('Hello')} name="chatbubble-ellipses" color={'rgb(87,87,87)'} size={20} style={{ backgroundColor: '#dddddd', padding: 10, borderRadius: 30, marginRight: 10 }} />
                                </View>
                                <View style={{ justifyContent: "center" }}>
                                    <FontAwesome5 onPress={() => console.log('Hello')} name="phone" color={'rgb(87,87,87)'} size={20} style={{ backgroundColor: '#dddddd', padding: 10, borderRadius: 30 }} />
                                </View>
                            </View>
                        </View>
                        {/* <TextPoppins variant='labelLarge' fontWeight={500}>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro temporibus, sed totam reprehenderit laborum non dicta, magni repellendus impedit magnam neque, perferendis ut consectetur aliquam? Dolore maiores ipsa officia!</TextPoppins> */}
                    </Card>
                </View>
                <View style={{ flex: 1, padding: 20, paddingTop: 0 }}>
                    <Card style={styles.card} elevation={0}>
                        <TextPoppins variant='titleLarge' fontWeight={600}>Descrição:</TextPoppins>
                        <TextPoppins variant='labelLarge' fontWeight={500}>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro temporibus, sed totam reprehenderit laborum non dicta, magni repellendus impedit magnam neque, perferendis ut consectetur aliquam? Dolore maiores ipsa officia!</TextPoppins>
                    </Card>
                </View>
                <View style={{ flex: 1, padding: 20, paddingTop: 0 }}>
                    <Card style={styles.card} elevation={0}>
                        <TextPoppins variant='titleLarge' fontWeight={600}>Comentarios:</TextPoppins>
                        <TextPoppins variant='labelLarge' fontWeight={500}>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro temporibus, sed totam reprehenderit laborum non dicta, magni repellendus impedit magnam neque, perferendis ut consectetur aliquam? Dolore maiores ipsa officia!</TextPoppins>
                    </Card>
                </View>
                <Space40 />
                <Space40 />
                <Space40 />
                <Space40 />
                <Space40 />
            </KeyBoardView>
            <View style={styles.containerBtn}>
                <Card style={styles.cardBtn} elevation={0}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <TextPoppins variant='bodySmall' fontWeight={700} color="#949494">Preço total:</TextPoppins>
                            <TextPoppins variant='headlineSmall' fontWeight={700}>{formatToBRL(price)}</TextPoppins>
                        </View>
                        <DefaultButton onPress={handlerContact} title="Solicitar contato" loading={loading} />
                    </View>
                </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20
    },
    containerBtn: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    cardBtn: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        padding: 20,
    }
})