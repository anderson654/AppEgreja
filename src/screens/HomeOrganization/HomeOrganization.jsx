import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from "../../context/reducers/modals";
import ProductsAndServices from "../ProductsAndServices/ProductsAndServices";

export default function HomeOrganization() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (!user.organization) {
            dispatch(openModal('MODAL_REGISTER_COMPANY'));
        }
    }, []);

    return (
        <ProductsAndServices/>
    );
}