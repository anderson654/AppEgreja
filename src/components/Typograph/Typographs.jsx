import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export function Title({ children, fontFamily }) {

    const styleTitle = {
        ...styles.font,
        fontFamily: fontFamily || 'Poppins_600SemiBold',
        // color: 'rgb(87,87,87)'
    }

    return (
        <Text variant="headlineLarge" style={styleTitle}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    font: {
        letterSpacing: -1
    }
});
