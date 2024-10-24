import React from "react";
import { HelperText, TextInput } from "react-native-paper";

export default function InputEmail({ mode = 'flat', onChangeText, error, initialValue = "" }) {

    const [text, setText] = React.useState(initialValue);

    const handlerText = (text) => {

        setText(text.toLowerCase());

        if (typeof onChangeText === 'function') {
            onChangeText(text.toLowerCase());
        }

    }

    return (
        <>
            <TextInput
                label={'E-mail'}
                value={text}
                onChangeText={text => handlerText(text)}
                mode={mode}
                autoCorrect={false}
                right={<TextInput.Icon onPress={() => { }} forceTextInputFocus={false} icon={'email'} />}
                error={error}
                autoCapitalize="none"
            />
            <HelperText type="error" visible={!!error || error != ''}>
                {error}
            </HelperText>
        </>
    );
}
