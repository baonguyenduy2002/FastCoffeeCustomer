import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { icons, images } from '../../constants';
import ShopTags from '../../components/ShopTag/ShopTag';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getDistance } from 'geolib';

const ShopList = () => {
    const shopData = [
        {
            id: 1,
            name: "Phuc Long",
            photo: images.phuclong1,
            address: "269 Nguyễn Tri Phương, P5, Q10, HCM",
            rating: 4.8,
            location: [106.66855237843285, 10.76067929317819]

        },
        {
            id: 2,
            name: "Highlands Coffee",
            photo: images.highlands,
            address: "266 Nguyễn Tri Phương, P5, Q10, HCM",
            rating: 4.2,
            location: [106.66855822835633, 10.762154850055882]
        },
        {
            id: 3,
            name: "Starbucks Coffee",
            photo: images.starbucks,
            address: "218a Tô Hiến Thành, Q10, HCM",
            rating: 4.5,
            location: [106.66356785421264, 10.776718772126674]
        },
        {
            id: 4,
            name: "Gongcha Milktea & Coffee",
            photo: images.gongcha,
            address: "175B Đ. Cao Thắng, P12, Q10, HCM",
            rating: 4.1,
            location: [106.67581165375768, 10.774847800705835]
        },
        {
            id: 5,
            name: "Katinat",
            photo: images.katinat,
            address: "6 Trương Định, Bến Thành, Q1, HCM",
            rating: 3.9,
            location: [106.69672080840667, 10.77138611748833]
        },
    ]

    const navigation = useNavigation();
    // const [shopData, setShopData] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [shop, setShops] = useState(shopData);
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [destination, setDestination] = useState(null);

    const onBackPressed = () => {
        navigation.navigate("HomePage");
    }

    function renderHeader() {
        return (
            <View style={styles.containerHeader}>
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
                <View style={styles.locationHead}>
                    <View style={styles.locInput}>
                        <TextInput
                            value={longitude}
                            onChangeText={setLongitude}
                            placeholder={"Longitude"}
                            placeholderTextColor={COLORS.darkgray}
                            secureTextEntry={false}
                        />
                    </View>
                    <View style={styles.locInput}>
                        <TextInput
                            value={latitude}
                            onChangeText={setLatitude}
                            placeholder={"Latitude"}
                            placeholderTextColor={COLORS.darkgray}
                            secureTextEntry={false}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setDestination([longitude, latitude])
                        }}
                        style={[styles.locationButton, styles.shadow]}
                    >
                        <Image
                            source={icons.location}
                            resizeMode="contain"
                            style={{
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
                        >Destination</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }



    function renderShop() {
        const renderItem = ({ item }) => (
            destination && 
            (getDistance(
                {
                    longitude: item.location[0],
                    latitude: item.location[1]
                }, 
                {
                    longitude: destination[0],
                    latitude: destination[1]
                },  
                accuracy = 1) <= 500 && 
            <ShopTags item={item} />)
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
            style={{
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
        borderRadius: 10,
        marginHorizontal: 2,
        height: 38
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
    },
    locationHead: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    locInput: {
        width: "29%",
        backgroundColor: COLORS.white,
        padding: 5,
        borderRadius: 10,
        marginHorizontal: 2
    }
})

export default ShopList;