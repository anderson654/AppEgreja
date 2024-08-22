import React from "react";
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

export default function Login() {

    const isKeyboardVisible = useKeyboardStatus();
    const navigation = useNavigation();

    function statusIcon(status) {
        console.log("@ahhaha", status);
    }

    return (
        <DefaultView spaceTopBar={true} background="#fff">
            <ContentView>
                <KeyBoardView>
                    <ArrowBack onPress={() => navigation.goBack()} />
                    <Space20 />
                    <Title>Bem vindo de volta! Que bom ver você aqui de novo!</Title>
                    <Space20 />
                    <DefaultInput label="E-mail" onChangeText={(text) => statusIcon(text)} />
                    <InputPassword label="Senha" onChangeText={(text) => statusIcon(text)} />
                    <View style={styles.containerLinkPassword}>
                        <Link color="#757575">Esqueceu a senha?</Link>
                    </View>
                    <DefaultButton mb={true} title="Login" onPress={() => { }} />
                    <Space20 />
                    <TextAndLines />
                    <Space20 />
                    <View style={styles.containerSocialMedia}>
                        <BtnSocialMedia />
                    </View>
                </KeyBoardView>
            </ContentView>
            {!isKeyboardVisible &&
                <View style={styles.footer}>
                    <Text variant="bodyLarge" style={{fontFamily:"Poppins_600SemiBold"}}>
                        Ainda não tem conta?
                        <Link fontFamily="Poppins_600SemiBold"> Registre-se agora</Link>
                    </Text>

                </View>
            }
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
        paddingVertical: 40,
        flexDirection: "row",
        justifyContent: "center"
    }
});
