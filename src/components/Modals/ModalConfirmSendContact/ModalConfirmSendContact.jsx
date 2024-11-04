import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CardModal from "../DefaultModal/components/CardModal";
import { View } from "react-native";
import TextPoppins from "../../Typograph/TextPoppins";
import { Space20 } from "../../SpacesLine/Spaces";
import DefaultButton from "../../Buttons/DefaultButton";
import CloseBtn from "../../Buttons/CloseBtn";
import { Pressable } from "react-native";
import { closeModal } from "../../../context/reducers/modals";
import { setAlert } from "../../../context/reducers/alertSnackBar";
import { createLead } from "../../../apis/EgrejaApi/egreja";

export default function ModalConfirmSendContact() {

    const service = useSelector(state => state.modals.data);
    const [loading, setLoading] = useState();
    const dispatch = useDispatch();

    async function handlerContact() {
        //setar e abrir o modal
        setLoading(true);
        try {
            const response = await createLead({ service_id: service.id });
            dispatch(setAlert({
                type: 'sucess',
                text: 'Contato enviado.'
            }));

        } catch (error) {
            dispatch(setAlert({
                type: 'error',
                text: error?.response?.data?.message || 'Erro ao registrar usuário.'
            }));
        } finally {
            setLoading(false);
            dispatch(closeModal());
        }
    }

    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <CardModal>
                <Pressable onPress={() => dispatch(closeModal())} style={{ flexDirection: "row-reverse", width: '100%', marginTop: -20, marginRight: -40 }}>
                    <CloseBtn />
                </Pressable>
                <TextPoppins variant='titleLarge' fontWeight={700}>Enviar contato!</TextPoppins>
                <Space20 />
                <TextPoppins variant='titleMedium' fontWeight={700} color="#949494" textAlign="center">Informando que o seu contato será enviado ao vendedor, e que o mesmo entrar em contato o mais breve possível.</TextPoppins>
                <Space20 />
                <DefaultButton onPress={handlerContact} title="Autorizo o envio do meu contato" loading={loading} />
            </CardModal>
        </View>
    );
}