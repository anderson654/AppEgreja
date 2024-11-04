import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { TouchableWithoutFeedback, Pressable, Modal, StyleSheet, Text, View, Alert } from "react-native";
import { setStatusModal } from "../../../context/reducers/modals";
import CardModal from "./components/CardModal";
import DefaultView from "../../Views/DefaultView";
import ModalRegisterNewCompany from "../ModalRegisterNewCompany/ModalRegisterNewCompany";
import ModalConfirmSendContact from "../ModalConfirmSendContact/ModalConfirmSendContact";


export default function DefaultModal() {
    const [modalVisible, setModalVisible] = useState(true);
    const reduxModals = useSelector(state => state.modals);
    const dispatch = useDispatch();
    //import com uma cost todos os modais disponiveis


    const OBJECT_MODALS = Object.freeze({
        TEST_MODAL: <CardModal />,
        MODAL_REGISTER_COMPANY: <ModalRegisterNewCompany />,
        MODAL_CONFIRM_CONTACT: <ModalConfirmSendContact />,
    });


    return (
        <Modal
            statusBarTranslucent={false}
            animationType="slide"
            transparent={true}
            visible={reduxModals.statusModal}
            onRequestClose={() => {
                dispatch(setStatusModal(false));
            }}
        >
            <Pressable style={{flex: 1}} onPress={() =>  dispatch(setStatusModal(false))}>
                <View style={{ flex: 1 }} background="rgba(0, 0, 0, 0.5)">
                    <Pressable style={{flex: 1}} onPress={() => { }}>
                        <DefaultView spaceTopBar={true}>
                            {OBJECT_MODALS[reduxModals.selectedModal] || <></>}
                        </DefaultView>
                    </Pressable>
                </View>
            </Pressable>
        </Modal>
    );
}