import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { View } from "react-native";
import { openModal } from "../../context/reducers/modals";

export default function HomeOrganization() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (!user.organization) {
            dispatch(openModal('MODAL_REGISTER_COMPANY'));
        }
    }, []);

    return (
        <View style={{ flex: 1 }}></View>
    );
}