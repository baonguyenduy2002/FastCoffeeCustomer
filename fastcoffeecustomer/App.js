import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./components/Navigation/Tab"
import { Login, ForgotPassword, Signup, MenuPage, ShopList, CheckoutOrder } from "./screens";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Login'}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
        <Stack.Screen name="ShopList" component={ShopList} />
        <Stack.Screen name="CheckOrder" component={CheckoutOrder} options={{headerShown: true,}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
