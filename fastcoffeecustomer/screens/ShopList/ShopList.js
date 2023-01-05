import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, FONTS, HOST } from  '../../constants/theme';
import { icons, images } from '../../constants';
import ShopTags from '../../components/ShopTag/ShopTag';
import SearchBar from '../../components/SearchBar/SearchBar';

const ShopList = ({route}) => {
    // const shopData = [
    //     {
    //         id: 1,
    //         name: "Phuc Long",
    //         photo: images.phuclong1,
    //         address: "1 Vo Van Ngan",
    //         rating: 4.8,

    //     },
    //     {
    //         id: 2,
    //         name: "Highlands Coffee",
    //         photo: images.highlands,
    //         address: "1 Vo Van Ngan",
    //         rating: 4.2,
    //     },
    //     {
    //         id: 3,
    //         name: "Starbucks Coffee",
    //         photo: images.starbucks,
    //         address: "1 Vo Van Ngan",
    //         rating: 4.5,
    //     },
    //     {
    //         id: 4,
    //         name: "Gongcha Milktea & Coffee",
    //         photo: images.gongcha,
    //         address: "1 Vo Van Ngan",
    //         rating: 4.1,
    //     },
    //     {
    //         id: 5,
    //         name: "Katinat",
    //         photo: images.katinat,
    //         address: "1 Vo Van Ngan",
    //         rating: 3.9,
    //     },
    // ]

    const navigation = useNavigation();
    const [shopData, setShopData] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [shop, setShops] = useState([]);

    const onBackPressed = () => {
        navigation.navigate("HomePage");
    }

    useEffect(() => {
        fetch(HOST + '/api/customer/get/shop_list')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setShopData(data);
                setShops(data);
            })
            .catch(error => {
                console.error(error);
        });
    }, [navigation]);

    function renderHeader() {
        return (
            <View style = {styles.containerHeader}>
                <TouchableOpacity
                        onPress={onBackPressed}
                        style={styles.backButton}
                    >
                        <Image 
                            source={icons.arrowBack}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.black
                            }}
                        />
                </TouchableOpacity>
                <TouchableOpacity style= {[styles.locationButton, styles.shadow]}>
                    <Image 
                        source={icons.location}
                        resizeMode="contain"
                        style = {{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.primary,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}
                    >Location</Text>
                </TouchableOpacity>
            </View>
        )
    }

    

    function renderShop() {
        const renderItem = ({item}) => (
            <ShopTags item={item} />
        )
        return (
            <FlatList
                data={shop}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />

        )
    }
    return (
        <SafeAreaView 
            style = {{
                marginTop: 20,
                backgroundcolor: COLORS.lightGray4
            }}
        >
            {renderHeader()}
            <View
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    paddingLeft: 10,
                    marginBottom: 10,
                }}
            >
                <SearchBar  
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
                data={shopData}
                setFilter={setShops}
            />
            </View>
            {renderShop()}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    containerHeader: {
        width: '100%',
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
    },
    backButton: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    locationButton: {
        flexDirection: 'row', 
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default ShopList;