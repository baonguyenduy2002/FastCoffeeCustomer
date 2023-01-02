import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView  } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import { useNavigation } from "@react-navigation/native";


function Signup() {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDoB] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate("Login")
    };

    const onSignUpPressed = () => {
        navigation.navigate("Home")
    };

    return (
        <View style={Styles.container}>
            <ScrollView 
                style={Styles.scrollView} 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{alignItems: 'center'}} 
            >
                <Text style={Styles.label}>Create an account</Text>
                <CustomInput placeholder="Full Name" value={fullName} setValue={setFullName} />
                <CustomInput placeholder="Username" value={userName} setValue={setUserName} />
                <CustomInput placeholder="Your Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Address" value={address} setValue={setAddress} />
                <CustomInput placeholder="Date of Birth" value={dob} setValue={setDoB} />
                <CustomInput placeholder="Phone" value={phone} setValue={setPhone} />
                <CustomInput placeholder="Your Password" value={password} setValue={setPassword} secure={true} />
                <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secure={true} />
                <CustomButton text="Register" onPress={onSignUpPressed} />
                <CustomButton text="Have an account? Sign In" onPress={onSignInPressed} type="TERTIARY" />
            </ScrollView>
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
   scrollView : {
        marginTop: 100,
        width: '100%',
   },
   label: {
        fontSize: 35,
        color: "#FC6D3F",
        fontWeight: "bold",
   }
})

export default Signup;