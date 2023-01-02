import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

import { images } from "../../constants";


const OrderHistoryTag = (props) => {
    const {name, price, time} = props;
    return (
        <View style={styles.container}>
            <Image 
                source={images.coffee1}
                style={styles.image}
            />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            <View>
                <Text>{price}đ</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        width: '94%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
    },
    image :{
        width: 50,
        height: 70,
        marginHorizontal: 5,
    },
    name: {

    },
    time: {

    },
    price: {

    }
})



export default OrderHistoryTag;