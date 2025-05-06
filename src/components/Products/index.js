import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


export default function Products({ data, addToCart }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxImage}>
                <Image source={{ uri: data.image || "https://via.placeholder.com/100" }}
                    style={styles.image} />
            </View>

            <View style={styles.boxProduct}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
            </View>

            <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
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
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,

    },

    price: {
        fontSize: 16
    },

    buttonAdd: {
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: "rgb(169,169,169)",
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 4
    },
    boxProduct: {
        width: "50%",
    },

    image: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    boxImage: {
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: "#FFF",
        borderRadius: 8,
        width: 120,
        alignItems: "center"
    },
    buttonText: {
        color: "#000",
        fontSize: 18,
    }
})