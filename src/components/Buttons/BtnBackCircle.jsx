import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function BtnBackCircle({ onPress, icon="keyboard-arrow-left" }) {

    const handlerOnPress = () => {
        if (typeof onPress === 'function') {
            onPress();
        }
    }

    return (
        <TouchableOpacity onPress={handlerOnPress}>
            <View style={styles.container}>
                <MaterialIcons name={icon} size={32} color="#000" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor:'#fff'
    }
});
