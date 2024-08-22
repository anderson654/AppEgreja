import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function ArrowBack({ onPress }) {

    const handlerOnPress = () => {
        if (typeof onPress === 'function') {
            onPress();
        }
    }

    return (
        <TouchableOpacity onPress={handlerOnPress}>
            <View style={styles.container}>
                <MaterialIcons name="keyboard-arrow-left" size={32} color="#000" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#b9b9b9"
    }
});
