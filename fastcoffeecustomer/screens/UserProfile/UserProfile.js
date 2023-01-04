import React from "react";
import {View, Text, StyleSheet, ScrollView, Image,TouchableOpacity, TextBase} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS, icons } from "../../constants";
import { SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const UserProfile = () => {
    const navigation = useNavigation();

    return(
        <View>
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.primary}
                translucent
            />
            <ScrollView>
                <View style={{padding:30,width:'100%',height:200}}>
                    <TouchableOpacity>
                        <Image source={icons.arrow_back}  
                        style={{width:30,height:30}}></Image>
                        <View></View>
                        <View></View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <Image source={icons.user} style={{width:140,height:140,borderRadius:100,marginTop:-70}}></Image>
                    <Text style={{fontSize:25,fontWeight:'bold',padding:10}}>User Name</Text>
                    <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>#000001</Text>
                </View>
                <View style={{
                    alignSelf:'center',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    backgroundColor:'#fff',
                    width:'90%',
                    padding:20,
                    paddingBottom:22,
                    borderRadius:10,
                    marginTop:20,
                }}>
                    <Image source={icons.home} style={{width:20,height:20}}></Image>
                    <Text>Address</Text>

                </View>
                <View style={{

                    alignSelf:'center',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    backgroundColor:'#fff',
                    width:'90%',
                    padding:20,
                    paddingBottom:22,
                    borderRadius:10,
                    marginTop:20
                }}>
                    <Image source={icons.birthday} style={{width:20,height:20}}></Image>
                    <Text>Date of Birth</Text>

                </View>
                <View style={{
                    alignSelf:'center',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    backgroundColor:'#fff',
                    width:'90%',
                    padding:20,
                    paddingBottom:22,
                    borderRadius:10,
                    marginTop:20,
                    
                }}>
                    <Image source={icons.phone} style={{width:20,height:20}}></Image>
                    <Text>Phone Number</Text>

                </View>
                <View style={{
                    alignSelf:'center',
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    backgroundColor:'#fff',
                    width:'90%',
                    padding:20,
                    paddingBottom:22,
                    borderRadius:10,
                    marginTop:20
                }}>
                    <Image source={icons.mail} style={{width:20,height:20}}></Image>
                    <Text>Email</Text>

                </View>
                <TouchableOpacity style={{
                    alignSelf:'center',
                    flexDirection:'row',
                    justifyContent:'center',
                    backgroundColor:COLORS.secondary,
                    width:'90%',
                    padding:20,
                    paddingBottom:22,
                    borderRadius:10,
                    marginTop:20,
                    backgroundColor:COLORS.primary
                    
                }}
                    onPress = {() => navigation.navigate("Login")}
                >

                    <Text style={{color:"#FFF", fontSize:25,fontWeight:'bold'}}>Log out</Text>

                </TouchableOpacity>
            </ScrollView>
        </View>
    )

}

export default UserProfile;