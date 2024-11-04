import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

export default function CloseBtn() {
    const theme = useTheme();
    return (
        <View style={{ backgroundColor: theme.colors.primary, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name={'close'} size={32} color="#fff" />
        </View>
    );
}