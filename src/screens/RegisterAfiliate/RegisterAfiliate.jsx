import React, { useState } from "react";
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
import { createNewOrganization } from "../../apis/EgrejaApi/egreja";
import InputCnpj from "../../components/Inputs/InputCnpj";
import InputData from "../../components/Inputs/InputData";
import InputListRadioOptions from "../../components/Inputs/InputListRadioOptions";
import { estadosComMunicipios } from "../../constants/estados";

export default function RegisterAfiliate() {

    const [validate, setValidate] = useState({});
    const [form, setForm] = useState({});
    const [selectedEstado, setSelectedEstado] = useState(null);
    const [selectedMunicipio, setSelectedMunicipio] = useState(null);
    const [loading, setLoading] = useState(false);
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

    function handlerSetState(obj){
        setSelectedEstado(obj);
        handlerSetForm(obj.sigla, 'state_registration');
    }

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
                <InputListRadioOptions  nameKey='estado' valueKey='sigla' value={selectedEstado?.estado} data={estadosComMunicipios} label="Estado" onChangeObject={handlerSetState} error={validate?.state_registration} />
                <InputListRadioOptions value={selectedMunicipio} label="Municipio" onChangeText={(text) => handlerSetForm(text, 'municipal_registration')} error={validate?.municipal_registration} disabled={true}/>
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