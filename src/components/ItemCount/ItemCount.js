import "./ItemCount.css"
import { useState, useContext} from "react";
import CartContext from '../../context/CartContext';

const ItemCount = ({stock, data}) => {
    const [quantity, setQuantity] = useState(1)
    const {addProductToCart} = useContext(CartContext)
    const addItem = () => {
        if (quantity < stock) {
            setQuantity(() => quantity + 1);
        }
    };

    return (
        <div className='counter'>
            <p>{quantity}</p>
            <button onClick={addItem}>+</button>
            <button onClick={() => addProductToCart(data, quantity)}>ADD ITEMS TO CART</button>
        </div>
    )
}
export default ItemCount;