import React from "react";
import { useSelector } from 'react-redux';
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TextPoppins from "../../Typograph/TextPoppins";
import FlatItendServicesAndProducts from "./FlatItendServicesAndProducts";

export default function ListServicesAndProductsHome() {
    //carregar os itens aqui 
    const home = useSelector(state => state.home);

    const ItemServices = ({ data }) => {
        return (
            <FlatItendServicesAndProducts data={data} />
        )
    }

    return (
        home?.selectedCategory &&
        // <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100, paddingTop: 20 }}>
            <View>
                {home?.selectedCategory.c_service_types.map((obj, index) => {
                    return <ItemServices key={index} data={obj} />
                })}
            </View>
        // </ScrollView>
    );
}