import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export function Title({ children }) {
    return (
        <Text variant="headlineLarge" style={styles.font}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'Poppins_600SemiBold',
        letterSpacing: -1
    }
});
