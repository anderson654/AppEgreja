import React from "react";
import { HelperText, TextInput } from "react-native-paper";
import { formatWithMask, Masks } from 'react-native-mask-input';
import { filterMaskText } from "../../utils/filterMaskedValue";
import { maskPhone } from "../../utils/customMasks";
import { ajustValueReturn } from "../../utils/ajustValuePrice";

export default function InputPrice({ mode = 'flat', label = "none", onChangeText, error, initialValue = "", icon = 'cash' }) {

    const [text, setText] = React.useState(initialValue);

    const handleChange = (currentText) => {

        // Utiliza formatWithMask para aplicar a máscara, remover a máscara e ofuscar
        const { masked, unmasked } = formatWithMask({
            text: currentText,
            mask: Masks.BRL_CURRENCY,
        });

        setText(masked);
        
        if (typeof onChangeText === 'function') {
            onChangeText(ajustValueReturn(masked));
        }
    };


    return (
        <>
            <TextInput
                label={label}
                value={text}
                onChangeText={text => handleChange(text)}
                mode={mode}
                right={<TextInput.Icon forceTextInputFocus={true} icon={icon} />}
                error={error}
                inputMode="numeric"
            />
            <HelperText type="error" visible={!!error || error != ''}>
                {error}
            </HelperText>
        </>
    );
}
