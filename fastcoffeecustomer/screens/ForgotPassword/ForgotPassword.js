import React, {useState} from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import { useNavigation } from "@react-navigation/native";

function ForgotPassword() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate("Login")
    };

    const onSendPressed = () => {
        Alert.alert(
            "Error!",
            "This function is not available at the moment!",
            [
                { text: "OK" }
            ]
        );
        // navigation.navigate("Home")
    };

    return (
        <View style={Styles.container}>
            <Text style={Styles.label}>Reset your password</Text>
            <CustomInput placeholder="Username" value={userName} setValue={setUserName} />
            <CustomInput placeholder="Your Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Your Password" value={password} setValue={setPassword} secure={true} />
            <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secure={true} />
            <CustomButton text="Send" onPress={onSendPressed} />
            <CustomButton text="Back to Sign In" onPress={onSignInPressed} type="TERTIARY" />
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

   label: {
        fontSize: 35,
        color: "#FC6D3F",
        fontWeight: "bold",
   }
})

export default ForgotPassword;