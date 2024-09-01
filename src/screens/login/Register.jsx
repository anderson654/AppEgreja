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
import InputEmail from "../../components/Inputs/InputEmail";

export default function Register() {

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
                    <Title>Olá! Registre-se para começar</Title>
                    <Space20 />
                    <InputEmail onChangeText={(text) => statusIcon(text)} />
                    <Space20 />
                    {/* <DefaultInput label="E-mail" onChangeText={(text) => statusIcon(text)} />
                    <DefaultInput label="Senha" onChangeText={(text) => statusIcon(text)} />
                    <InputPassword label="Confirme a senha" onChangeText={(text) => statusIcon(text)} /> */}
                    {/* <View style={styles.containerLinkPassword}>
                        <Link color="#757575">Esqueceu a senha?</Link>
                    </View> */}
                    <DefaultButton mb={true} title="Registre-se" onPress={() => navigation.navigate('VerifyCode')} />
                    <Space20 />
                    <TextAndLines text={'Registrar com'} />
                    <Space20 />
                    <View style={styles.containerSocialMedia}>
                        <BtnSocialMedia />
                    </View>
                </KeyBoardView>
            </ContentView>
            {!isKeyboardVisible &&
                <View style={styles.footer}>
                    <Text variant="bodyLarge" style={{ fontFamily: "Poppins_600SemiBold" }}>
                        Já tem uma conta?
                    </Text>
                    <Link fontFamily="Poppins_600SemiBold" onPress={() => navigation.navigate('Login')}> Login</Link>
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
        paddingTop: 20,
        paddingBottom: 30,
        flexDirection: "row",
        justifyContent: "center",
    }
});
