import React from "react";
import { TextInput } from "react-native-paper";

export default function DefaultInput({ mode = 'flat', label = 'E-mail', onChangeText, autoCorrect = false, mb = true, styles }) {

    const [text, setText] = React.useState("");

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
            style={{ marginBottom: 20, ...styles }}
            autoCorrect={autoCorrect}
            right={<TextInput.Icon onPress={() => { }} forceTextInputFocus={false} icon={'shopping-search'} />}
        />
    );
}
