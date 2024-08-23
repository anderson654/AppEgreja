import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { Title } from "../../../../components/Typograph/Typographs";
import ContentView from "../../../../components/Views/ContentView";
import ButtonIconSurface from "../../../../components/Buttons/ButtonIconSurface";
import { Space20 } from "../../../../components/SpacesLine/Spaces";
import DefaultInput from "../../../../components/Inputs/DefaultInput";
import MenuSelectTypeService from "../../../../components/Menus/MenuSelectTypeService";
import { Avatar } from "react-native-paper";

export default function Inicial() {
    const navigation = useNavigation();
    const routes = useNavigationState(state => state.routes);
    console.log(navigation.getParent().getParent().getState());

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.containerPadding}>
                    <ButtonIconSurface />
                    <Space20 />
                    <View style={styles.containerTitle}>
                        <Title>Olá, <Title fontFamily={'Poppins_700Bold'}>Gabriel{'\n'}</Title>Vai do que hoje?</Title>
                        <View style={styles.containerIcon}>
                            <Avatar.Icon size={60} icon="plus" style={{backgroundColor:"#f7f8f9"}}/>
                        </View>
                    </View>
                </View>
                <MenuSelectTypeService />
                <View style={styles.containerPadding}>
                    <DefaultInput mode="outlined" label="Pesquisar um item ou comercio." />
                </View>
            </View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff"
    },
    contentContainer: {
        // padding: 20,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    containerPadding: {
        padding: 20
    },
    containerTitle: {
        flexDirection: "row"
    },
    containerIcon: {
        flex: 1,
        alignItems:"flex-end",
    }
});