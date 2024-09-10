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

export default function Clause() {

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
                    <Text variant="bodyLarge" style={{ color: "#757575" }}>No [nome do aplicativo], sua privacidade e segurança são nossas principais prioridades. Solicitamos alguns dados pessoais para garantir que você tenha a melhor experiência possível ao usar nossos serviços. Os dados que pedimos nos ajudam a:</Text>
                    <Space20 />
                    <Space20 />
                    <Text variant="bodyLarge">
                        <Text style={{ fontFamily: 'Poppins_600SemiBold' }}>1. Oferecer uma Experiência Personalizada:{'\n\n'}</Text>
                        Com suas informações, podemos adaptar o conteúdo e as funcionalidades do aplicativo às suas preferências, proporcionando uma experiência mais relevante e eficiente.
                    </Text>
                    <Space20 />
                    <Text variant="bodyLarge">
                        <Text style={{ fontFamily: 'Poppins_600SemiBold' }}>2. Garantir a Segurança e Proteção:{'\n\n'}</Text>
                        Coletamos seus dados para proteger sua conta e garantir que somente você tenha acesso às suas informações. Isso também nos ajuda a identificar e evitar fraudes, garantindo um ambiente seguro para todos os usuários.
                    </Text>
                    <Space20 />
                    <Text variant="bodyLarge">
                        <Text style={{ fontFamily: 'Poppins_600SemiBold' }}>3. Melhorar Nossos Serviços:{'\n\n'}</Text>
                        Analisamos os dados de uso para entender como nosso aplicativo está sendo utilizado e identificar áreas para melhorias, assegurando que continuemos a oferecer um serviço de alta qualidade.
                    </Text>
                    <Space20 />
                    <Text variant="bodyLarge">
                        <Text style={{ fontFamily: 'Poppins_600SemiBold' }}>4. Facilitar a Comunicação:{'\n\n'}</Text>
                        Com suas informações, podemos adaptar o conteúdo e as funcionalidades do aplicativo às suas preferências, proporcionando uma experiência mais relevante e eficiente.
                    </Text>
                    <Space20 />
                    <Text variant="bodyLarge">
                        <Text style={{ fontFamily: 'Poppins_600SemiBold' }}>5. Cumprir Obrigações Legais:{'\n\n'}</Text>
                        Com suas informações, podemos adaptar o conteúdo e as funcionalidades do aplicativo às suas preferências, proporcionando uma experiência mais relevante e eficiente.
                    </Text>
                    <Space20 />
                    <Text variant="bodyLarge" style={{ color: "#757575" }}>Saiba que todos os dados fornecidos são tratados com o máximo cuidado e utilizados apenas para os fins descritos acima. Seguimos rigorosamente as melhores práticas de segurança e as leis de proteção de dados aplicáveis para garantir que suas informações estejam sempre seguras.

Se tiver alguma dúvida sobre a coleta e o uso de seus dados, nossa equipe de suporte está disponível para ajudar.</Text>
                    <Space20 />

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
    },
    linkClause: {
        flexDirection: "row-reverse"
    }
});
