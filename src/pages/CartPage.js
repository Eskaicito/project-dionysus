import "./CartPage.css"
import { useContext, useState } from "react"
import Scanlines from "../components/Scanlines/Scanlines";
import CartContext from "../context/CartContext";
import { Link } from 'react-router-dom'
import Modal from "../components/Modal/Modal";
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore';
import db from "../utils/firebaseConfig";

const CartPage = () => {
    const { cartListItems, quantity } = useContext(CartContext)
    const [show, showItem] = useState(true)
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
            }
        }),
        quantity: quantity,
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
        setDelivered(orderDoc.id)
    }


    return (
        <>
            {console.log("order", order)}
            <h1 style={{ color: "white" }}>CART</h1>
            {show && cartListItems.map((item) => {
                const { image, desc, cont, id } = item;
                return (
                    <>
                        {console.log(item.counter)}
                        <div className='cart-item' key={id}>
                            <div className='item-img'>
                                <img src={`../${image}`} alt='symbolsoftruth' />
                            </div>
                            <div className='item-name'>
                                <p>{desc}</p>
                            </div>
                            <div className='item-desc'>
                                <p>{cont}</p>
                            </div>
                            <div>
                                <p>{quantity}</p>
                            </div>
                        </div>
                    </>
                )
            })}
            <div className="button-continue">
                <Link to={'/products/vaporwave'}>
                    <button>
                        CONTINUE SHOPPING
                    </button>
                </Link>
            </div>
            <div className="item-button">
                <button onClick={() => showItem(!show)}>
                    {show === true ? 'DELETE CART' : 'UNDO DELETE'}
                </button>
            </div>
            <div className="item-button">
                <button onClick={() => setShowModal(true)}>END SHOPPING</button>
            </div>

            <Modal title={"Your Data"} open={showModal} handleClose={() => setShowModal(false)}>

                {delivered ? (
                    <h2>Order received. Your order ID is {delivered}</h2>
                ) : (<form className="form-content" onSubmit={handleSubmit} >
                    <TextField
                        id="outlined-basic"
                        name="name"
                        label="Nombre y Apellido"
                        variant="outlined"
                        onChange={handleChange}
                        value={formValue.name}
                    />
                    <TextField
                        id="outlined-basic"
                        name="phone"
                        label="Telefono"
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
            <Scanlines />
        </>
    )
}
export default CartPage;