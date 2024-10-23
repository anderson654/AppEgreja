import React from "react";
import { Text } from "react-native-paper";
import { fontWeigthPopins } from "../../constants/fontWeigthPopins";

export default function TextPoppins({ children, variant, fontWeight = 400 }) {
    return <Text variant={variant} style={{ fontFamily: fontWeigthPopins[fontWeight] }}>{children}</Text>
}



