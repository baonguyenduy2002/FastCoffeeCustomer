import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({value, setValue, placeholder, secure}) => {
    return (
        <View style={Styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={Styles.input}
                secureTextEntry={secure}
            />
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e8e8e8',

        padding: 10,
        marginVertical: 5,
    },
    input: {},
})


export default CustomInput;