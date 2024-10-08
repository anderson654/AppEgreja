import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setMenuProfile } from "../../../../context/reducers/menuProfile";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { Title } from "../../../../components/Typograph/Typographs";
import ContentView from "../../../../components/Views/ContentView";
import ButtonIconSurface from "../../../../components/Buttons/ButtonIconSurface";
import { Space20 } from "../../../../components/SpacesLine/Spaces";
import DefaultInput from "../../../../components/Inputs/DefaultInput";
import MenuSelectTypeService from "../../../../components/Menus/MenuSelectTypeService";
import MenuSelectService from "../../../../components/Menus/MenuSelectService";
import { Avatar } from "react-native-paper";

export default function Inicial() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const routes = useNavigationState(state => state.routes);
    const [layout, setLayout] = useState({ width: 0, height: 0 });
    const userIsLogued = useSelector(state => !!state.user.user)
    // console.log(navigation.getParent().getParent().getState());

    const handleLayoutSearch = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setLayout({ width, height });
        // console.log(`Width: ${width}, Height: ${height}`);
    }

    const handlerOpenMenuLeft = () => {
        console.log(userIsLogued);
        
        if (!userIsLogued) {
            navigation.navigate('Login');
            return;
        }
        dispatch(setMenuProfile(true));
    }

    return (
        <>
            <View style={styles.containerSearch} onLayout={handleLayoutSearch}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ButtonIconSurface onPress={handlerOpenMenuLeft} />
                    <DefaultInput styles={styles.customStyleInputSearch} mode="outlined" label="Pesquisar um item ou comercio." />
                </View>
                <Space20 />
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.containerPadding}>
                        <View style={styles.containerTitle}>
                            <Title>Olá, <Title fontFamily={'Poppins_700Bold'}>Gabriel{'\n'}</Title>Vai do que hoje?</Title>
                            <View style={styles.containerIcon}>
                                <Avatar.Icon size={60} icon="plus" style={{ backgroundColor: "#f7f8f9" }} />
                            </View>
                        </View>
                    </View>
                    <MenuSelectTypeService />
                    <MenuSelectService />
                    <Space20 />
                </View>
                <View>
                    {/* body */}
                </View>
            </ScrollView>
        </>
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
        alignItems: "flex-end",
    },
    containerSearch: {
        // flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#FFF",
    },
    customStyleInputSearch: {
        marginBottom: 0,
        flex: 1,
        marginStart: 20
    }
});