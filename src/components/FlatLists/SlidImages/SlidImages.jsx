import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";


const windowWidth = Dimensions.get('window').width;


export default function SlidImages({ itens = [] }) {
    const theme = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    const ImageItem = ({ data }) => {
        return (
            <Image source={{ uri: data.image }} style={styles.image} />
        )
    }

    const Indicator = () => {
        return (
            <View style={styles.dotWarp}>
                <View style={styles.dotContainer}>
                    {
                        itens.map((_, i) => {
                            return (
                                <View key={i} style={[styles.dot, { backgroundColor: i === activeIndex ? theme.colors.primary : 'grey' }]}></View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(offsetX / windowWidth);
        setActiveIndex(currentIndex);
    };

    return (
        <View style={{ position: 'relative' }}>
            <FlatList
                data={itens}
                renderItem={({ item }) => <ImageItem data={item} />}
                keyExtractor={item => item.id}
                style={{ maxHeight: windowWidth }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                scrollEventThrottle={16}
                onScroll={handleScroll}
            />
            {
                itens.length > 1 && <Indicator />

            }
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: windowWidth,
        height: windowWidth,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    dotWarp: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        flexDirection: 'column-reverse',
        marginTop: 10
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4
    }
})