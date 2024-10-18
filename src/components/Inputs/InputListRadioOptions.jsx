import React, { useState } from "react";
import { HelperText, TextInput } from "react-native-paper";
import RadioList from "../RadioList/RadioList";
import { TouchableOpacity } from "react-native";

export default function InputListRadioOptions({ data, value, nameKey, valueKey, mode = 'flat', label = 'E-mail', onChangeObject, autoCorrect = false, mb = true, styles, icon = 'chevron-down', error, disabled = false }) {
    const [text, setText] = useState("");
    const [modal, setModal] = useState(false);

    const handlerText = (value) => {
        const itemSelected = getItemSelected(value);
        setText(itemSelected.title);
        if (typeof onChangeObject === 'function') {
            onChangeObject(itemSelected);
        }
    }


    function getItemSelected(value) {
        const user = data.find(obj => obj.id === value);
        return user;
    }

    return (
        <>
            <TouchableOpacity onPress={() => setModal(true)}>
                <TextInput
                    label={label}
                    value={value}
                    onChangeText={text => handlerText(text)}
                    mode={mode}
                    style={{ ...styles }}
                    autoCorrect={autoCorrect}
                    right={<TextInput.Icon onPress={() => { }} forceTextInputFocus={false} icon={icon} />}
                    error={error}
                    editable={false}
                    disabled={disabled}
                />
            </TouchableOpacity>
            <HelperText type="error" visible={!!error || error != ''}>
                {error}
            </HelperText>
            <RadioList data={data} nameKey={nameKey} valueKey={valueKey} isVisible={modal} onClose={() => setModal(false)} onPress={handlerText} />
        </>
    );
}
