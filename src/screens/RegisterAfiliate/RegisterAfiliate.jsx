import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { View } from "react-native";
import DefaultInput from "../../components/Inputs/DefaultInput";
import { Title } from "../../components/Typograph/Typographs";
import { Space20 } from "../../components/SpacesLine/Spaces";
import InputEmail from "../../components/Inputs/InputEmail";
import { Text } from "react-native-paper";
import KeyBoardView from "../../components/Views/KeyBoardView";
import DefaultButton from "../../components/Buttons/DefaultButton";
import validateNewOrganizationYup from "../../validations/yup/validateNewOrganizationYup";
import { setAlert } from "../../context/reducers/alertSnackBar";
import InputPhone from "../../components/Inputs/InputPhone";
import { createNewOrganization, getStates, getStateAndCities } from "../../apis/EgrejaApi/egreja";
import InputCnpj from "../../components/Inputs/InputCnpj";
import InputData from "../../components/Inputs/InputData";
import InputListRadioOptions from "../../components/Inputs/InputListRadioOptions";
import { estadosComMunicipios } from "../../constants/estados";
import { setStates, setCities } from "../../context/reducers/defaultConsts";

export default function RegisterAfiliate() {

    const [validate, setValidate] = useState({});
    const [form, setForm] = useState({});
    const [selectedEstado, setSelectedEstado] = useState(null);
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(false);
    const defaultConsts = useSelector(state => state.defaultConsts);
    const dispatch = useDispatch();

    async function handlerNewOrganization() {
        try {
            setLoading(true);
            const errors = await hasErrors();
            if (errors) {
                throw new Error("Complete os dados.")
            }
            const response = await createNewOrganization(form);

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
    };

    const hasErrors = async () => {
        const validate = await validateNewOrganizationYup(form);
        setValidate(validate);
        return validate !== null;
    };

    function handlerSetForm(value, inputName) {
        setForm({
            ...form,
            [inputName]: value
        });
    }

    function handlerSetState(obj) {
        setSelectedEstado(obj);
        handlerSetForm(obj.UF, 'state_registration');
        fetchSetCities(obj.id);
        setCity(null);
    }

    function handlerSetCity(obj) {
        setCity(obj);
        handlerSetForm(obj.title, 'municipal_registration');
    }


    async function fetchSetCities(id) {
        try {
            const response = await getStateAndCities(id);
            dispatch(setCities(response.data.state.cities));
        } catch (error) {
            console.log(error);
        }
    }

    async function handlerSetStates() {
        if (defaultConsts.states != null) {
            return;
        }
        try {
            const response = await getStates();
            dispatch(setStates(response.data.states));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handlerSetStates();
    }, []);
    
    return (
        <KeyBoardView>
            <View style={{ padding: 20 }}>
                <Title>Registre sua empresa!</Title>
                <Space20 />
                <Text variant="bodyLarge" style={{ color: "#757575" }}>Por que pedimos os dados da sua empresa?</Text>
                <Space20 />
                <DefaultInput label="Razão social" onChangeText={(text) => handlerSetForm(text, 'razao_social')} error={validate?.razao_social} />
                <DefaultInput label="Nome fantasia" onChangeText={(text) => handlerSetForm(text, 'fantasy_name')} error={validate?.fantasy_name} />
                <InputCnpj label="CNPJ" onChangeText={(text) => handlerSetForm(text, 'cnpj')} error={validate?.cnpj} />
                <DefaultInput label="Titulo" onChangeText={(text) => handlerSetForm(text, 'title')} error={validate?.title} />
                <DefaultInput label="CNAE" onChangeText={(text) => handlerSetForm(text, 'main_CNAE')} error={validate?.main_CNAE} />
                {defaultConsts.states &&
                    <InputListRadioOptions nameKey='title' valueKey='UF' value={selectedEstado?.title} data={defaultConsts.states} label="Estado" onChangeObject={handlerSetState} error={validate?.state_registration} />
                }
                <InputListRadioOptions nameKey='title' valueKey='id' value={city?.title} label="Municipio" data={defaultConsts.cities} onChangeObject={handlerSetCity} error={validate?.municipal_registration} disabled={!selectedEstado} />
                <InputEmail label="E-mail" onChangeText={(text) => handlerSetForm(text, 'email')} error={validate?.email} />
                <InputData label="Data de abertura" onChangeText={(text) => handlerSetForm(text, 'cnpj_opening_date')} error={validate?.cnpj_opening_date} />
                <InputPhone label="Telefone" onChangeText={(text) => handlerSetForm(text, 'phone')} error={validate?.phone} />
                <DefaultInput label="WebSite" onChangeText={(text) => handlerSetForm(text, 'website')} error={validate?.website} />
                <DefaultInput label="Descrição" onChangeText={(text) => handlerSetForm(text, 'description')} error={validate?.description} />
                <DefaultButton title="Registrar-se" onPress={handlerNewOrganization} loading={loading} />
                <Space20 />
                <Space20 />
            </View>
        </KeyBoardView>
    );
}