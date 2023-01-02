import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home } from "../../screens";
import { icons, COLORS } from "../../constants";

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
            name="Home1"
            component={Home}
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
            name="Search"
            component={Home}
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
            name="Like"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.favorite}
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
            name="User"
            component={Home}
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