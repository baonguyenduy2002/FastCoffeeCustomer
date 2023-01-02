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
            <View style={styles.infor}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            <View style={styles.total}>
                <Text style={styles.price}>{price}đ</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        width: '98%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image :{
        width: 50,
        height: 70,
        marginHorizontal: 5,
    },
    infor: {
        width: '55%',
        height: '80%',
    },
    total: {
        width: '25%',
        marginRight: 0,
        alignItems: 'flex-end'
    },
    name: {
        fontSize: 15,
        fontWeight: '500',
    },
    time: {
        fontSize: 12,
        opacity: 0.7,
    },
    price: {
        fontSize: 14,
        fontWeight: '400',
    }
});



export default OrderHistoryTag;