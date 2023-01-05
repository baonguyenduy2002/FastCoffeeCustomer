import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { HomePage, History, OrderTracking, UserProfile } from "../../screens";
import { icons, COLORS } from "../../constants";

const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
    let { accountInfo } = route.params;
    console.log(accountInfo)
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
            initialParams={{accountInfo: accountInfo}}
            options={{
                headerShown: true,
                headerShadowVisible: false,
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
            name="OrderTrackingPage"
            component={OrderTracking}
            initialParams={{accountInfo: accountInfo}}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={icons.order}
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
            initialParams={{accountInfo: accountInfo}}
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
            component={UserProfile}
            initialParams={{accountInfo: accountInfo}}
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