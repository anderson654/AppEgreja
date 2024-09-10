import React from "react";
import { TextInput } from "react-native-paper";
import { formatWithMask } from 'react-native-mask-input';
import {  maskCpf } from "../../utils/customMasks";

export default function InputCpf({ mode = 'flat', label = "none", onChangeText, error, initialValue = "" }) {

    const [text, setText] = React.useState(initialValue);

    const handleChange = (currentText) => {

        // Utiliza formatWithMask para aplicar a máscara, remover a máscara e ofuscar
        const { masked, unmasked } = formatWithMask({
            text: currentText,
            mask: maskCpf,
        });

        setText(masked);

        if (typeof onChangeText === 'function') {
            onChangeText(unmasked);
        }
    };


    return (
        <TextInput
            label={label}
            value={text}
            onChangeText={text => handleChange(text)}
            mode={mode}
            error={error}
            inputMode="numeric"
        />
    );
}
