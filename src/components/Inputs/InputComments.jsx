import React from "react";
import { HelperText, TextInput } from "react-native-paper";

export default function InputComments({ mode = 'flat', label = 'Deixe seu comentario', onChangeText, autoCorrect = false, mb = true, styles, icon = "", error, value = "" }) {

    const [text, setText] = React.useState(value); //Esse useState deve sair daqui para ser recebido externamente;

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
                value={value}
                onChangeText={text => handlerText(text)}
                mode={mode}
                style={{ ...styles }}
                autoCorrect={autoCorrect}
                right={<TextInput.Icon onPress={() => { }} forceTextInputFocus={false} icon={icon} />}
                error={error}
                multiline={true}
            />
            <HelperText type="error" visible={!!error || error != ''}>
                {error}
            </HelperText>
        </>
    );
}
