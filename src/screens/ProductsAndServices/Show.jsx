import React, { useEffect, useState } from "react";
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
import { createLead, createOrUpdateFeedBack, getService } from "../../apis/EgrejaApi/egreja";
import StarsActive from "../../components/Stars/StarsActive";
import InputComments from "../../components/Inputs/InputComments";
import { getItemToArrayObject } from "../../utils/arraysManipulate";
import CardComents from "../../components/Cards/CardComents/CardComents";




export default function Show({ route: { params } }) {
    const [stars, setStars] = useState(5);
    const [coments, setComents] = useState('');
    const [loading, setLoading] = useState(false);
    const [service, setService] = useState(null);
    const [feedbacks, setFeedBacks] = useState([]);
    const [myFeedBack, setMyFeedBack] = useState(null);
    const [owerService, setOwerService] = useState(null);
    const dispatch = useDispatch();
    const { price, title, discount, description, id } = params.product;
    const user = useSelector(state => state.user.user);

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
            const response = await createLead({ service_id: service.id });
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


    async function fetchFeedback() {
        try {
            const response = await createOrUpdateFeedBack(
                {
                    "rating": stars,
                    "coments": coments,
                    "service_id": id
                }
            );
            dispatch(setAlert({
                type: 'sucess',
                text: 'Comentário salvo.'
            }));
        } catch (error) {
            console.log(error);
            dispatch(setAlert({
                type: 'error',
                text: 'Erro ao salvar comentário.'
            }));
        }
    }

    function handlerSetFeedBacks(arrayFeedBacks) {
        const { item, items } = getItemToArrayObject(arrayFeedBacks, 'user_id', user.id);
        setFeedBacks(items);
        if (item) {
            setMyFeedBack(item);
            setStars(item.rating);
            setComents(item.coments);
        }
    }

    async function handlerGetService() {
        try {
            const response = await getService(id);

            console.log(response);

            setService(response.data.service);
            const arrayFeedBacks = response.data.service.service_feedbacks;
            handlerSetFeedBacks(arrayFeedBacks);
            setOwerService(response.data.service.owner_service);
        } catch (error) {
            console.log(error);
        }
    }


    function init() {
        handlerGetService();
    };

    useEffect(() => {
        init();
    }, []);


    //pegar o serviço junto com suas aaliaçoes

    return (
        service &&
        <View style={{ flex: 1, position: 'relative' }}>
            <KeyBoardView>
                <SlidImages itens={teste} />
                <View style={{ flex: 1, padding: 20 }}>
                    <Card style={styles.card} elevation={0}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TextPoppins variant='bodyMedium' fontWeight={700} color="#949494">Produto ou serviço:</TextPoppins>
                            <Stars />
                        </View>
                        <TextPoppins variant='titleLarge' fontWeight={700}>{service.title}</TextPoppins>
                    </Card>
                </View>
                <View style={{ flex: 1, padding: 20, paddingTop: 0 }}>
                    <Card style={styles.card} elevation={0}>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar.Image size={60} source={{ uri: 'https://picsum.photos/700' }} />
                            <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                                <TextPoppins variant='bodyMedium' fontWeight={700}>{owerService?.username}</TextPoppins>
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
                        <TextPoppins variant='labelLarge' fontWeight={500}>{service.description}</TextPoppins>
                    </Card>
                </View>
                <View style={{ flex: 1, padding: 20, paddingTop: 0 }}>
                    <Card style={styles.card} elevation={0}>
                        <TextPoppins variant='titleLarge' fontWeight={600}>Deixe sua avaliação:</TextPoppins>
                        <View style={{ padding: 20, flexDirection: "row", justifyContent: 'center' }}>
                            <StarsActive value={stars} onPress={setStars} />
                        </View>
                        <InputComments onChangeText={setComents} value={coments} />
                        <DefaultButton onPress={fetchFeedback} title="Salvar avaliação" loading={loading} />
                    </Card>
                </View>
                <View style={{ flex: 1, padding: 20, paddingTop: 0 }}>
                    {feedbacks.map(({ id, name, coments, rating }) => (
                        <CardComents key={id} name={name} coments={coments} rating={rating} />
                    ))}
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
                            <TextPoppins variant='headlineSmall' fontWeight={700}>{formatToBRL(service.price)}</TextPoppins>
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