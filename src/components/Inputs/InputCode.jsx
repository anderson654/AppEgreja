import React from "react";
import { TextInput } from "react-native-paper";

export default function InputCode({ mode = 'flat', onChangeText, error }) {

    const [text, setText] = React.useState("");

    const handlerText = (text) => {

        setText(text.toLowerCase());

        if (typeof onChangeText === 'function') {
            onChangeText(text.toLowerCase());
        }

    }

    return (
        <TextInput
            label={'Digite aqui seu código'}
            value={text}
            onChangeText={text => handlerText(text)}
            mode={mode}
            style={{ marginBottom: 20 }}
            autoCorrect={false}
            inputMode="numeric"
            maxLength={6}
            error={error}
        />
    );
}
