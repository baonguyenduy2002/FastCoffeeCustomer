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
    
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: true,
            headerStyle: ({height: 110}),
            headerTitle: "Order History",
            headerTitleAlign: 'left',
            headerTitleStyle: ({color: COLORS.primary, fontSize: 30, fontWeight: 'bold'}),
        });
        setFilteredData(data);

    }, [navigation]);

    return (
        <View style={styles.container}>
            <SearchBar  
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
                data={data}
                setFilter={setFilteredData}
            />
            <ScrollView 
                style={styles.scrollView} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{alignItems: 'center'}}
            >
            {
                filteredData.map((item, index) => {
                    return (
                        <OrderHistoryTag key={index} props={item} type="HISTORY"/>
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
        padding: 10,
        marginBottom: 100
    },
  });

export default History;