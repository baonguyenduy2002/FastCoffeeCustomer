import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

import { images } from "../../constants";


const OrderHistoryTag = ({props, type}) => {
    const {Name, Price, DateTime, Address} = props;
    return (
        <View style={[styles.container, styles[`container_${type}`]]}>
            <Image 
                source={images.coffee1}
                style={styles.image}
            />
            <View style={styles[`infor_${type}`]}>
                <Text style={styles.name}>{Name}</Text>
                <Text style={styles.time}>{Address}</Text>
                <Text style={styles.time}>{DateTime.split('T')[0]}</Text>
            </View>
            {/* {type != "HOME" && (
                <View style={styles.total}>
                    <Text style={styles.price}>{Price}đ</Text>
                </View>
            )} */}
            
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    container_HISTORY: {
        width: '98%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    container_HOME: {
        width: 150,
        height: '90%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginRight: 10,
        marginLeft: 5,
        borderRadius: 20,
    },
    image :{
        width: 50,
        height: 70,
        marginHorizontal: 5,
    },
    infor_HISTORY: {
        width: '55%',
        height: '80%',
    },
    infor_HOME: {
        width: '95%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'space-between'
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