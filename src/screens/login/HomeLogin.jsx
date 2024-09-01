import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { StyleSheet, View } from "react-native";
import DefaultView from "../../components/Views/DefaultView";
import DefaultButton from "../../components/Buttons/DefaultButton";
import { useNavigation } from '@react-navigation/native';
import Link from "../../components/Typograph/Link";

export default function HomeLogin() {

    const navigation = useNavigation();
    const contextUser = useSelector(state => state.user);

    useEffect(() => {
        if (contextUser.user) {
            navigation.navigate('StackHome');
        }
    }, [contextUser.user]);

    return (
        <DefaultView spaceTopBar={true} background="#fff">
            <View style={styles.container}>
                <View>
                    <DefaultButton mb={true} title="Login" onPress={() => navigation.navigate('Login')} />
                    <DefaultButton mb={true} mode="outlined" title="Registro" shadow={0} onPress={() => navigation.navigate('Register')} />

                    <View style={styles.containerLink}>
                        <Link fontFamily="Poppins_600SemiBold" underline={true} onPress={() => navigation.navigate("StackHome")}>Continuar como convidado</Link>
                    </View>
                </View>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        padding: 20,
        flexDirection: "column-reverse"
    },
    containerLink: {
        alignItems: "center",
        marginTop: 40
    },
    linkColor: {
        color: '#33a4da',
        fontWeight: 600,
        marginTop: 20
    }
});