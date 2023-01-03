import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { COLORS } from "../../constants";


const PromoTags = ({props, type}) => {
    const {image, description} = props;
    return (
        <View style={styles.container}>
            <Image 
                source={image}
                style={styles.image}
            />
            <View style={styles.infor}>
                <Text style={styles.name}>{description}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buyNow}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        width: 350,
        height: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: COLORS.primary,
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
        borderRadius: 50,
    },
    infor: {
        width: '65%',
        height: '80%',
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 17,
        fontWeight: '500',
        color: 'white',
    },
    buyNow: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        width: '50%',
        height: 40,
        backgroundColor: "#006E44",
        alignItems: 'center',
        borderRadius: 17,
        justifyContent: 'center'
    }
});



export default PromoTags;