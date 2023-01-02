import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, COLORS } from "../../constants";
import SearchBar from "../../components/SearchBar/SearchBar";
import OrderHistoryTag from "../../components/OrderHistoryTag/OrderHistoryTag";

const History = () => {

    const navigation = useNavigation();
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");

    const data = [
        {
            name: "Phuc Long",
            time: "1 jan 2023 13:23",
            price: "200.000"
        },
        {
            name: "Gong Cha",
            time: "25 dec 2022 19:00",
            price: "150.000"
        }
    ];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: true,
            
            headerLargeTitle: true,
            headerStyle: ({height: 110}),
            headerTitle: "Order History",
            headerTitleAlign: 'left',
            headerTitleStyle: ({color: COLORS.primary, fontSize: 30, fontWeight: 'bold'}),
        });

    }, [navigation]);


    return (
        <View style={styles.container}>
            <SearchBar  
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />
            <ScrollView style={styles.scrollView}>
            {
                data.map((item, index) => {
                    return (
                        <OrderHistoryTag key={index} {...item} />
                    )
                })
            }
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    scrollView: {
        width: '95%',
        backgroundColor: 'blue',
        padding: 10,

    },
  });

export default History;