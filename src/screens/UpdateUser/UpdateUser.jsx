import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from "react-native";
import DefaultView from "../../components/Views/DefaultView";
import ContentView from "../../components/Views/ContentView";
import { Title } from "../../components/Typograph/Typographs";
import DefaultInput from "../../components/Inputs/DefaultInput";
import KeyBoardView from "../../components/Views/KeyBoardView";
import useKeyboardStatus from "../../hooks/UseKeyboardStatus";
import InputPassword from "../../components/Inputs/InputPassword";
import Link from "../../components/Typograph/Link";
import DefaultButton from "../../components/Buttons/DefaultButton";
import TextAndLines from "../../components/Typograph/TextAndLines";
import ArrowBack from "../../components/Buttons/ArrowBack";
import BtnSocialMedia from "../../components/Buttons/BtnSocialMedia";
import { Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { Space20 } from "../../components/SpacesLine/Spaces";
import InputEmail from "../../components/Inputs/InputEmail";
import InputName from "../../components/Inputs/InputName";
import InputPhone from "../../components/Inputs/InputPhone";
import InputCpf from "../../components/Inputs/InputCpf";


export default function UpdateUser() {

    const isKeyboardVisible = useKeyboardStatus();
    const navigation = useNavigation();

    const contextUser = useSelector(state => state.user.user);
    console.log(contextUser);

    function statusIcon(status) {
        console.log("@ahhaha", status);
    }

    return (
        <DefaultView spaceTopBar={true} background="#fff">
            <ContentView>
                <KeyBoardView>
                    <ArrowBack onPress={() => navigation.goBack()} />
                    <Space20 />
                    <Title>Dados pessoais.</Title>
                    <Text variant="bodyLarge" style={{ color: "#757575" }}>Solicitamos seus dados pessoais para oferecer uma experiência personalizada, garantir a segurança da sua conta e melhorar continuamente nossos serviços, sempre respeitando sua privacidade.</Text>
                    <View style={styles.linkClause}>
                        <Link onPress={() => navigation.navigate('Clause')}>Leia mais.</Link>
                    </View>
                    <Space20 />
                    <InputName label="Nome" initialValue={contextUser.username}/>
                    <Space20 />
                    <InputEmail label="E-mail" initialValue={contextUser.email}/>
                    <Space20 />
                    <InputPhone label="Telefone" initialValue={contextUser.phone}/>
                    <Space20 />
                    <InputCpf label="CPF" initialValue={contextUser.cpf}/>
                    <Space20 />
                    <Title>Criar Senha.</Title>
                    <Text variant="bodyLarge" style={{ color: "#757575" }}>Por favor, crie uma senha segura para continuar.</Text>
                    <Space20 />
                    <InputPassword label="Senha" onChangeText={(text) => statusIcon(text)} />
                    <Space20 />
                    <InputPassword label="Confirme a senha" onChangeText={(text) => statusIcon(text)} />
                    <Space20 />
                    <DefaultButton mb={true} title="Criar senha" onPress={() => { }} />
                    <Space20 />
                </KeyBoardView>
            </ContentView>
        </DefaultView>
    )
}

const styles = StyleSheet.create({
    containerLinkPassword: {
        flexDirection: "row-reverse",
        marginBottom: 40
    },
    containerSocialMedia: {
        flexDirection: "row",
        justifyContent: "center"
    },
    footer: {
        paddingTop: 20,
        paddingBottom: 30,
        flexDirection: "row",
        justifyContent: "center",
    },
    linkClause: {
        flexDirection: "row-reverse"
    }
});
