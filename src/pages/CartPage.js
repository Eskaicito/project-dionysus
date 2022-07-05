import "./Styles/CartPage.css"
import { useContext, useState } from "react"
import CartContext from "../context/CartContext";
import { Link } from 'react-router-dom'
import Modal from "../components/Modal/Modal";
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore';
import db from "../utils/firebaseConfig";

const CartPage = () => {
    const { cartListItems, totalSellPrice, cleanCartProducts } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false);
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map((item) => {
            return {
                id: item.id,
                desc: item.desc,
                cont: item.cont,
                quantity: item.quantity,
                price: item.priceSell
            }
        }),
    })
    const [delivered, setDelivered] = useState()

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        setOrder({ ...order, buyer: formValue })
        saveOrder({ ...order, buyer: formValue })
    }

    const saveOrder = async (newOrder) => {
        const orderFirebase = collection(db, "orders")
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden enviada: ", orderDoc)
        console.log("orden", order)
        setDelivered(orderDoc.id)
    }


    return (
        <>
        <div className="cartPage">
            <h1 style={{ color: "white", fontSize:'50px' }}>CART</h1>
            {cartListItems.map((item) => {
                const { image, desc, id, quantity, price, priceSell } = item;
                return (
                    <>
                        <div className='cart-item' key={id}>
                            <div className='item-img'>
                                <img src={`../${image}`} alt='symbolsoftruth' />
                            </div>
                            <div className='item-desc'>
                                <p>{desc}</p>
                            </div>
                            <div className='item-quantity'>
                                <p>Quantity:</p>
                                <span>{quantity}</span>
                            </div>
                            <div className='item-price'>
                                <p>Price per unit:</p>
                                <span>${price}</span>
                            </div>
                            <div className='item-price'>
                                <p>Total:</p>
                                <span>${priceSell}</span>
                            </div>
                        </div>
                    </>
                )
            })}
            <div className='cart-footer'>
                <div className='details'>
                    <div className='subtotal'>
                        <p> Cart Subtotal:</p>
                        <span>${totalSellPrice}</span>
                    </div>
                    <div className='total'>
                        <p>Cart Total:</p>
                        <span>${totalSellPrice}</span>
                    </div>
                </div>
                <div className="buttons">
                    <div className="button-continue">
                        <Link to={'/catalog'}>
                            <button>
                                CONTINUE SHOPPING
                            </button>
                        </Link>
                    </div>
                    <div className="item-button">
                        <button onClick={()=> cleanCartProducts()}>DELETE CART</button>
                    </div>
                    <div className="item-button">
                        <button onClick={() => setShowModal(true)}>END SHOPPING</button>
                    </div>
                </div>
            </div>
        </div>

            <Modal title={"Your Data"} open={showModal} handleClose={() => setShowModal(false)}>

                {delivered ? (
                    <h2>Order received. Your order ID is {delivered}</h2>
                ) : (<form className="form-content" onSubmit={handleSubmit} >
                    <TextField
                        id="outlined-basic"
                        name="name"
                        label="Name and Surname"
                        variant="outlined"
                        onChange={handleChange}
                        value={formValue.name}
                    />
                    <TextField
                        id="outlined-basic"
                        name="phone"
                        label="Phone Number"
                        variant="outlined"
                        onChange={handleChange}
                        value={formValue.phone}
                    />
                    <TextField
                        id="outlined-basic"
                        name="email"
                        label="Mail"
                        variant="outlined"
                        onChange={handleChange}
                        value={formValue.email}
                    />
                    <button type="submit">Enviar</button>
                </form>
                )}
            </Modal>
        </>
    )
}
export default CartPage;