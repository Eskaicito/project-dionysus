import "./ItemCount.css"
import { useState, useContext} from "react";
import CartContext from '../../context/CartContext';

const ItemCount = ({stock, data}) => {
    const [counter, setCounter] = useState(1)
    const {addProductToCart} = useContext(CartContext)
    const addItem = () => {
        if (counter < stock) {
            setCounter(() => counter + 1);
        }
    };
    const substractItem = () => {
        if (counter >= 2) {
            setCounter(() => counter - 1);
        }
    }

    return (
        <div className='counter'>
            <button onClick={substractItem}>-</button>
            <p>{counter}</p>
            <button onClick={addItem}>+</button>
            <button onClick={() => addProductToCart(data, counter)  }>ADD ITEMS TO CART</button>
        </div>
    )
}
export default ItemCount;