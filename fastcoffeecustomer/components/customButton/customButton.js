import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <Pressable onPress={onPress} style={[Styles.container, Styles[`container_${type}`]]}>
            <Text style={[Styles.text, Styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: "#FC6D3F",
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },

    text_TERTIARY: {
        color: 'grey',
    },
})

export default CustomButton;