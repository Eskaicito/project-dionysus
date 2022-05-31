import 'augmented-ui'
import './NavBar.css'
import Cart from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='mixin-set'>
            <nav data-augmented-ui="tl-2-clip-x br-2-clip-x" className='navbar'>
                <ul>
                    <li>
                        <Link to={'/'}>
                            <img src='dionysus_name.png'/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            <button>About</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/products'}>
                            <button>Products</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/gallery'}>
                            <button>Gallery</button>
                        </Link>
                    </li>
                </ul>
                <Cart />
            </nav>
        </div>
    )
}

export default NavBar
