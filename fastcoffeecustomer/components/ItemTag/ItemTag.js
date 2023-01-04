import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid } from 'react-native';

import { COLORS } from "../../constants";


const ItemTags = ({props}) => {
    const {image, description, name, price} = props;
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Image 
                source={image}
                style={styles.image}
                resizeMode="contain"
                resizeMethod="scale"
            />
            <View style={styles.info}>
                <View style={styles.info1}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text>add part</Text>
                </View>
                <View style={styles.info2}>
                    <TouchableOpacity>
                        <Text
                            style={{
                                color: 'blue',
                                textDecorationLine: 'underline',
                                fontWeight: '500',
                                fontSize: 14,
                            }}
                        >+ Add note</Text>
                    </TouchableOpacity>
                    <Text style={styles.price}>{price}đ</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 5,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary,
    },
    image :{
        width: 80,
        height: 80,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: '75%',
        height: '100%',
    },
    info1: {
        justifyContent: 'space-between',
        // backgroundColor: 'blue',
        width: '75%',
    },
    info2: {
        // backgroundColor: 'red',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flex: 1,
    },
    name: {
        fontSize: 17,
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