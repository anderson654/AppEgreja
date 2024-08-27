import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setMenuProfile } from "../../context/reducers/menuProfile";
import { Pressable, ScrollView } from "react-native";
import { StyleSheet, View, Modal } from "react-native";
import { Avatar, Divider, Text, useTheme } from "react-native-paper";
import ButtonIconSurface from "../Buttons/ButtonIconSurface";

export default function MenuProfile() {

    const contextMenuProfile = useSelector(context => context.menuProfile);
    const dispatch = useDispatch();
    const theme = useTheme();

    const [modalVisible, setModalVisible] = useState(false);

    const headerStyle = {
        ...styles.header,
        backgroundColor: theme.colors.primary
    }

    const LineItemMenu = ({title, subTitle, icon = 'bookmark-outline'}) => {
        return (
            <>
                <View style={styles.containerItem}>
                    <ButtonIconSurface elevation={0} icon={icon} onPress={() => dispatch(setMenuProfile(false))} />
                    <View>
                        <Text variant="bodyLarge" style={{ fontFamily: 'Poppins_500Medium' }}>{title || 'title'}</Text>
                        <Text variant="bodyMedium" style={{ fontFamily: 'Poppins_500Medium', color: "#7e7e7e" }}>{subTitle || 'subTitle'}</Text>
                    </View>
                </View>
                <Divider style={{ width: "100%" }} />
            </>
        )
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={contextMenuProfile.menuProfileIsOpen}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <ScrollView style={styles.contentModal}>
                <View style={headerStyle}>
                    <ButtonIconSurface icon="close" onPress={() => dispatch(setMenuProfile(false))} />
                    <View style={{ flexDirection: "row" }}>
                        <ButtonIconSurface styles={styles.me2} elevation={0} icon="account-question-outline" onPress={() => dispatch(setMenuProfile(false))} />
                        <ButtonIconSurface elevation={0} icon="bell-outline" onPress={() => dispatch(setMenuProfile(false))} />
                    </View>
                </View>
                <View style={styles.containerAvatar}>
                    <View style={styles.containerNameAndImage}>
                        <Avatar.Image size={80} source={{ uri: 'https://picsum.photos/704' }} style={{ marginRight: 20 }} />
                        <Text variant="titleLarge" style={{ fontFamily: 'Poppins_600SemiBold' }}>Anderson Gabriel</Text>
                    </View>
                </View>
                <LineItemMenu title={'Comece a vender'} subTitle={'Crie seu próprio estabelecimento online'} icon="storefront-outline"/>
                <LineItemMenu title={'Meus Dados'} subTitle={'Mais informaçoes de conta'} icon="square-edit-outline"/>
                <LineItemMenu title={'Meu Perfil'} subTitle={'Minhas informações do perfil'} icon="account-circle-outline"/>
                <LineItemMenu title={'Meus Anúncios'} subTitle={'Meus anúncios avulsos'} icon="message-text-clock-outline"/>
                <LineItemMenu title={'Central de Atendimento'} subTitle={' '} icon="phone-in-talk-outline"/>
                <LineItemMenu title={'Sobre'} subTitle={' '} icon="cog-outline"/>
                <LineItemMenu title={'Termos & Condições'} subTitle={' '} icon="book-alert-outline"/>
                <LineItemMenu title={'Tema'} subTitle={' '} icon="theme-light-dark"/>
                <LineItemMenu title={'Sair'} subTitle={' '} icon="logout"/>
            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contentModal: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    me2: {
        marginEnd: 20
    },
    containerAvatar: {
        padding: 20
    },
    containerNameAndImage: {
        flexDirection: "row"
    },
    containerItem: {
        padding: 20,
        flexDirection: "row"
    }
});