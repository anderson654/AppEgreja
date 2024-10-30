import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

export default function Stars({ value = 5 }) {
    
    function activeStar(index) {
        return value >= index + 1;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {Array(5).fill(null).map((_, index) => (<AntDesign  key={index} name="star" color={activeStar(index) ? '#FFD700' : '#adadad'} size={18} />))}
        </View>
    )
}