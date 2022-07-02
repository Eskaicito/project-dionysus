import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([])
    const [quantity, setQuantity] = useState(0)
      const addProductToCart = (product, quantityProduct) =>{
        let inCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!inCart){
            console.log("se agrego", product)
            setCartListItems(cartListItems => [...cartListItems, product])
            setQuantity(quantity => quantity + quantityProduct)
            
        }else{ 
        console.log("producto ya existente")
        }
    }
    const data = {
        cartListItems,
        addProductToCart,
        quantity

    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;
export { CartProvider }