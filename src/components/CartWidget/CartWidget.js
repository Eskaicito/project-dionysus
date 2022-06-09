import './CartWidget.css'
import Menu from '@mui/material/Menu';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';

const Cart = () => {
    const { cartListItems } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='cart'>
            <img src='../hermes_symbol.png' alt='commerce-symbol' onClick={handleClick}></img>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-cart' >
                    {cartListItems.length === 0 && (
                        <>
                        <p>NOTHING HERE</p>
                        </>
                    )}
                    {cartListItems.map((item) => {
                        return (
                            <div className='cart-product' key={item.id}>
                                <div className='cart-prod__image'>
                                    <img src={`/${item.image}`} alt="prod carrito" />
                                </div>
                                <div >
                                    <span>{item.desc}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Menu>
        </div>
    )
}
export default Cart;
