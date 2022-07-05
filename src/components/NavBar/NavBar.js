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
                            <img src='dionysus_name.png' alt='name_dionysus' />
                        </Link>
                    </li>
                    <li>
                        <button>
                            <Link to={'/about'}>ABOUT</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to={'/catalog'} >CATALOG</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to={'/contact'} >CONTACT</Link>
                        </button>
                    </li>
                    <li>
                        <Cart />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
