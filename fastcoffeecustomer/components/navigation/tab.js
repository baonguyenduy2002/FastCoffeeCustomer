import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { Home } from "../../screens/index";
import { iconsTabBar } from "../../assets/index";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
        <Tab.Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => {
                    <Image
                        source={iconsTabBar.cupcoffee}
                        resizeMethod="contain"
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                }
            }}
        />
           
        </Tab.Navigator>
    )
}

export default Tabs;