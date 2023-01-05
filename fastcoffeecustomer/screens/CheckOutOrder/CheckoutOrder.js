import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { icons, COLORS } from "../../constants";
import CustomButton from "../../components/CustomButton/CustomButton";
import CheckoutTags from "../../components/CheckoutTag/CheckoutTag";

const CheckoutOrder = ({route}) => {
    const { data, total } = route.params;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [note, setNote] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: true,
            headerStyle: ({height: 50}),
            headerTitle: "Your Order",
            headerTitleAlign: 'left',
            headerTitleStyle: ({color: COLORS.primary, fontSize: 30, fontWeight: 'bold'}),
            headerRight: () => (
                <TouchableOpacity 
                    onPress={() => {setModalVisible(true)}}
                    style={styles.addNoteButton}
                >
                    <Image 
                        source={icons.editNote}
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '500',
                        }}
                    >Note</Text>
                </TouchableOpacity>
            )
        });
        
    }, [navigation]);

    const onConfirmPressed = () =>{
        navigation.navigate('OrderTrackingPage');
    }



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
                            <Text style={styles.modalText}>Add Note</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Image source={icons.close} style={styles.button}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                value={note}
                                onChangeText={setNote}
                                placeholder="Add some note..."
                            />
                        </View>
                        <TouchableOpacity style={styles.sendButton} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    color: COLORS.white
                                }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <ScrollView 
                style={styles.scrollView} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{alignItems: 'center'}}
            >
            {
                data.map((item, index) => {
                    return (
                        <CheckoutTags key={index} props={item}/>
                    )
                })
            }
            </ScrollView>
            <View style={styles.confirmButton}>
                <Text
                    style={styles.total}
                >Total: {total}đ</Text>
                <CustomButton onPress={onConfirmPressed} text="Confirm Order" />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    scrollView: {
        width: '95%',
        padding: 10,
        // marginBottom: 100
    },
    confirmButton: {
        width: '95%',
        marginBottom: 50,
    },
    addNoteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        padding: 5,
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
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
        justifyContent: 'space-between',
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
        height: '60%',
        padding: 5,
    },
    sendButton: {
        backgroundColor: COLORS.primary,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-end'
    }
  });

export default CheckoutOrder;