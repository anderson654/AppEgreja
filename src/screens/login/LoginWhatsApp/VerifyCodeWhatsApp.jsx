import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from "react-native";
import DefaultView from "../../../components/Views/DefaultView";
import ContentView from "../../../components/Views/ContentView";
import { Title } from "../../../components/Typograph/Typographs";
import KeyBoardView from "../../../components/Views/KeyBoardView";
import useKeyboardStatus from "../../../hooks/UseKeyboardStatus";
import DefaultButton from "../../../components/Buttons/DefaultButton";
import ArrowBack from "../../../components/Buttons/ArrowBack";
import { HelperText, Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { Space20 } from "../../../components/SpacesLine/Spaces";
import InputCode from "../../../components/Inputs/InputCode";
import validateCodeYup from "../../../validations/yup/validateCodeYup";
import { setAlert } from "../../../context/reducers/alertSnackBar";
import { getUser, sendCodeWhatsApp, loginCode } from "../../../apis/EgrejaApi/egreja";
import { setUser } from "../../../context/reducers/user";

export default function VerifyCodeWhatsApp() {

    const isKeyboardVisible = useKeyboardStatus();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const loginContext = useSelector(state => state.loginContext);

    const [code, setCode] = useState('');
    const [validate, setValidate] = useState({});
    const [loading, setLoading] = useState(false);

    async function handlerLogin() {
        setLoading(true);
        try {
            const errors = await hasErrors();
            if (errors) {
                return;
            }
            await loginCode(loginContext.phone, null, 'phone', code);
            const response = await getUser();
            dispatch(setUser(response.data));
            dispatch(setAlert({
                type: 'sucess',
                text: 'Código válido, seja bem-vindo.'
            }));
            navigation.navigate("StackHome");
        } catch (error) {
            if (error?.status == '401') {
                dispatch(setAlert({
                    type: 'error',
                    text: 'Erro ao verificar o código.'
                }));
            }
        } finally {
            setLoading(false);
        }
    }

    async function handlerResendCodeVerification() {
        setLoading(true);
        try {
            await sendCodeWhatsApp(loginContext.phone);
            dispatch(setAlert({
                type: 'sucess',
                text: 'Código enviado com sucesso.'
            }));
        } catch (error) {
            dispatch(setAlert({
                type: 'error',
                text: 'Erro ao verificar o código.'
            }));
        } finally {
            setLoading(false);
        }
    }

    const hasErrors = async () => {

        const validate = await validateCodeYup({
            code
        });

        setValidate(validate);

        return validate !== null;
    };

    return (
        <DefaultView spaceTopBar={true} background="#fff">
            <ContentView>
                <KeyBoardView>
                    <ArrowBack onPress={() => navigation.goBack()} />
                    <Space20 />
                    <Title>Verificação de código</Title>
                    <Text variant="bodyLarge" style={{ color: "#757575" }}>Enviamos um código de verificação para o número: <Text style={{ color: "#33a4da" }}> {loginContext.phone || ''}</Text> ,verifique o seu WhatsApp.</Text>
                    <Space20 />
                    <InputCode onChangeText={(text) => setCode(text)} error={!!validate?.code} />
                    <HelperText type="error" visible={!!validate?.code}>
                        {validate?.code}
                    </HelperText>
                    <Space20 />

                    <DefaultButton mb={true} title="Verificar código" onPress={handlerLogin} loading={loading} />
                    <Space20 />
                </KeyBoardView>
            </ContentView>
            {!isKeyboardVisible &&
                <View style={styles.footer}>
                    <Text variant="bodyLarge" style={{ fontFamily: "Poppins_600SemiBold" }}>
                        Não rececbeu o código?
                    </Text>
                    <DefaultButton mb={true} mode="outlined" title="Enviar outro" shadow={0} onPress={handlerResendCodeVerification} loading={loading} />
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
        textAlign: "center"
    }
});
