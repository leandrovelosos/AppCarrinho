import React, { useState, createContext } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function addItemCart(newItem) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            const updatedCart = cart.map((item, index) => {
                if (index === indexItem) {
                    const newAmount = item.amount + 1;
                    return {
                        ...item,
                        amount: newAmount,
                        total: newAmount * item.price,
                    };
                }
                return item;
            });

            setCart(updatedCart);
            totalResultCart(updatedCart);
            return;
        }

        const data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        };

        const newCart = [...cart, data];
        setCart(newCart);
        totalResultCart(newCart);

    }

    function removeItemCart(product) {
        const indexItem = cart.findIndex(item => item.id === product.id);

        if (cart[indexItem]?.amount > 1) {
            const updatedCart = cart.map((item, index) => {
                if (index === indexItem) {
                    const newAmount = item.amount - 1;
                    return {
                        ...item,
                        amount: newAmount,
                        total: newAmount * item.price,
                    };
                }
                return item;
            });

            setCart(updatedCart);
            totalResultCart(updatedCart);
            return;
        }

        const newCart = cart.filter(item => item.id !== product.id);
        setCart(newCart);
        totalResultCart(newCart);
    }

    function totalResultCart(items) {
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)

        setTotal(result.toFixed(2));
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                removeItemCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;