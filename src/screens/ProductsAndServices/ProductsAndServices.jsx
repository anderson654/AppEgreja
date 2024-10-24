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
import { createNewProductAndService, updateNewProductAndService } from "../../apis/EgrejaApi/egreja";
import InputPrice from "../../components/Inputs/InputPrice";
import InputListRadioOptions from "../../components/Inputs/InputListRadioOptions";
import { getServiceCategories } from "../../apis/EgrejaApi/egreja";
import { setCategories } from "../../context/reducers/servicesAndCategories";
import { setServicesCategoryAndType } from "../../context/reducers/cacheServices";
import { mergeArrays } from "../../utils/arraysManipulate";
import { pasTitle, pasBtnTitle, updateItemInArray } from "../../utils/productAndServicesUtils";
import { formatToBRL } from "../../utils/formatValues";

export default function ProductsAndServices({ route: { params } }) {

    const [validate, setValidate] = useState({});
    const [form, setForm] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTypeService, setSelectedTypeService] = useState(null);
    const [loading, setLoading] = useState(false);
    const organization = useSelector(state => state.user.user.organization);
    const servicesAndCategories = useSelector(state => state.servicesAndCategories);
    const cacheServices = useSelector(state => state.cacheServices);
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

    useEffect(() => {
        if (params?.action === 'PUT') {
            const categorias = servicesAndCategories.categories;
            const { category_id, type_id } = params.data;
            const findCategory = categorias.find(objeto => objeto.id === category_id);
            const findTypeService = findCategory.c_service_types.find(objeto => objeto.id === type_id);
            handlerSetCategory(findCategory);
            handlerOnChangeTypeService(findTypeService);
            setInitUpdateForm(params.data);
        }
    }, [params?.data]);

    async function handlerSaveProductsAndService() {
        if (params?.action === 'PUT') {
            await update();
            return;
        }
        await save();
    }

    function setInitUpdateForm(obj) {
        setForm({
            ...form,
            id: obj.id,
            organization_id: organization.id,
            title: obj.title,
            price: obj.price,
            discount: obj.discount,
            category_id: obj.category_id,
            type_id: obj.type_id,
            description: obj.description
        });
    }


    async function save() {
        try {
            setLoading(true);
            const errors = await hasErrors();
            if (errors) {
                throw new Error("Complete os dados.")
            }

            const response = await createNewProductAndService(form);
            handlerSetCacheServices(response.data.service);

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

    async function update() {
        try {
            setLoading(true);
            const errors = await hasErrors();
            if (errors) {
                throw new Error("Complete os dados.")
            }

            const response = await updateNewProductAndService(form);
            handlerUpdateServiceInCache(response.data.service);

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
        console.log(validate);
        setValidate(validate);
        return validate !== null;
    };

    function handlerSetForm(value, inputName) {
        setForm({
            ...form,
            organization_id: organization.id,
            [inputName]: value
        });

        return {
            ...form,
            organization_id: organization.id,
            [inputName]: value
        };
    }

    function handlerSetCategory(obj) {
        const newForm = handlerSetForm(obj.id, 'category_id');
        setSelectedCategory(obj);
        setNullTypeServices(newForm);
    }

    function handlerOnChangeTypeService(obj) {
        handlerSetForm(obj.id, 'type_id');
        setSelectedTypeService(obj);
    }

    function setNullTypeServices(form) {
        setForm({ ...form, type_id: null })
        setSelectedTypeService(null);
    }

    function handlerSetCacheServices(newService) {

        const objectSerices = cacheServices.servicesCategoryAndType[`CategoryId${form.category_id}TypeId${form.type_id}`];

        dispatch(setServicesCategoryAndType({
            categoryId: form.category_id,
            typeId: form.type_id,
            data: {
                ...objectSerices,
                current_page: 1,
                data: [newService, ...objectSerices.data.slice(0, 4)]
            }
        }));
    }

    function handlerUpdateServiceInCache(updateService) {
        const objectSerices = cacheServices.servicesCategoryAndType[`CategoryId${form.category_id}TypeId${form.type_id}`];
        const newArrayItens = updateItemInArray(updateService, objectSerices.data.slice(0, 5));
        dispatch(setServicesCategoryAndType({
            categoryId: form.category_id,
            typeId: form.type_id,
            data: {
                ...objectSerices,
                current_page: 1,
                data: newArrayItens
            }
        }));
    }

    return (
        servicesAndCategories.categories &&
        <View style={{ flex: 1, padding: 20 }}>
            <KeyBoardView>
                <ArrowBack onPress={() => navigation.goBack()} />
                <Space20 />
                <Title>{pasTitle(params?.action)}</Title>
                <Space20 />
                <DefaultInput initialValue={params?.data?.title} label="Titulo" onChangeText={(text) => handlerSetForm(text, 'title')} error={validate?.title} />
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flex: 1, marginEnd: 10 }} >
                        <InputPrice initialValue={params?.data?.price && formatToBRL(params?.data?.price)} label="Valor" onChangeText={(text) => handlerSetForm(text, 'price')} error={validate?.price} />
                    </View>
                    <View style={{ flex: 1, marginStart: 10 }}>
                        <InputPrice initialValue={params?.data?.discount && formatToBRL(params?.data?.discount)} label="Desconto" onChangeText={(text) => handlerSetForm(text, 'discount')} error={validate?.discount} icon={'cash-minus'} />
                    </View>
                </View>

                <InputListRadioOptions value={selectedCategory?.title} nameKey='title' valueKey='id' data={servicesAndCategories.categories} label="Categoria do serviço" onChangeObject={handlerSetCategory} error={validate?.category_id} disabled={params?.action == 'PUT'} />
                <InputListRadioOptions value={selectedTypeService?.title} nameKey='title' valueKey='id' data={selectedCategory?.c_service_types} label="Tipo do serviço" onChangeObject={handlerOnChangeTypeService} error={validate?.type_id} disabled={!selectedCategory || params?.action == 'PUT'} />

                <DefaultInput initialValue={params?.data?.description} label="Descrição" onChangeText={(text) => handlerSetForm(text, 'description')} error={validate?.description} />
                <Space20 />
                <DefaultButton title={pasBtnTitle(params?.action)} onPress={handlerSaveProductsAndService} loading={loading} />
                <Space20 />
                <Space20 />
            </KeyBoardView>
        </View>
    )
}