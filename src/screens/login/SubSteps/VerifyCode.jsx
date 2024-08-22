import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultView from "../../../components/Views/DefaultView";
import ContentView from "../../../components/Views/ContentView";
import { Title } from "../../../components/Typograph/Typographs";
import DefaultInput from "../../../components/Inputs/DefaultInput";
import KeyBoardView from "../../../components/Views/KeyBoardView";
import useKeyboardStatus from "../../../hooks/UseKeyboardStatus";
import InputPassword from "../../../components/Inputs/InputPassword";
import Link from "../../../components/Typograph/Link";
import DefaultButton from "../../../components/Buttons/DefaultButton";
import TextAndLines from "../../../components/Typograph/TextAndLines";
import ArrowBack from "../../../components/Buttons/ArrowBack";
import BtnSocialMedia from "../../../components/Buttons/BtnSocialMedia";
import { Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { Space20 } from "../../../components/SpacesLine/Spaces";
import InputCode from "../../../components/Inputs/InputCode";

export default function VerifyCode() {

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
                    <Title>Verificação de código</Title>
                    <Text variant="bodyLarge" style={{ color: "#757575" }}>Enviamos um código de verificação para<Text style={{color:"#33a4da"}}> andersong.salvador@gmail.com</Text></Text>
                    <Space20 />
                    <InputCode onChangeText={(text) => statusIcon(text)} />
                    <Space20 />
                    
                    {/* <DefaultInput label="E-mail" onChangeText={(text) => statusIcon(text)} />
                    <DefaultInput label="Senha" onChangeText={(text) => statusIcon(text)} />
                    <InputPassword label="Confirme a senha" onChangeText={(text) => statusIcon(text)} /> */}
                    {/* <View style={styles.containerLinkPassword}>
                        <Link color="#757575">Esqueceu a senha?</Link>
                    </View> */}
                    <DefaultButton mb={true} title="Verificar código" onPress={() => navigation.navigate('CreatePassword')} />
                    <Space20 />
                </KeyBoardView>
            </ContentView>
            {!isKeyboardVisible &&
                <View style={styles.footer}>
                    <Text variant="bodyLarge" style={{ fontFamily: "Poppins_600SemiBold" }}>
                        Não rececbeu o código?
                        {/* <Link fontFamily="Poppins_600SemiBold"> Login</Link> */}
                    </Text>
                    <DefaultButton mb={true} mode="outlined" title="Enviar outro" shadow={0} onPress={() => {}} />
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
        padding: 20,
        paddingBottom: 30,
        justifyContent: "center",
        textAlign:"center"
    }
});
