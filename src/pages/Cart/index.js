import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CardItem from "../../components/CardItem";

export default function Cart() {
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={() => <View style={styles.box}>
                    <Text style={styles.cartvazio}>Carrinho Vazio</Text>
                    </View>}
                renderItem={({ item }) => (
                    <CardItem
                        data={item}
                        addAumount={() => addItemCart(item)}
                        removeAmount={() => removeItemCart(item)}
                    />
                )}
                ListFooterComponent={() =>
                    cart.length > 0 ? (
                        <View style={styles.box}>
                            <Text style={styles.total}>Total: R$ {total}</Text>
                        </View>
                    ) : null
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    },
    total: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 24,
        marginTop: 12
    },
    cartvazio: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 24,
        marginTop: 24

    },
    box: {
        alignItems: "center"
    }
})