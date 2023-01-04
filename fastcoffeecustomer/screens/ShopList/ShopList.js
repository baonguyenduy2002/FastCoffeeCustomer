import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

import { COLORS, SIZES, FONTS} from  '../../constants/theme';
import { icons, images } from '../../constants';
import ShopTags from '../../components/ShopTag/ShopTag';

const ShopList = () => {
    const shopData = [
        {
            id: 1,
            name: "Phuc Long",
            photo: images.phuclong1,
            address: "1 Vo Van Ngan",
            rating: 4.8,

        },
        {
            id: 2,
            name: "Highlands Coffee",
            photo: images.highlands,
            address: "1 Vo Van Ngan",
            rating: 4.2,
        },
        {
            id: 3,
            name: "Starbucks Coffee",
            photo: images.starbucks,
            address: "1 Vo Van Ngan",
            rating: 4.5,
        },
        {
            id: 4,
            name: "Gongcha Milktea & Coffee",
            photo: images.gongcha,
            address: "1 Vo Van Ngan",
            rating: 4.1,
        },
        {
            id: 5,
            name: "Katinat",
            photo: images.katinat,
            address: "1 Vo Van Ngan",
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
        flex: 1,
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