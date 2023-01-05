import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES } from  '../../constants/theme';
import { icons } from '../../constants';

const ShopTags = ({item}) => {
    const navigation = useNavigation();

    const onShopPressed = () => {
        navigation.navigate('MenuPage', {shop: item, items: ""})
    }
    return (
        <TouchableOpacity
            style={{marginBottom: SIZES.padding * 2, backgroundColor: COLORS.lightGray3}}
            onPress={onShopPressed}
        >
            {/* Shop image*/}
            <View style={{marginBottom:SIZES.padding}}>
                <Image
                    source={item.photo}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: 200,
                        borderRadius: 10
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        height: 50,
                        width: "100%",
                        backgroundColor: COLORS.white,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...styles.shadow
                    }}
                >
                    <Text style={{fontWeight: 'bold'}}>{item.address}</Text>
                    
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
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
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

export default ShopTags;