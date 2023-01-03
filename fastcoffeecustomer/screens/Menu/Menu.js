import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, COLORS, images } from "../../constants";
import SearchBar from "../../components/SearchBar/SearchBar";


const MenuPage = ({shop, items}) => {
    const navigation = useNavigation();
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [filteredData, setFilteredData] = useState(items);

    const onBackPressed = () => {
        navigation.navigate("HomePage");
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground 
                    source={images.phuclong} 
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
                        data={items}
                        setFilter={setFilteredData}
                    />
                </ImageBackground>
            </View>
            <View>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    headerContainer: {
        width: "100%",
        height: 250,
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
    }
})

export default MenuPage;