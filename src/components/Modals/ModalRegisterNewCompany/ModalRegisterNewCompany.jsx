import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from "react-native";
import RegisterAfiliate from "../../../screens/RegisterAfiliate/RegisterAfiliate";
import SnackbarPaper from "../../Alerts/SnackbarPaper";
import ArrowBack from "../../Buttons/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import { setStatusModal } from "../../../context/reducers/modals";

export default function ModalRegisterNewCompany() {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handlerGoBack = () => {
        dispatch(setStatusModal(false));
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={{ padding: 20, paddingBottom: 0 }}>
                <ArrowBack onPress={handlerGoBack} />
            </View>
            <RegisterAfiliate />
            <SnackbarPaper />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});