import React from "react";
import { TextInput } from "react-native-paper";

export default function DefaultInput({ mode = 'flat', label = 'E-mail', onChangeText, autoCorrect = false, mb = true, styles, icon = "shopping-search", error }) {

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
            style={{ ...styles }}
            autoCorrect={autoCorrect}
            right={<TextInput.Icon onPress={() => { }} forceTextInputFocus={false} icon={icon} />}
            error={error}
        />
    );
}
