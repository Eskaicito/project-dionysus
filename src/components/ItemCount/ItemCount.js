import "./ItemCount.css"
import { useState } from "react";

const ItemCount = ({stock, setShowButton}) => {
    const [counter, setCounter] = useState(0)
    const addItem = () => {
        if (counter < stock) {
            setCounter(() => counter + 1);
        }
    };
    const substractItem = () => {
        if (counter >= 1) {
            setCounter(() => counter - 1);
        }
    }

    return (
        <div className='counter'>
            <button onClick={substractItem}>-</button>
            <p>{counter}</p>
            <button onClick={addItem}>+</button>
            <button onClick={() => setShowButton(true)}>ADD ITEMS</button>
        </div>
    )
}
export default ItemCount;