import React from "react";
import { HelperText, TextInput } from "react-native-paper";
import { formatWithMask } from 'react-native-mask-input';
import { maskData } from "../../utils/customMasks";
import { formatDataToBack } from "../../utils/formatValues";

export default function InputData({ mode = 'flat', label = "none", onChangeText, error, initialValue = "" }) {

    const [text, setText] = React.useState(initialValue);

    const handleChange = (currentText) => {

        // Utiliza formatWithMask para aplicar a máscara, remover a máscara e ofuscar
        const { masked, unmasked } = formatWithMask({
            text: currentText,
            mask: maskData,
        });

        setText(masked);

        if (typeof onChangeText === 'function') {
            onChangeText(formatDataToBack(unmasked));
        }
    };


    return (
        <>
            <TextInput
                label={label}
                value={text}
                onChangeText={text => handleChange(text)}
                mode={mode}
                right={<TextInput.Icon forceTextInputFocus={true} icon={"calendar-month-outline"} />}
                error={error}
                inputMode="numeric"
            />
            <HelperText type="error" visible={!!error || error != ''}>
                {error}
            </HelperText>
        </>
    );
}
