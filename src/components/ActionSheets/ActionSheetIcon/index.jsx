import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Actionsheet, useDisclose, Icon, Box, Text, Center, NativeBaseProvider } from "native-base";
import { Path } from "react-native-svg";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { setSubMenu } from "../../../context/reducers/menuHome";

export default function ActionSheetIcon() {

    const contextMenuHome = useSelector(context => context.menuHome);
    const dispatch = useDispatch();

    return (
        <Center>
            <Actionsheet isOpen={contextMenuHome.subMenuIsOpen} onClose={() => dispatch(setSubMenu(false))} size="full">
                <Actionsheet.Content>
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="16" color="gray.500" _dark={{
                            color: "gray.300"
                        }}>
                            Albums
                        </Text>
                    </Box>
                    <Actionsheet.Item startIcon={<Icon as={MaterialIcons} size="6" name="delete" />}>
                        Delete
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={MaterialIcons} name="share" size="6" />}>
                        Share
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={Ionicons} name="play-circle" size="6" />}>
                        Play
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon as={MaterialIcons} size="6" name="favorite" />}>
                        Favourite
                    </Actionsheet.Item>
                    <Actionsheet.Item startIcon={<Icon viewBox="0 0 24 24" size="6" fill="none">
                        <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
                    </Icon>}>
                        Cancel
                    </Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </Center>
    );
};