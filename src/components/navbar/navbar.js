import 'augmented-ui'
import './NavBar.css'

const NavBar = () => {
    return(
        <div className='mixin-set'>
            <nav data-augmented-ui="inlay tl-2-clip-x br-2-clip-x" className='navbar'>
                <ul>
                    <li>
                        <button>About</button>
                    </li>
                    <li>
                        <button>Articles</button>
                    </li>
                    <li>
                        <button>Shadow Gallery</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 

export default NavBar