import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { COLORS, icons } from '../../constants';
import * as Progress from "react-native-progress";
import MapboxGL from '@rnmapbox/maps';
import * as Location from 'expo-location';
import { lineString as makeLineString } from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import { CurrentRenderContext } from "@react-navigation/native";

//Initialize Mapbox and Mapbox Drirection SDK
MapboxGL.setWellKnownTileServer('Mapbox')
const accessToken = 'pk.eyJ1IjoiaG9hbmd0cmFuMTI5MDIiLCJhIjoiY2xjZzN3OHdwMGYxODN2cGs1aWw2b3pqNiJ9.6In3cT7HoyYIp_wN27ebKQ'
MapboxGL.setAccessToken(accessToken);
const directionsClient = MapboxDirectionsFactory({ accessToken });

const OrderTracking = (input) => {
    let { accountInfo } = input.route.params;
    //Sample data get from calling api
    const currentOrder = {
        ID: 1,
        Status: 'Accepted',
        Order_Note: '',
        DateTime: '2023/03/01',
        Shop_Name: 'GongCha',
        Shop_Location: [106.67597279491999, 10.75843405052139]
    }


    const [myLocation, setLocation] = useState(null);
    const [estArrTime, setEstArrTime] = useState(0);
    const [route, setRoute] = useState(null);
    const [startDestinationPoints, setStartDestinationPoints] = useState([currentOrder.Shop_Location])

    //Get current location and request a route from Mapbox
    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert(
                    "Error!",
                    "Permission to access location was denied",
                    [
                        { text: "OK" }
                    ]
                );
                return;
            }
            let res = await Location.getCurrentPositionAsync({});
            // console.log(res)
            if (res) {
                const curLoc = [res.coords.longitude, res.coords.latitude]
                setLocation(curLoc);
                setStartDestinationPoints([curLoc, currentOrder.Shop_Location]);
                fetchRoute(curLoc, currentOrder.Shop_Location);
            }
        })();
    }, []);

    //Function to get route from Mapbox
    const fetchRoute = async (soureLoc, desLoc) => {
        const reqOptions = {
            waypoints: [
                { coordinates: soureLoc },
                { coordinates: desLoc },
            ],
            profile: 'driving-traffic',
            geometries: 'geojson',
        };

        const res = await directionsClient.getDirections(reqOptions).send();
        // console.log(res)
        const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
        const duration = Math.round(res.body.routes[0].duration / 60); //Convert time from s->m
        setRoute(newRoute);
        setEstArrTime(duration);
    };

    //Function used to render marker for shop
    const renderAnnotations = () => {
        return (
            startDestinationPoints.map((point, index) => (
                <MapboxGL.PointAnnotation
                    key={`${index}-PointAnnotation`}
                    id={`${index}-PointAnnotation`}
                    coordinate={point}
                >
                    {/* {console.log("draw" + point)} */}
                    <View style={{
                        height: 30,
                        width: 30,
                        backgroundColor: '#00cccc',
                        borderRadius: 50,
                        borderColor: '#fff',
                        borderWidth: 3
                    }}
                    />
                    {/* <View style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', }}>
                        <Image
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                            resizeMode={'contain'}
                            style={{ height: '10%', width: '10%' }}
                            onLoad={() => this.userAnnotationRef.refresh()}
                        />
                    </View> */}
                    <MapboxGL.Callout title={currentOrder.Shop_Name} />
                </MapboxGL.PointAnnotation>
            ))
        );
    }

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Order Tracking</Text>
            <View style={styles.orderInfo}>
                <View style={styles.orderTop}>
                    <View>
                        <Text style={styles.infoHeader}>Estimated Arrival</Text>
                        <Text style={styles.arrivalTime}>{
                            (estArrTime && (
                                (estArrTime - 2).toString() + '-' +
                                (estArrTime + 3).toString()
                            )) + ' Minutes'
                        }
                        </Text>
                    </View>
                    <Image
                        source={icons.orderTracking}
                        style={styles.orderImage}
                    />
                </View>
                <View style={styles.progressBar}>
                    <Progress.Bar size={30} color={COLORS.primary} indeterminate={true} />
                </View>
                <Text style={styles.orderStatus}>{
                    'Your order at ' + currentOrder.Shop_Name + ' is ' +
                    (currentOrder.Status === "Accepted" && "confirmed") ||
                    (currentOrder.Status === "Processing" && "being repaired") ||
                    (currentOrder.Status === "Ready" && "finished")
                }</Text>
            </View>
            <View style={styles.mapView}>
                <View style={styles.mapContainer}>
                    <MapboxGL.MapView
                        style={styles.map}
                        styleURL={MapboxGL.StyleURL.Street}
                        centerCoordinate={myLocation}
                    >
                        <MapboxGL.Camera
                            zoomLevel={4}
                            centerCoordinate={myLocation}
                            followUserLocation={true}
                            animationMode={'flyTo'}
                            animationDuration={0}
                        >
                        </MapboxGL.Camera>
                        {myLocation && renderAnnotations()}
                        <MapboxGL.UserLocation visible={true} />
                        {
                            route && (
                                <MapboxGL.ShapeSource id='shapeSource' shape={route}>
                                    <MapboxGL.LineLayer id='lineLayer' style={{ lineWidth: 5, lineJoin: 'bevel', lineColor: COLORS.primary }} />
                                </MapboxGL.ShapeSource>
                            )
                        }
                    </MapboxGL.MapView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
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
        zIndex: 0,
        marginTop: -60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapContainer: {
        height: '100%',
        width: '100%',
    },
    map: {
        flex: 1
    },
});

export default OrderTracking;