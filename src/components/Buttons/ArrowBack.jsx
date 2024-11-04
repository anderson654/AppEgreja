import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function ArrowBack({ onPress, icon="keyboard-arrow-left" }) {

    const handlerOnPress = () => {
        if (typeof onPress === 'function') {
            onPress();
        }
    }

    return (
        <Pressable onPress={handlerOnPress}>
            <View style={styles.container}>
                <MaterialIcons name={icon} size={32} color="#000" />
            </View>
        </Pressable>
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
