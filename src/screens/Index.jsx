import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackRegisterAndLogin from '../navigations/StackRegisterAndLogin';
import { getUser } from '../apis/EgrejaApi/egreja';
import { setUser } from '../context/reducers/user';

export default function Index() {

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const response = await getUser();
                dispatch(setUser(response.data));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

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
