import React from "react";
import { TextInput } from "react-native-paper";

export default function InputName({ mode = 'flat', label = 'E-mail', onChangeText, autoCorrect = false, styles, error, initialValue = "" }) {

    const [text, setText] = React.useState(initialValue);

    const handlerText = (text) => {

        setText(text);

        if (typeof onChangeText === 'function') {
            onChangeText(text);
        }

    }

    return (
        <TextInput
            label={label}
            value={text}
            onChangeText={text => handlerText(text)}
            mode={mode}
            style={{ ...styles }}
            autoCorrect={autoCorrect}
            right={<TextInput.Icon onPress={() => { }} forceTextInputFocus={false} />}
            error={error}
            autoCapitalize="words"
        />
    );
}
