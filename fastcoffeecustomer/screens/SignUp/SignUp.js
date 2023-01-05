import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, Button } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import { useNavigation } from "@react-navigation/native";
import DatePicker from 'react-native-date-picker';
import { COLORS, HOST } from "../../constants";


function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDoB] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate("Login")
    };

    const onSignUpPressed = () => {
        if (fullName === '' ||
            email === '' ||
            address === '' ||
            dob === '' ||
            phone === '' ||
            password === '' ||
            confirmPassword === '') {
            Alert.alert(
                "Error!",
                "Please enter all fields before submiting!",
                [
                    { text: "OK" }
                ]
            );
        }
        else {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let myDoB = `${year}-${month}-${day}`
            fetch(HOST + "/api/customer/signup", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    address: address,
                    dob: myDoB,
                    phone: phone,
                    password: password,
                }),
            })
                .then(response => response.json())
                .then(accountInfo => {
                    console.log(accountInfo);
                    if (accountInfo.length === 0) {
                        Alert.alert(
                            "Error!",
                            "Email or phone number has been used!",
                            [
                                { text: "OK" }
                            ]
                        );
                    }
                    else {
                        navigation.navigate("Home", { accountInfo: accountInfo[0][0] })
                    };
                    return accountInfo;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    return (
        <View style={Styles.container}>
            <ScrollView
                style={Styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <Text style={Styles.label}>Create an account</Text>
                <CustomInput placeholder="Full Name" value={fullName} setValue={setFullName} />
                <CustomInput placeholder="Your Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Address" value={address} setValue={setAddress} />
                <Pressable style={Styles.datePicker} onPress={() => setOpen(true)}>
                    <Text style={dob ? Styles.dobText : Styles.dobTextHolder}>{dob || "Date of Birth"}</Text>
                </Pressable>
                <DatePicker
                    modal
                    mode="date"
                    maximumDate={new Date()}
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        console.log(date)
                        console.log(typeof date)
                        setOpen(false)
                        setDate(date)
                        setDoB(date.toLocaleDateString())
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
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
    scrollView: {
        marginTop: 100,
        width: '100%',
    },
    label: {
        fontSize: 35,
        color: "#FC6D3F",
        fontWeight: "bold",
    },
    dobTextHolder: {
        color: COLORS.darkgray
    },
    dobText: {
    },
    datePicker: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,

        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e8e8e8',
        marginVertical: 5,
        paddingLeft: 10,
        justifyContent: 'center'
    }
})

export default Signup;