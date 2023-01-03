import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { HomePage, History } from "../../screens";
import { icons, COLORS } from "../../constants";
import ShopList from "../../screens/ShopList/ShopList";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}
        >
        <Tab.Screen 
            name="HomePage"
            component={HomePage}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.cupCoffee}
                        resizeMethod="resize"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}

                    />
                )
            }}
        />
        <Tab.Screen 
            name="DetailPage"
            component={HomePage}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.search}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                )
            }}
        />
        <Tab.Screen 
            name="HistoryPage"
            component={History}
            options={{
                headerShown: true,
                headerShadowVisible: false,
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.history}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                )
            }}
        />
        <Tab.Screen 
            name="UserPage"
            component={ShopList}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.user}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? COLORS.primary : COLORS.secondary
                        }}
                    />
                )
            }}
        />
           
        </Tab.Navigator>
    )
}

export default Tabs;