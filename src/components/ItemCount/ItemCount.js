import "./ItemCount.css"
import { useState, useContext} from "react";
import CartContext from '../../context/CartContext';
import Modal from "../Modal/Modal";

const ItemCount = ({stock, data}) => {
    const [quantity, setQuantity] = useState(1)
    const {addProductToCart} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false);
    const addItem = () => {
        if (quantity < stock) {
            setQuantity(() => quantity + 1);
        }
    };
    return (
        <>
        <div className='counter'>
            <p>{quantity}</p>
            <button onClick={addItem}>+</button>
            <button onClick={() => {addProductToCart(data, quantity); setShowModal(true);}}>ADD ITEMS TO CART</button>
        </div>


        <Modal title={"SUCCESS!"} open={showModal} handleClose={() => setShowModal(false)}>
            <p>ITEMS ADDED TO THE CART!</p>
        </Modal>
        </>
    )
}
export default ItemCount;