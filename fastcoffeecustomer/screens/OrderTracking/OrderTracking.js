import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from '../../constants'
import { Route } from "../../assets/images"
import * as Progress from "react-native-progress"

const OrderTracking = () => {

    const currentOrder = {
        ID: 1,
        Status: 'Accepted',
        Order_Note: '',
        DateTime: '2023/03/01',
        Shop_Name: 'GongCha',
        Shop_Location: (0,0),
    }

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Order Tracking</Text>
            <View style={styles.orderInfo}>
                <View style={styles.orderTop}>
                    <View>
                        <Text style={styles.infoHeader}>Estimated Arrival</Text>
                        <Text style={styles.arrivalTime}>15-20 Minutes</Text>
                    </View>
                    <Image
                        source={Route}
                        style={styles.orderImage}
                    />
                </View>
                <View style={styles.progressBar}>
                    <Progress.Bar size={30} color={COLORS.primary} indeterminate={true} />
                </View>
                <Text style={styles.orderStatus}>{
                    'Your order at ' + currentOrder.Shop_Name + ' is ' +
                    (currentOrder.Status === "Accepted" && "confirmed") ||
                    (currentOrder.Status === "Making" && "being repaired") ||
                    (currentOrder.Status === "Ready" && "finished")
                }</Text>
            </View>
            <View style={styles.mapView}>
                <Text>Map</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
    },
    header: {
        color: COLORS.white,
        fontSize: 30,
        fontWeight: 'bold'
    },
    orderInfo: {
        backgroundColor: COLORS.white,
        zIndex: 2,
        borderRadius: 5,
        padding: 10,
        margin: 20,
        width: '90%',
    },
    orderTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    progressBar: {
        marginTop: 10,
        marginLeft: 10,
    },
    infoHeader: {
        color: COLORS.darkgray,
        fontSize: 17,
        marginTop: 10,
    },
    arrivalTime: {
        color: COLORS.black,
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 10,
    },
    orderStatus: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        color: COLORS.darkgray,
        fontSize: 15,
        fontStyle: 'italic',
    },
    orderImage: {
        margin: 15,
        width: '20%',
        height: '85%'
    },
    mapView: {
        backgroundColor: COLORS.lightGray4,
        flex: 1,
        zIndex: 0, // works on ios
        marginTop: -60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default OrderTracking;