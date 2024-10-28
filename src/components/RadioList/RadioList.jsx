import React from "react";
import { useTheme } from "react-native-paper";
import { Radio } from "native-base";
import { Modal, ScrollView, TouchableWithoutFeedback, View, TouchableOpacity } from "react-native";
import DefaultView from "../Views/DefaultView";
import { Dimensions } from 'react-native';

export default function RadioList({ data, nameKey, valueKey, isVisible = false, onClose = () => { }, onPress }) {
    const [value, setValue] = React.useState(null);

    const heigthModal = Dimensions.get('window').height * .8;
    const theme = useTheme();

    function handlerSetValue(value) {
        setValue(value);
        onPress(value);
        onClose();
    }

    const ListItens = () => {
        return data.map((obj) => (
            <View key={obj[valueKey]} style={{ paddingVertical: 10, borderBottomWidth: 1, width: '100%' }}>
                <Radio colorScheme="primary" value={obj[valueKey]} my={1} borderColor={theme.colors.primary}>
                    {obj[nameKey]}
                </Radio>
            </View>
        ));
    }

    return (
        <Modal
            statusBarTranslucent={false}
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                dispatch(setStatusModal(false));
            }}>
            <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={onClose}>
                <DefaultView spaceTopBar={false} background="rgba(0, 0, 0, 0.5)">
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 20, flex: 1 }}>
                        <TouchableOpacity activeOpacity={1} style={{ width: "100%", backgroundColor: "#fff", borderRadius: 20, padding: 20, height: heigthModal }}>
                            <ScrollView>
                                <View style={{ width: "100%" }}>
                                    <Radio.Group defaultValue="1" accessibilityLabel="favorite colorscheme" value={value} onChange={handlerSetValue}>
                                        <ListItens/>
                                    </Radio.Group>
                                </View>
                            </ScrollView>
                        </TouchableOpacity>
                    </View>
                </DefaultView>
            </TouchableOpacity>
        </Modal>
    )
}