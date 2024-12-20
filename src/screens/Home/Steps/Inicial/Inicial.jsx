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
import { Avatar, Card } from "react-native-paper";
import { setSelectCategory, setSelectedTypeService } from "../../../../context/reducers/home";
import KeyBoardView from "../../../../components/Views/KeyBoardView";
import ListServicesAndProductsHome from "../../../../components/FlatLists/ListServicesAndProductsHome/ListServicesAndProductsHome";
import SlidPromotions from "../../../../components/FlatLists/SlidPromotions/SlidPromotions";
import TextPoppins from "../../../../components/Typograph/TextPoppins";


const teste = [
    {
        id: 1,
        image: 'https://picsum.photos/700'
    },
    {
        id: 2,
        image: 'https://picsum.photos/701'
    },
    {
        id: 3,
        image: 'https://picsum.photos/702'
    },
    {
        id: 4,
        image: 'https://picsum.photos/703'
    },
]

export default function Inicial() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const routes = useNavigationState(state => state.routes);
    const home = useSelector(state => state.home);
    const userIsLogued = useSelector(state => !!state.user.user);

    const [layout, setLayout] = useState({ width: 0, height: 0 });
    // console.log(navigation.getParent().getParent().getState());

    const handleLayoutSearch = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setLayout({ width, height });
        // console.log(`Width: ${width}, Height: ${height}`);
    }

    const handlerOpenMenuLeft = () => {
        if (!userIsLogued) {
            navigation.navigate('Login');
            return;
        }
        dispatch(setMenuProfile(true));
    }

    function handlerSelectCategories(data) {
        dispatch(setSelectCategory(data));
    }

    function handlerSetTypeService(data) {
        dispatch(setSelectedTypeService(data));
    }

    return (
        <>
            <View style={styles.containerSearch} onLayout={handleLayoutSearch}>
                <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                    <ButtonIconSurface onPress={handlerOpenMenuLeft} />
                    <DefaultInput styles={styles.customStyleInputSearch} mode="outlined" label="Pesquisar um serviço ou produto" icon="text-search" />
                </View>
                <Space20 />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.container}>
                <View style={{ padding: 20, paddingBottom: 0 }}>
                    <TextPoppins variant={'titleLarge'} fontWeight={700}>Destaques</TextPoppins>
                </View>
                <SlidPromotions itens={teste} />
                <View style={styles.contentContainer}>
                    {/* <View style={styles.containerPadding}>
                        <View style={styles.containerTitle}>
                            <Title>Olá, <Title fontFamily={'Poppins_700Bold'}>Gabriel{'\n'}</Title>Vai do que hoje?</Title>
                            <View style={styles.containerIcon}>
                                <Avatar.Icon size={60} icon="plus" style={{ backgroundColor: "#f7f8f9" }} />
                            </View>
                        </View>
                    </View> */}
                    <View style={{ padding: 20, paddingBottom: 20 }}>
                        <TextPoppins variant={'titleLarge'} fontWeight={700}>Categoria</TextPoppins>
                    </View>
                    <MenuSelectTypeService onPress={handlerSelectCategories} />
                    {home?.selectedCategory &&
                        <MenuSelectService onPress={handlerSetTypeService} />
                    }
                    {/* <Space20 /> */}
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ListServicesAndProductsHome />
            </View>

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#fff"
    },
    contentContainer: {
        // padding: 20,
        // backgroundColor: "#fff",
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30
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
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    customStyleInputSearch: {
        marginBottom: 0,
        flex: 1,
        marginStart: 20
    }
});