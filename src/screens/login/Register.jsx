import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from "../../context/reducers/alertSnackBar";
import { StyleSheet, View } from "react-native";
import DefaultView from "../../components/Views/DefaultView";
import ContentView from "../../components/Views/ContentView";
import { Title } from "../../components/Typograph/Typographs";
import KeyBoardView from "../../components/Views/KeyBoardView";
import useKeyboardStatus from "../../hooks/UseKeyboardStatus";
import InputPassword from "../../components/Inputs/InputPassword";
import Link from "../../components/Typograph/Link";
import DefaultButton from "../../components/Buttons/DefaultButton";
import TextAndLines from "../../components/Typograph/TextAndLines";
import ArrowBack from "../../components/Buttons/ArrowBack";
import BtnSocialMedia from "../../components/Buttons/BtnSocialMedia";
import { HelperText, Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { Space20 } from "../../components/SpacesLine/Spaces";
import InputEmail from "../../components/Inputs/InputEmail";
import validateLoginYup from "../../validations/yup/loginValidation";
import { loginEmail, getUser, sendCodeEmail, createUserEmail } from "../../apis/EgrejaApi/egreja";
import { setUser } from "../../context/reducers/user";
import { setEmail as setEmailContext } from "../../context/reducers/loginContext";

import sendCodeEmailYup from "../../validations/yup/sendCodeEmailYup";

export default function Register() {
    const [email, setEmail] = useState('');
    const [validate, setValidate] = useState({});
    const [loading, setLoading] = useState(false);

    const isKeyboardVisible = useKeyboardStatus();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userIsLogued = useSelector(state => !!state.user.user)

    async function handlerSendCodeEmail() {
        setLoading(true);
        try {
            const errors = await hasErrors();
            if (errors) {
                return;
            }
            await createUserEmail(email);
            await sendCodeEmail(email);
            dispatch(setEmailContext(email));
            dispatch(setAlert({
                type: 'sucess',
                text: 'Código enviado.'
            }));
            navigation.navigate("VerifyCodeEmail");
        } catch (error) {
            console.log(error.response.data);

            if (error?.status == '401') {
                dispatch(setAlert({
                    type: 'error',
                    text: error?.response?.data?.message || 'Erro ao registrar usuário.'
                }));
            }
        } finally {
            setLoading(false);
        }
    }

    const hasErrors = async () => {
        const validate = await sendCodeEmailYup({
            email
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
                    <Title>Olá! Registre-se para começar</Title>
                    <Space20 />
                    <InputEmail label="E-mail" onChangeText={(text) => setEmail(text)} icon="email" error={!!validate?.email} />
                    <HelperText type="error" visible={!!validate?.email}>
                        {validate?.email}
                    </HelperText>
                    <View style={styles.containerLinkPassword}>
                        <Link color="#757575">Perdeu o e-mail?</Link>
                    </View>
                    <DefaultButton mb={true} title="Registrar-se" onPress={() => handlerSendCodeEmail()} loading={loading} />
                    <Space20 />
                    <TextAndLines text="Registre-se com" />
                    <Space20 />
                    <View style={styles.containerSocialMedia}>
                        <BtnSocialMedia onPress={() => navigation.navigate('RegisterWhatsApp')} />
                    </View>
                </KeyBoardView>
            </ContentView>
            {!isKeyboardVisible &&
                <View style={styles.footer}>
                    <Text variant="bodyLarge" style={{ fontFamily: "Poppins_600SemiBold" }}>
                        Já tem conta?
                    </Text>
                    <Link fontFamily="Poppins_600SemiBold" onPress={() => navigation.navigate("Login")}> Login</Link>
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

