import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import { useNavigation } from "@react-navigation/native";
import { icons, COLORS, HOST } from "../../constants"



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = (email, password) => {
        if (email === '' || password === '') {
            Alert.alert(
                "Error!",
                "Please enter username and password!",
                [
                    { text: "OK" }
                ]
            );
        }
        else {
            // console.log(email, password)
            fetch(HOST + "/api/customer/login", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
                .then(response => response.json())
                .then(accountInfo => {
                    console.log(accountInfo);
                    if (accountInfo.length === 0) {
                        Alert.alert(
                            "Error!",
                            "Invalid email or password!",
                            [
                                { text: "OK" }
                            ]
                        );
                    }
                    else {
                        navigation.navigate("Home", { accountInfo: accountInfo[0] })
                    };
                    return accountInfo;
                })
                .catch(error => {
                    console.error(error);
                });
        }
        // navigation.navigate("Home", { accountInfo: {Name: "hehe"} })
    };
    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword")
    };
    const onSignUpPressed = () => {
        navigation.navigate("Signup")
    };

    return (
        <View style={Styles.container}>
            <Image source={icons.logoLogin} style={Styles.logo} resizeMode="contain" />
            <Text style={Styles.label}>FAST COFFEE</Text>
            <CustomInput placeholder="Your Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Your Password" value={password} setValue={setPassword} secure={true} />
            <CustomButton text="Sign In" onPress={() => onSignInPressed(email, password)} />
            <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY" />
            <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
        </View>
    )
}



const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFC',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        marginTop: -100,
        marginBottom: -50,
        width: '70%',
        maxWidth: 300,
    },
    label: {
        fontSize: 35,
        color: COLORS.primary,
        fontWeight: "bold",
    }
})

export default Login;