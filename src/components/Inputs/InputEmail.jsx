import React from "react";
import { TextInput } from "react-native-paper";

export default function InputEmail({ mode = 'flat', onChangeText }) {

    const [text, setText] = React.useState("");

    const handlerText = (text) => {

        setText(text.toLowerCase());

        if (typeof onChangeText === 'function') {
            onChangeText(text.toLowerCase());
        }

    }

    return (
        <TextInput
            label={'E-mail'}
            value={text}
            onChangeText={text => handlerText(text)}
            mode={mode}
            style={{ marginBottom: 20 }}
            autoCorrect={false}
        />
    );
}
