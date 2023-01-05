import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, images, COLORS } from "../../constants";
import PromoTags from "../../components/PromoTag/PromoTag";
import OrderHistoryTag from "../../components/OrderHistoryTag/OrderHistoryTag";
import HomeTags from "../../components/HomeTag/HomeTag";
import MenuTags from "../../components/MenuTag/MenuTag";

const HomePage = ({route}) => {
  let { accountInfo } = route.params;
  // console.log(accountInfo);
  const data = [
    {
        name: "Phuc Long - Kha Van Can",
        time: "1 jan 2023 13:23",
        price: "200.000"
    },
    {
        name: "Gong Cha",
        time: "25 dec 2022 19:00",
        price: "1.500.000"
    },
    {
      name: "TocoToco",
      time: "2 jan 2023 13:00",
      price: "100.000"
    },
  ];
  const Promo = [
    {
        image: images.phuclong,
        description: "Discount 50% for all orders over 200.000đ",
    },
    {
      image: images.phuclong,
      description: "Discount 10% for all drinks",
    },
    {
      image: images.phuclong,
      description: "Buy 1 get 1",
    },
  ];
  const item = [
    {
      image: images.milktea,
      shop: "Phuc Long",
      name: "Olong Milk Tea",
      price: "55.000"
    },
    {
      image: images.milktea,
      shop: "Gong Cha",
      name: "Milk Tea",
      price: "55.000"
    },
    {
      image: images.milktea,
      shop: "Phuc Long",
      name: "Milk Coffee",
      price: "30.000"
    },
  ];
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: true,
      headerStyle: ({height: 110}),
      headerTitle: `Hello, ${accountInfo.Name}!`,
      headerTitleAlign: 'left',
      headerTitleStyle: ({fontSize: 26, fontWeight: 'bold'}),
    })

  }, [navigation]);

  const onSeeAllHistoryPressed = () => {
    navigation.navigate('HistoryPage');
  }

  const onModifyRoutePressed = () => {
    navigation.navigate('ShopList');
  }

  return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
          onPress={onModifyRoutePressed}
        >
          <Image
            source={icons.addLocation}
            style={styles.image}
            resizeMode='contain'
            resizeMethod="scale"
          />
          <Text style={styles.text}>Choose your route</Text>
        </TouchableOpacity>
        
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={{ alignItems: "center", justifyContent: "space-between"}}
          showsVerticalScrollIndicator={false}
        >
          {/* Promo Container */}
          <HomeTags 
            title="Deal for Today" 
            SubTag={PromoTags} 
            data={Promo}
            styleContainer={styles.promoContainer}
          />
          {/* Order History Container */}
          <HomeTags 
            title="Order History" 
            SubTag={OrderHistoryTag} 
            onPress={onSeeAllHistoryPressed}
            data={data}
            styleContainer={styles.orderHistoryContainer}
          />
          {/* Popular Menu Container */}
          <HomeTags 
            title="Popular Menu" 
            SubTag={MenuTags} 
            data={item}
            styleContainer={styles.menuContainer}
          />
        </ScrollView>   
      </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    scrollView: {
      width: '100%',
      maxHeight: '120%',
      paddingVertical: 10,
    },
    subScrollView: {
      // paddingHorizontal: 5,
      // backgroundColor: 'blue',
    },
    promoContainer: {
      height: 180,
      width: '95%',

      padding: 5,
      marginBottom: 10,
    },
    orderHistoryContainer: {
      width: '95%',
      height: 200,

      marginBottom: 10,
      padding: 5,
    },
    menuContainer: {
      width: '95%',
      height: 200,

      marginBottom: 20,
      padding: 5,
    },
    button: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      backgroundColor: COLORS.primary,
      padding: 5,
      borderRadius: 20
    },
    image: {
      width: 30,
      height: 30,
      tintColor: 'white'
    },
    text: {
      fontSize: 15,
      fontWeight: '500',
      marginLeft: 5,
      color: 'white'
    }
});

export default HomePage;