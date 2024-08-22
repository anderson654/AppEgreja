import React from "react";
import { StyleSheet } from "react-native";
import { Button, useTheme, Surface } from 'react-native-paper';

export default function DefaultButton({ mb = false, mode = 'contained', title = 'Buttom', shadow = 1, onPress = () => { } }) {

    const theme = useTheme();

    const styleContainer = {
        ...styles.container,
        borderWidth: 3,
        borderColor: theme.colors.primary
    }

    const surfaceStyle = {
        ...styles.surfaceStyle,
        marginBottom: mb ? 20 : 0,
    }


    return (
        <Surface style={surfaceStyle} elevation={shadow}>
            <Button style={styleContainer} contentStyle={styles.contentContainer} icon="" mode={mode} onPress={onPress} labelStyle={styles.fontStyle}>
                {title || ''}
            </Button>
        </Surface>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
    },
    contentContainer: {
        height: 60
    },
    fontStyle: {
        fontFamily: 'Poppins_600SemiBold'
    },
    surfaceStyle: {
        borderRadius: 8,
    }
});