import React from "react";
import VerifyCode from "../SubSteps/VerifyCode";
import { useDispatch, useSelector } from 'react-redux';
import { Text } from "react-native-paper";

export default function VerifyCodeWhatsApp() {

    const loginContext = useSelector(state => state.loginContext);

    const SubTitle = () => (<>Enviamos um código de verificação para o número: <Text style={{ color: "#33a4da" }}> {loginContext.phone || ''}</Text> ,verifique o seu WhatsApp.</>);

    return (
        <VerifyCode subTitle={<SubTitle />} />
    )
}