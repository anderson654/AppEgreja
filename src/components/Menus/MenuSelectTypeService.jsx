import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Avatar, Button, Icon, useTheme, Text } from "react-native-paper";
import { Space10 } from "../SpacesLine/Spaces";
import { getServiceCategories } from "../../apis/EgrejaApi/egreja";
import { setCategories } from "../../context/reducers/servicesAndCategories";
import { setSelectCategory } from "../../context/reducers/home";


export default function MenuSelectTypeService({ onPress }) {

    const dispatch = useDispatch();
    const servicesAndCategories = useSelector(state => state.servicesAndCategories);
    const home = useSelector(state => state.home);

    async function fetchServices() {
        if (!servicesAndCategories.categories) {
            (async () => {
                try {
                    const response = await getServiceCategories();
                    dispatch(setCategories(response.data.categories));
                    if(!home.selectedCategory){
                        dispatch(setSelectCategory(response.data.categories[0]));
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }

    useEffect(() => {
        (async () => {
            await fetchServices();
        })()
    }, []);


    const theme = useTheme();

    // theme.colors.elevation.level1
    // const IconFood = props => <Avatar.Icon {...props} size={35} icon="food" />
    // brush-variant

    const MyComponent = ({ icon, title = "title", data }) => (
        <Card style={styles.card} onPress={() => handlerOnPress(data)} elevation={0}>
            <Card.Content style={styles.cardContent}>
                <Avatar.Icon size={35} icon={'food'} />
                <Space10 />
                <Text variant="labelSmall">{title}</Text>
            </Card.Content>
        </Card>
    );


    const handlerOnPress = (data) => {
        if (typeof onPress === 'function') {
            onPress(data);
        }
    }

    return (servicesAndCategories?.categories &&
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }} horizontal={true}>
            {
                servicesAndCategories.categories.map((data) => {
                    return (
                        <MyComponent key={data.id} icon={data.icon} title={data.title} data={data} />
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        width: 120,
        marginRight: 20
    },
    cardContent: {
        justifyContent: "center",
        alignItems: "center",
    }
});