import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from "../../context/reducers/alertSnackBar";
import { StyleSheet, View } from "react-native";
import { Snackbar, Text } from "react-native-paper";

export default function SnackbarPaper() {

    const contextSnackBar = useSelector(state => state.alertSnackBar);
    const dispatch = useDispatch();

    const colorSnack = () => {
        switch (contextSnackBar.type) {
            case 'sucess':
                return {
                    color: '#14b8a6'
                }
            case 'warning':
                return {
                    color: '#fed7aa'
                }
            case 'error':
                return {
                    color: 'rgb(254, 202, 202)'
                }

            default:
                break;
        }
    }

    const snackStyle = {
        ...styles.border,
        borderColor: colorSnack().color

    }

    return (
        <Snackbar
            style={snackStyle}
            visible={contextSnackBar.status}
            onDismiss={() => dispatch(setStatus(false))}
            duration={4000}
            action={{
                label: 'FECHAR',
                onPress: () => {
                    // Do something
                },
            }}>
            <Text variant="bodyLarge">{contextSnackBar.text}</Text>
        </Snackbar>
    )
}

const styles = StyleSheet.create({
    border: {
        borderLeftWidth: 40,
    }
});