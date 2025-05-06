import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CardItem({ data, addAumount, removeAmount }) {

    const [amount, setAmount] = useState(data?.amount);

    function handleIncrease() {
        addAumount();
        setAmount(item => item + 1);
    }

    function handleDecrease() {
        removeAmount()

        if (amount === 0) {
            setAmount(0);
            return;
        }

        setAmount(item => item - 1)
    }

    return (
        <View style={styles.container}>

            <View style={styles.boxImage}>
                <Image source={{ uri: data.image }} style={styles.image} />
            </View>

            <View style={styles.boxProduct}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>



            <View style={styles.amountContainer}>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleDecrease}>
                    <Text style={styles.btnMM} >-</Text>
                </TouchableOpacity>
                <Text style={styles.amount}>{amount}</Text>
                <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
                    <Text style={styles.btnMM}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(220, 220, 220)",
        borderRadius: 8,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 14,
        paddingTop: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "transparent",
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        width: "90%"
    },
    price: {
        fontSize: 16
    },
    amountContainer: {
        marginTop: 14,
        marginBottom: 14,
        flexDirection: "row",
        alignItems: "center",
    },
    buttonAdd: {
        backgroundColor: "rgb(169,169,169)",
        padding: 6,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 2,
    },
    amount: {
        marginLeft: 14,
        marginRight: 14
    },
    btnMM: {
        fontSize: 18,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: "center",
        flex: 1,
    },
    boxImage: {
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: "#FFF",
        borderRadius: 8,
        alignItems: "center",
        marginRight: "5%"
    },
    boxProduct: {
        width: "50%",
    },
})