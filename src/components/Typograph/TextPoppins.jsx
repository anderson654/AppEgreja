import React from "react";
import { Text } from "react-native-paper";
import { fontWeigthPopins } from "../../constants/fontWeigthPopins";

export default function TextPoppins({ children, variant, fontWeight = 400, color = 'rgb(87,87,87)'}) {
    return <Text variant={variant} style={{ fontFamily: fontWeigthPopins[fontWeight], color }}>{children}</Text>
}



