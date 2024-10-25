import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

export default function Stars() {
    return (
        <View style={{ flexDirection: 'row' }}>
            {Array(5).fill(null).map((_,index) => (<AntDesign key={index} name="star" color={'#FFD700'} size={18}/>))}
        </View>
    )
}