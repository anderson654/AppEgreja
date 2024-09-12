import React, { useEffect, useState } from "react";
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
import { HelperText, Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { Space20 } from "../../components/SpacesLine/Spaces";
import InputEmail from "../../components/Inputs/InputEmail";
import InputName from "../../components/Inputs/InputName";
import InputPhone from "../../components/Inputs/InputPhone";
import InputCpf from "../../components/Inputs/InputCpf";
import updateUserYup from "../../validations/yup/updateUserYup";
import { setAlert } from "../../context/reducers/alertSnackBar";
import { updateUser as updateUserApi, getUser } from "../../apis/EgrejaApi/egreja";
import { setUser } from "../../context/reducers/user";
import validatePasswordYup from "../../validations/yup/validatePasswordYup";


export default function UpdateUser() {
    const contextUser = useSelector(state => state.user.user);

    const [username, setUserName] = useState(contextUser?.username);
    const [email, setEmail] = useState(contextUser?.email);
    const [phone, setPhone] = useState(contextUser?.phone);
    const [cpf, setCpf] = useState(contextUser?.cpf);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const isKeyboardVisible = useKeyboardStatus();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [validate, setValidate] = useState({});
    const [validatePassword, setValidatePassword] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (contextUser && !contextUser?.username) {
            return;
        }
        navigation.navigate("Home");
    }, [contextUser]);

    async function handlerUpdateUser() {
        setLoading(true);
        try {
            const errors = await hasErrors();
            const errorsPassword = await hasErrorsPassword();

            if (errors) {
                return;
            }

            if (!contextUser?.exist_password && errorsPassword) {
                console.log(!contextUser?.exist_password, errorsPassword);
                
                return;
            }

            const data = {
                username,
                email,
                phone,
                cpf,
                ...(!contextUser?.exist_password && {
                    password,
                    confirmPassword
                })
            }

            await updateUserApi(data);
            const response = await getUser();
            
            dispatch(setUser(response.data));
            dispatch(setAlert({
                type: 'sucess',
                text: 'Dados atualizados com sucesso.'
            }));
            navigation.navigate("Home");
        } catch (error) {
            dispatch(setAlert({
                type: 'error',
                text: error?.response?.data?.message || 'Erro ao salvar os dados pessoais.'
            }));
        } finally {
            setLoading(false);
        }
    }


    const hasErrors = async () => {
        const validate = await updateUserYup({
            username,
            email,
            phone,
            cpf
        });
        setValidate(validate);

        return validate !== null;
    };

    const hasErrorsPassword = async () => {
        const validate = await validatePasswordYup({
            password,
            confirmPassword
        });
        setValidatePassword(validate);

        return validate !== null;
    };

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
                    <InputName label="Nome" onChangeText={setUserName} initialValue={username} error={!!validate?.username} />
                    <HelperText type="error" visible={!!validate?.username}>
                        {validate?.username}
                    </HelperText>
                    <InputEmail label="E-mail" onChangeText={setEmail} initialValue={email} error={!!validate?.email} />
                    <HelperText type="error" visible={!!validate?.email}>
                        {validate?.email}
                    </HelperText>
                    <InputPhone label="Telefone" onChangeText={setPhone} initialValue={phone} error={!!validate?.phone} />
                    <HelperText type="error" visible={!!validate?.phone}>
                        {validate?.phone}
                    </HelperText>
                    <InputCpf label="CPF" onChangeText={setCpf} initialValue={cpf} error={!!validate?.cpf} />
                    <HelperText type="error" visible={!!validate?.cpf}>
                        {validate?.cpf}
                    </HelperText>
                    {!contextUser?.exist_password &&
                        <>
                            <Title>Criar Senha.</Title>
                            <Text variant="bodyLarge" style={{ color: "#757575" }}>Por favor, crie uma senha segura para continuar.</Text>
                            <Space20 />
                            <InputPassword label="Senha" onChangeText={setPassword} error={!!validatePassword?.password} />
                            <HelperText type="error" visible={!!validatePassword?.password} >
                                {validatePassword?.password}
                            </HelperText>
                            <InputPassword label="Confirme a senha" onChangeText={setConfirmPassword} error={!!validatePassword?.confirmPassword} />
                            <HelperText type="error" visible={!!validatePassword?.confirmPassword}>
                                {validatePassword?.confirmPassword}
                            </HelperText>
                        </>
                    }
                    <DefaultButton mb={true} title="Atualizar dados" onPress={handlerUpdateUser} loading={loading} />
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
