import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native';

import { COLORS, icons, images } from "../../constants";



const CheckoutTags = ({props}) => {
    const { name, description, item_note, count, price, image, ...item} = props;
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modelHeader}>
                            <Text style={styles.modalText}>Note</Text>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Image source={icons.close} style={styles.button}/>
                            </Pressable>
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                value={item_note}
                                placeholder="Have no note"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            <Image 
                source={image}
                style={styles.image}
                resizeMode="contain"
                resizeMethod="scale"
            />
            <View style={styles.info}>
                <View style={styles.info1}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.countPart}>
                        <Text
                            style={{
                                fontSize: 15,
                                paddingHorizontal: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginHorizontal: 3,
                            }}
                        >X {count}</Text>
                    </View>
                </View>
                <View style={styles.info2}>
                    <Text style={styles.price}>{price * count}đ</Text>
                        <TouchableOpacity
                            onPress={() => {setModalVisible(true)}}
                        >
                        <Text
                            style={{
                                color: 'blue',
                                textDecorationLine: 'underline',
                                fontWeight: '500',
                                fontSize: 14,
                            }}
                        >Note</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 5,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary,
    },
    image :{
        width: 80,
        height: 80,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: '78%',
        height: '100%',
    },
    info1: {
        justifyContent: 'space-between',
        width: '70%',
    },
    info2: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flex: 1,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    description: {
        fontSize: 15,
        fontWeight: '300',
    },
    price: {
        fontSize: 17,
        fontWeight: '400',
        alignSelf:"flex-end",
       
    },
    countPart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 2,
        width: 90,
    },
    // Modal Style
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        height: 200,
        width: '80%',
        alignItems: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modelHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    button: {
        width: 30,
        height: 30,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.darkgray,
        width: '100%',
        height: '80%',
        padding: 5,
    },
    sendButton: {
        backgroundColor: COLORS.primary,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-end'
    }
});



export default CheckoutTags;