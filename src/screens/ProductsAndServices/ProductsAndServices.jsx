import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { View } from "react-native";
import KeyBoardView from "../../components/Views/KeyBoardView";
import ArrowBack from "../../components/Buttons/ArrowBack";
import { Space20 } from "../../components/SpacesLine/Spaces";
import { Title } from "../../components/Typograph/Typographs";
import DefaultInput from "../../components/Inputs/DefaultInput";
import DefaultButton from "../../components/Buttons/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import productsAndServicesYup from "../../validations/yup/productsAndServicesYup";
import { setAlert } from "../../context/reducers/alertSnackBar";
import { createNewProductAndService } from "../../apis/EgrejaApi/egreja";
import InputPrice from "../../components/Inputs/InputPrice";
import InputListRadioOptions from "../../components/Inputs/InputListRadioOptions";
import { getServiceCategories } from "../../apis/EgrejaApi/egreja";
import { setCategories } from "../../context/reducers/servicesAndCategories";

export default function ProductsAndServices() {

    const [validate, setValidate] = useState({});
    const [form, setForm] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTypeService, setSelectedTypeService] = useState(null);
    const [loading, setLoading] = useState(false);
    const organization = useSelector(state => state.user.user.organization);
    const servicesAndCategories = useSelector(state => state.servicesAndCategories);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        if (!servicesAndCategories.categories) {
            (async () => {
                try {
                    const response = await getServiceCategories();
                    dispatch(setCategories(response.data.categories));
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }, []);

    async function handlerSaveProductsAndService() {
        try {
            setLoading(true);
            const errors = await hasErrors();
            if (errors) {
                throw new Error("Complete os dados.")
            }
            const response = await createNewProductAndService(form);

            dispatch(setAlert({
                text: "Registrado com sucesso.",
                type: "sucess"
            }));

        } catch (error) {
            dispatch(setAlert({
                text: error?.message || "Erro ao criar organização.",
                type: "error"
            }));
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    const hasErrors = async () => {
        const validate = await productsAndServicesYup(form);
        setValidate(validate);
        return validate !== null;
    };

    function handlerSetForm(value, inputName) {
        setForm({
            ...form,
            organization_id: organization.id,
            [inputName]: value
        });
    }

    function handlerSetCategory(obj){
        handlerSetForm(obj.id, 'category_id');
        setSelectedCategory(obj);
        setNullTypeServices();
    }

    function handlerOnChangeTypeService(obj){
        handlerSetForm(obj.id, 'type_id');
        setSelectedTypeService(obj);
    }

    function setNullTypeServices(){
        handlerSetForm(null, 'type_id');
        setSelectedTypeService(null);
    }

    return (
        servicesAndCategories.categories &&
        <View style={{ flex: 1, padding: 20 }}>
            <KeyBoardView>
                <ArrowBack onPress={() => navigation.goBack()} />
                <Space20 />
                <Title>Registre um serviço ou produto.</Title>
                <Space20 />
                <DefaultInput label="Titulo" onChangeText={(text) => handlerSetForm(text, 'title')} error={validate?.title} />
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flex: 1, marginEnd: 10 }} >
                        <InputPrice label="Valor" onChangeText={(text) => handlerSetForm(text, 'price')} error={validate?.price} />
                    </View>
                    <View style={{ flex: 1, marginStart: 10 }}>
                        <InputPrice label="Desconto" onChangeText={(text) => handlerSetForm(text, 'discount')} error={validate?.discount} icon={'cash-minus'} />
                    </View>
                </View>
                <InputListRadioOptions value={selectedCategory?.title} nameKey='title' valueKey='id' data={servicesAndCategories.categories} label="Categoria do serviço" onChangeObject={handlerSetCategory} error={validate?.category_id} />
                <InputListRadioOptions value={selectedTypeService?.title} nameKey='title' valueKey='id' data={selectedCategory?.service_types} label="Tipo do serviço" onChangeObject={handlerOnChangeTypeService} error={validate?.type_id} disabled={!selectedCategory}/>
                <DefaultInput label="Descrição" onChangeText={(text) => handlerSetForm(text, 'description')} error={validate?.description} />
                <Space20 />
                <DefaultButton title="Continuar" onPress={handlerSaveProductsAndService} loading={loading} />
                <Space20 />
                <Space20 />
            </KeyBoardView>
        </View>
    )
}