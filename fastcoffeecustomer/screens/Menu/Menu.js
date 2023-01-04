import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, COLORS, images } from "../../constants";
import SearchBar from "../../components/SearchBar/SearchBar";
import ItemTags from "../../components/ItemTag/ItemTag";

const MenuPage = ({shop, items}) => {
    const data = [
        {
            image: images.milktea,
            description: 'description',
            name: 'Milk Tea',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Coffee',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Oolong Tea',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Milk Tea',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Milk Tea',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Milk Tea',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Milk Tea',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Milk Tea',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Milk Tea',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Milk Tea',
            price: '50.000' 
        },
        {
            image: images.milktea,
            description: 'description',
            name: 'Milk Tea',
            price: '50.000' 
        },
    ]

    const navigation = useNavigation();
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    const onBackPressed = () => {
        navigation.navigate("HomePage");
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground 
                    source={images.phuclong1} 
                    resizeMode='stretch'
                    style={styles.header}
                >
                    <TouchableOpacity
                        onPress={onBackPressed}
                        style={styles.backButton}
                    >
                        <Image 
                            source={icons.arrowBack}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                    <SearchBar  
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}
                        data={data}
                        setFilter={setFilteredData}
                    />
                </ImageBackground>
            </View>
            <View style={styles.subContainer}>
                <ScrollView 
                    style={styles.scrollView}
                    contentContainerStyle={{ alignItems: 'center'}}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.shopInfo}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}
                        >Phuc Long</Text>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: '300',
                            }}
                        >22 Kha Van Can</Text>
                        <View style={styles.rating}>
                            <Image 
                                source={icons.star}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.primary
                                }}
                            />
                            <Text>4.7</Text>
                        </View>
                    </View>
                    <Text 
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            alignSelf: 'flex-start',
                            marginLeft: 10,
                            marginBottom: 5,
                        }}
                    >Menu</Text>
                    {
                        filteredData.map((item, index) => {
                            return (
                                <ItemTags key={index} props={item}/>
                            )              
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: 'white'
    },
    headerContainer: {
        width: "100%",
        height: 200,
        backgroundColor: 'blue'
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'blue',
    },
    backButton: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: 40,
        height: 40,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    subContainer: {
        zIndex: 2,
        marginTop: -30,

        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    scrollView: {
        width: '100%',
        marginBottom: 100
    },
    shopInfo: {
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '90%',
        // height: 'fit-content',

        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,

        borderRadius: 20,
    },
    rating: {
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        backgroundColor: 'white',

        padding: 2,

        width: 50,
        borderRadius: 10
    },
})

export default MenuPage;