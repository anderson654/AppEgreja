import React from "react";
import { StyleSheet, View } from "react-native";
import RegisterAfiliate from "../../../screens/RegisterAfiliate/RegisterAfiliate";
import SnackbarPaper from "../../Alerts/SnackbarPaper";


export default function ModalRegisterNewCompany() {
    return (
        <View style={styles.container}>
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