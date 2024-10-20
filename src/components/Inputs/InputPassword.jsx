import React from "react";
import { HelperText, TextInput } from "react-native-paper";
import { formatWithMask, Masks } from 'react-native-mask-input';
import { filterMaskText } from "../../utils/filterMaskedValue";
import { maskPassword } from "../../utils/customMasks";

export default function InputPassword({ mode = 'flat', label = "none", onChangeText, error }) {

    const [text, setText] = React.useState("");
    const [textObfuscate, setTextObfuscated] = React.useState("");
    const [textUnMask, setTextUnMask] = React.useState("");
    const [inputIsVisible, setInputIsVisible] = React.useState(false);
    const [iconName, setIconName] = React.useState('eye-off');

    const handleChange = (currentText) => {

        // Utiliza formatWithMask para aplicar a máscara, remover a máscara e ofuscar
        const { masked, unmasked, obfuscated } = formatWithMask({
            text: filterMaskText(text, currentText, inputIsVisible),
            mask: maskPassword,
            obfuscationCharacter: '*',
        });

        setText(masked);
        setTextUnMask(unmasked);
        setTextObfuscated(obfuscated);

        if (typeof onChangeText === 'function') {
            onChangeText(unmasked);
        }

        // console.log('Masked:', masked);         // Ex: "1234 5678 9012 3456"
        // console.log('Unmasked:', unmasked);     // Ex: "1234567890123456"
        // console.log('Obfuscated:', obfuscated); // Ex: "---- ---- ---- 3456"
    };


    const handlerChangeIcon = () => {
        setInputIsVisible(!inputIsVisible);
        !inputIsVisible ? setIconName('eye') : setIconName('eye-off');
    }

    return (
        <>
            <TextInput
                label={label}
                value={inputIsVisible ? text : textObfuscate}
                onChangeText={text => handleChange(text)}
                mode={mode}
                right={<TextInput.Icon onPress={handlerChangeIcon} forceTextInputFocus={false} icon={iconName} />}
                error={error}
            />
            <HelperText type="error" visible={!!error || error != ''}>
                {error}
            </HelperText>
        </>
    );
}
