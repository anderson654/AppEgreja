import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import StackRegisterAndLogin from '../navigations/StackRegisterAndLogin';

export default function Index() {

    // const value = useSelector((state) => state);
    // console.log(value);

    return (
        <View style={styles.container}>
            <StackRegisterAndLogin />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
