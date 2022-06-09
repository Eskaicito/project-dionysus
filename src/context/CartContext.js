import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([])
    const addProductToCart = (product) =>{
        let inCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!inCart){
            console.log("se agrego", product)
            setCartListItems(cartListItems => [...cartListItems, product])

        }
        console.log("producto ya existente")
    }
    const data = {
        cartListItems,
        addProductToCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;
export { CartProvider }