import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Logo from "../../assets/images/loginLogo.png"
import Svg, { Path, SvgXml } from "react-native-svg";
import CustomInput from "../../components/customInput/customInput.js";
import CustomButton from "../../components/customButton/customButton.js";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = () => {
        console.warn('Sign in')
    };
    const onForgotPasswordPressed = () => {
        console.warn('Forgot password')
    };
    const onSignUpPressed = () => {
        console.warn('Sign Up')
    };

    return (
        <View style={Styles.container}>
            <Image source={Logo} style={Styles.logo} resizeMode="contain" />
            <Text style={Styles.label}>FAST COFFEE</Text>
            <CustomInput placeholder="Your Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Your Password" value={password} setValue={setPassword} secure={true} />
            <CustomButton text="Sign In" onPress={onSignInPressed} />
            <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY"/>
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
        width: '70%',
        maxWidth: 300,
   },
   label: {
        fontSize: 35,
        color: "#6B5141",
        fontWeight: "bold",
   }
})

export default Login;