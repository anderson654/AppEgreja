import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from "react-native-gesture-handler";
import { Card } from "react-native-paper";
import { setAlert } from "../../../context/reducers/alertSnackBar";
import { getServicesToCategoryAndType } from "../../../apis/EgrejaApi/egreja";
import { setServicesCategoryAndType } from "../../../context/reducers/cacheServices";
import TextPoppins from "../../Typograph/TextPoppins";
import { formatToBRL } from "../../../utils/formatValues";


export default function FlatItendServicesAndProducts({ data }) {


    const [services, setServices] = useState(null);
    const [loading, setLoading] = useState(false);
    const servicesCategoryAndType = useSelector(state => state.cacheServices.servicesCategoryAndType);
    const dispatch = useDispatch();


    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setLoading(true);
    //             const response = await getServicesToCategoryAndType(data.category_id, data.id);
    //             console.log('@aqui', response.data.services.data);
    //             dispatch(setAlert({
    //                 text: "Registrado com sucesso.",
    //                 type: "sucess"
    //             }));

    //         } catch (error) {
    //             dispatch(setAlert({
    //                 text: error?.message || "Erro ao criar organização.",
    //                 type: "error"
    //             }));
    //         } finally {
    //             setLoading(false);
    //         }
    //     })();
    // }, []);
    function handlerSetSericesInContext() {
        dispatch(setServicesCategoryAndType({
            categoryId: data.category_id,
            typeId: data.id,
            data: getServicesByCategoryAndTypeContext() || data.services
        }));
    }

    function getServicesByCategoryAndTypeContext() {
        const services = servicesCategoryAndType[`CategoryId${data.category_id}TypeId${data.id}`];
        return services;
    }

    useEffect(() => {
        handlerSetSericesInContext();
    }, []);


    useEffect(() => {
        const services = getServicesByCategoryAndTypeContext();
        setServices(services);
    }, [servicesCategoryAndType]);

    const Item = ({ data: { item } }) => {

        return (
            <View style={{ padding: 20, width: 300 }}>
                <Card style={{ position: 'relative', overflow: 'hidden' }}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <View style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row-reverse' }}>
                                <View style={{ backgroundColor: "#fff", padding: 10, borderBottomLeftRadius: 20 }}>
                                    <TextPoppins fontWeight={600}>{formatToBRL(item?.price || '0')}</TextPoppins>
                                </View>
                            </View>

                        </View>
                        <View style={{ backgroundColor: "#fff", padding: 10 }}>
                            <TextPoppins fontWeight={600}>{item?.title}</TextPoppins>
                        </View>
                    </View>
                </Card>
            </View>
        )
    };

    return (
        !!services?.length &&

        <>
            <View style={{ paddingHorizontal: 20 }}>
                <TextPoppins fontWeight={600}>{data?.title}</TextPoppins>
            </View>
            <FlatList
                data={services}
                renderItem={(data) => <Item data={data} />}
                keyExtractor={item => item.id}
                // style={{ paddingBottom: 40 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}