import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { COLORS } from "../../constants";


const MenuTags = ({props, type}) => {
    const {image, shop, name, price} = props;
    return (
        <View style={styles.container}>
            <Image 
                source={image}
                style={styles.image}
                resizeMode="contain"
                resizeMethod="scale"
            />
            <View style={styles.infor}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.shop}>{shop}</Text>
                <Text style={styles.price}>{price}đ</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        width: 330,
        height: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: "white",
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 5,
        
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
        width: 100,
        height: 100,
    },
    infor: {
        width: '65%',
        height: '80%',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    shop: {
        fontSize: 18,
        fontWeight: '500',
    },
    price: {
        fontSize: 17,
        fontWeight: '500',
        alignSelf:"flex-end",
        marginRight: 10,
    }
});



export default MenuTags;