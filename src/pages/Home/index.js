import { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Products from "../../components/Products";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../contexts/CartContext";

export default function Home() {
    const { cart, addItemCart } = useContext(CartContext);
    const navigation = useNavigation();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                // Adaptar a estrutura para seu app
                const mappedProducts = response.data.map(item => ({
                    id: String(item.id),
                    name: item.title,
                    price: item.price,
                    image: item.image
                   
                }));
                setProducts(mappedProducts);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    function handleAddCart(item) {
        addItemCart(item);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de Produtos</Text>

                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={() => navigation.navigate("Cart")}
                >
                    {cart.length >= 1 && (
                        <View style={styles.dot}>
                            <Text style={styles.dotText}>{cart.length}</Text>
                        </View>
                    )}
                    <FontAwesome name="shopping-cart" size={30} color="#000" />
                </TouchableOpacity>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <FlatList
                    style={styles.item}
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Products data={item} addToCart={() => handleAddCart(item)} />
                    )}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingEnd: 14,
        paddingStart: 14
    },
    cartContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 64,
        marginBottom: 24
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    dot: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        width: 20,
        height: 20,
        borderRadius: 12,
        position: "absolute",
        zIndex: 99,
        bottom: -2,
        left: -4
    },
    dotText: {
        fontSize: 12,
        color: "#FFF"
    },
    cartButton: {
        position: "relative"
    },
    item: {
        marginBottom: 20
    }
});