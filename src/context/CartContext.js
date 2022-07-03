import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalSellPrice, setTotalSellPrice] = useState(0)
    const addProductToCart = (product, quantity) => {
        let inCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if (!inCart) {
            product["priceSell"] = quantity * product.price
            product["quantity"] = quantity
            console.log("se agrego", product)
            setCartListItems(cartListItems => [...cartListItems, product])
            setTotalSellPrice(totalSellPrice + product.priceSell)
        } else if(inCart) {
            console.log("producto ya existente")
        }
    }
    const cleanCartProducts = () => {
        setTotalSellPrice(0)
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalSellPrice,
        cleanCartProducts
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;
export { CartProvider }