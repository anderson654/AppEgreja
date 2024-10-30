import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

export default function StarsActive({ value, onPress }) {

    function activeStar(index) {
        return value >= index + 1;
    }

    const handlerOnPress = (index) => {
        if (typeof onPress === 'function') {
            onPress(index+1);
        }
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {Array(5).fill(null).map((_, index) => (<AntDesign onPress={() => handlerOnPress(index)} key={index} name="star" color={activeStar(index) ? '#FFD700' : '#adadad'} size={50} />))}
        </View>
    )
}