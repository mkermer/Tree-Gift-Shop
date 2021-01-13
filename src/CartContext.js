import React, {useState, createContext} from 'react';
// import tree from './tree'

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])

        const addToCart = (e) => {
    setCart([...cart, { ...e }])
  }

    const removeFromCart = (e) => {
        setCart(
            cart.filter((product) => product !== e)
        )
    }
    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>{props.children}</CartContext.Provider>
    )
}