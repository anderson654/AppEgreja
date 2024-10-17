import React, { forwardRef } from "react";
import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants';

const DefaultView = forwardRef(({ spaceTopBar = false, background = 'transparent', children }, ref) => {
    const containerStyle = {
        ...styles.container,
        paddingTop: spaceTopBar ? Constants.statusBarHeight : 0,
        backgroundColor: background
    };

    return (
        <View style={containerStyle} ref={ref}>
            {children}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default DefaultView;
