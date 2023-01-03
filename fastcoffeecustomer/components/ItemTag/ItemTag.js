import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { COLORS } from "../../constants";


const ItemTags = ({props}) => {
    const {image, description, name, price} = props;
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
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{price}đ</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary,
        // shadowColor: "#000",
        // shadowOffset: {
	    //     width: 0,
	    //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
    },
    image :{
        width: 80,
        height: 80,
    },
    infor: {
        justifyContent: 'space-between',
        width: '75%',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    description: {
        fontSize: 15,
        fontWeight: '300',
    },
    price: {
        fontSize: 17,
        fontWeight: '400',
        alignSelf:"flex-end",
       
    }
});



export default ItemTags;