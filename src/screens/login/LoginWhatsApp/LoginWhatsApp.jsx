import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setStatus, setAlert } from "../../../context/reducers/alertSnackBar";
import { StyleSheet, View } from "react-native";
import DefaultView from "../../../components/Views/DefaultView";
import ContentView from "../../../components/Views/ContentView";
import { Title } from "../../../components/Typograph/Typographs";
import KeyBoardView from "../../../components/Views/KeyBoardView";
import useKeyboardStatus from "../../../hooks/UseKeyboardStatus";
import Link from "../../../components/Typograph/Link";
import DefaultButton from "../../../components/Buttons/DefaultButton";
import TextAndLines from "../../../components/Typograph/TextAndLines";
import ArrowBack from "../../../components/Buttons/ArrowBack";
import BtnSocialMedia from "../../../components/Buttons/BtnSocialMedia";
import { HelperText, Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { Space20 } from "../../../components/SpacesLine/Spaces";
import { setUser } from "../../../context/reducers/user";
import InputPhone from "../../../components/Inputs/InputPhone";
import loginWhatsAppYup from "../../../validations/yup/loginWhatsAppYup";
import { sendCodeWhatsApp } from "../../../apis/EgrejaApi/egreja";
import { setPhone as contextSetPhone } from "../../../context/reducers/loginContext";

export default function LoginWhatsApp() {
    const [phone, setPhone] = useState('');
    const [validate, setValidate] = useState({});
    const [loading, setLoading] = useState(false);

    const isKeyboardVisible = useKeyboardStatus();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userIsLogued = useSelector(state => !!state.user.user)

    async function handlerLogin() {

        setLoading(true);
        try {
            const errors = await hasErrors();
            if (errors) {
                return;
            }
            await sendCodeWhatsApp(phone);
            dispatch(setAlert({
                type: 'sucess',
                text: 'Código enviado com sucesso.'
            }));
            dispatch(contextSetPhone(phone));
            navigation.navigate("VerifyCodeWhatsApp");
        } catch (error) {
            dispatch(setAlert({
                type: 'error',
                text: 'Telefone inválido ou não encontrado.'
            }));
        } finally {
            setLoading(false);
        }
    }

    const hasErrors = async () => {
        const validate = await loginWhatsAppYup({
            phone
        });
        setValidate(validate);

        return validate !== null;
    };

    const handlerBack = () => {
        if (!userIsLogued) {
            navigation.navigate("HomeLogin");
            return;
        } else {
            navigation.goBack();
        }
    }

    return (
        <DefaultView spaceTopBar={true} background="#fff">
            <ContentView>
                <KeyBoardView>
                    <ArrowBack onPress={handlerBack} />
                    <Space20 />
                    <Title>Bem vindo de volta! Que bom ver você aqui de novo!</Title>
                    <Space20 />
                    <InputPhone label="Telefone" onChangeText={(text) => setPhone(text)} icon="phone" error={!!validate?.phone} />
                    <HelperText type="error" visible={!!validate?.phone}>
                        {validate?.phone}
                    </HelperText>
                    <View style={styles.containerLinkPassword}>
                        <Link color="#757575">Perdeu seu número?</Link>
                    </View>
                    <DefaultButton mb={true} title="Receber código" onPress={() => handlerLogin()} loading={loading} />
                    <Space20 />
                    <TextAndLines />
                    <Space20 />
                    <View style={styles.containerSocialMedia}>
                        <BtnSocialMedia onPress={() => console.log('Hello')} />
                    </View>
                </KeyBoardView>
            </ContentView>
            {!isKeyboardVisible &&
                <View style={styles.footer}>
                    <Text variant="bodyLarge" style={{ fontFamily: "Poppins_600SemiBold" }}>
                        Ainda não tem conta?
                    </Text>
                    <Link fontFamily="Poppins_600SemiBold" onPress={() => navigation.navigate("Register")}> Registre-se agora</Link>
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
