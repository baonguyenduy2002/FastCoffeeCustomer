import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { icons, images, COLORS } from "../../constants";

const HomeTags = ({title, SubTag, onPress, data, styleContainer}) => {
    return (
        <View style={styleContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={styles.button}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                style={styles.subScrollView}
                contentContainerStyle={{alignItems: 'center'}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    data.map((item, index) => {
                        return (
                            <SubTag key={index} props={item} type={"HOME"} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    subScrollView: {
      // paddingHorizontal: 5,
      // backgroundColor: 'blue',
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',

    },
    button: {
      fontSize: 14,
      fontWeight: '500',
      color: COLORS.primary,
    }
});



export default HomeTags;