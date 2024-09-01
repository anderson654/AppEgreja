import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setText, setStatus, setType } from "../../context/reducers/alertSnackBar";
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
import { loginEmail, getUser } from "../../apis/EgrejaApi/egreja";
import { setUser } from "../../context/reducers/user";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validate, setValidate] = useState({});
    const [loading, setLoading] = useState(false);

    const isKeyboardVisible = useKeyboardStatus();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    async function handlerLogin() {
        setLoading(true);
        try {
            const errors = await hasErrors();
            if (errors) {
                return;
            }
            await loginEmail(email, password);
            const response = await getUser();
            dispatch(setUser(response.data));
            navigation.navigate("StackHome");
        } catch (error) {
            if (error?.status == '401') {
                dispatch(setText('Email ou senha inválidos'));
                dispatch(setStatus(true));
                dispatch(setType('error'));
            }
        } finally {
            setLoading(false);
        }
    }

    const hasErrors = async () => {
        const validate = await validateLoginYup({
            email,
            password
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
                    <Title>Bem vindo de volta! Que bom ver você aqui de novo!</Title>
                    <Space20 />
                    <InputEmail label="E-mail" onChangeText={(text) => setEmail(text)} icon="email" error={!!validate?.email} />
                    <HelperText type="error" visible={!!validate?.email}>
                        {validate?.email}
                    </HelperText>
                    <Space20 />
                    <InputPassword label="Senha" onChangeText={(text) => setPassword(text)} error={!!validate?.password} />
                    <HelperText type="error" visible={!!validate?.password}>
                        {validate?.password}
                    </HelperText>
                    <View style={styles.containerLinkPassword}>
                        <Link color="#757575">Esqueceu a senha?</Link>
                    </View>
                    <DefaultButton mb={true} title="Login" onPress={() => handlerLogin()} loading={loading} />
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
                    <Text variant="bodyLarge" style={{ fontFamily: "Poppins_600SemiBold" }}>
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
