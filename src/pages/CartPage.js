import "./CartPage.css"
import { useContext, useState } from "react"
import Scanlines from "../components/Scanlines/Scanlines";
import CartContext from "../context/CartContext";
import { Link } from 'react-router-dom'

const CartPage = () => {
    const { cartListItems } = useContext(CartContext)
    const [show, showItem] = useState(true)
    return (
        <>
            <h1 style={{ color: "white" }}>CART</h1>
            {show && cartListItems.map((item) => {
                const { image, desc, cont, id } = item;
                return (
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
                    </div>
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
            <Scanlines />
        </>
    )
}
export default CartPage;