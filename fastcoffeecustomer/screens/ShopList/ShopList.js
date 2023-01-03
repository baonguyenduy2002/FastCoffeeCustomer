import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Touchable } from 'react-native';

import { COLORS, SIZES, FONTS} from  '../../constants/theme';
import { icons, images } from '../../constants';



const ShopList = () => {
    
    const shopData = [
        {
            id: 1,
            name: "Phuc Long",
            photo: images.phuclong,
            duration: "10-20 min",
            rating: 4.8,

        },
        {
            id: 2,
            name: "Highlands Coffee",
            photo: images.highlands,
            duration: "10-20 min",
            rating: 4.2,
        },
        {
            id: 3,
            name: "Starbucks Coffee",
            photo: images.starbucks,
            duration: "10-20 min",
            rating: 4.5,
        },
        {
            id: 4,
            name: "Gongcha Milktea & Coffee",
            photo: images.gongcha,
            duration: "10-20 min",
            rating: 4.1,
        },
        {
            id: 5,
            name: "Katinat",
            photo: images.katinat,
            duration: "10-20 min",
            rating: 3.9,
        },
    ]

    const [shop, setShops] = React.useState(shopData);

    function renderHeader() {
        return (
            <View style = {{flexDirection: 'row', height: 50}}>
            <TouchableOpacity style= {{
                width: 50,
                paddingLeft: SIZES.padding * 2,
                justifyContent: 'center'
                
            }}>
                <Image 
                    source={icons.location}
                    resizeMode="contain"
                    style = {{
                        width: 30,
                        height: 30
                    }}
                    />

            </TouchableOpacity>

            <View style = {{flex: 1, alignItems:'center', justifyContent: 'center'}}>
                <View style = {{
                    width: '70%',
                    height: '100%',
                    backgroundColor: COLORS.lightGray4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius
                }}>
                    <Text>Location</Text>
                </View>
            </View>
            <TouchableOpacity style = {{
                width: 50,
                paddingRight: SIZES.padding * 2,
                justifyContent: 'center'
            }}>
                <Image 
                    source={images.coffee1}
                    resizeMode="contain"
                    style = {{
                        width: 30,
                        height: 30
                    }}/>

            </TouchableOpacity>
        </View>
        )
    }

    function renderShop() {
        const renderItem = ({item}) => (
            <TouchableOpacity
                style={{marginBottom: SIZES.padding * 2, backgroundColor: COLORS.lightGray3}}
                // onpress -> shop screen
            >
                {/* Shop image*/}
                <View style={{marginBottom:SIZES.padding}}>
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{fontWeight: 'bold'}}>{item.duration}</Text>
                        
                    </View>
                </View>
                {/* Shop information */}

                <Text style={{fontSize:SIZES.body2}}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection:'row'
                    }}
                >
                    {/*rating*/}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor:COLORS.primary,
                            marginRight: 10,
                        }}
        
                    />
                    <Text style={{fontSize: SIZES.body4}}>{item.rating}</Text>
                </View>

            </TouchableOpacity>
        )
        return (
            <FlatList
                data={shop}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
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
                backgroundcolor: COLORS.lightGray4}}
                >
            {renderHeader()}
            <View></View>
            <View></View>
            {renderShop()}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 20,
        backgroundcolor: COLORS.lightGray4
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