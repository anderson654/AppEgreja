import React from "react";
import { TextInput } from "react-native-paper";
import { formatWithMask } from 'react-native-mask-input';
import { filterMaskText } from "../../utils/filterMaskedValue";
import { maskPhone } from "../../utils/customMasks";

export default function InputPhone({ mode = 'flat', label = "none", onChangeText, error }) {

    const [text, setText] = React.useState("");

    const handleChange = (currentText) => {

        // Utiliza formatWithMask para aplicar a máscara, remover a máscara e ofuscar
        const { masked, unmasked } = formatWithMask({
            text: currentText,
            mask: maskPhone,
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
            right={<TextInput.Icon forceTextInputFocus={true} icon={"phone"} />}
            error={error}
            inputMode="numeric"
        />
    );
}
