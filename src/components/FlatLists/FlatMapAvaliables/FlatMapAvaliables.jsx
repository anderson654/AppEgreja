import React from "react";
import CardComents from "../../Cards/CardComents/CardComents";
import { FlatList } from "react-native-gesture-handler";

export default function FlatMapAvaliables({ data = [], onEndReached = () => { } }) {

    console.log(data);



    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <CardComents name={item?.user?.username} coments={item?.coments} rating={item?.rating} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.6}
            onEndReached={onEndReached}
        />
    )
}
