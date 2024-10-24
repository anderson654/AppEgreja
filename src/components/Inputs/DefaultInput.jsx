import React from "react";
import { HelperText, TextInput } from "react-native-paper";

export default function DefaultInput({ mode = 'flat', label = 'E-mail', onChangeText, autoCorrect = false, mb = true, styles, icon = "", error, initialValue = "" }) {

    const [text, setText] = React.useState(initialValue); //Esse useState deve sair daqui para ser recebido externamente;

    const handlerText = (text) => {
        setText(text);
        if (typeof onChangeText === 'function') {
            onChangeText(text);
        }
    }

    return (
        <>
            <TextInput
                label={label}
                value={text}
                onChangeText={text => handlerText(text)}
                mode={mode}
                style={{ ...styles }}
                autoCorrect={autoCorrect}
                right={<TextInput.Icon onPress={() => { }} forceTextInputFocus={false} icon={icon} />}
                error={error}
            />
            <HelperText type="error" visible={!!error || error != ''}>
                {error}
            </HelperText>
        </>
    );
}
