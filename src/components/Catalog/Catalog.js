import './Catalog.css'
import '@mui/material'
import { CardContent, Card} from '@mui/material'
import { Link } from 'react-router-dom'

const Catalog = ({ image, desc, category}) => {
    
    return (
        <>
            <Card className='mixin-set-dom' style={{ backgroundColor: "transparent", color: "white" }}>
                <CardContent data-augmented-ui="tl-2-clip-x br-2-clip-x" >
                    <div className='card-item'>
                        <div>
                            <img src={`./${image}`} alt='card' />
                        </div>
                        <span>{desc}</span>
                        <button>
                            <Link to={`/products/${category}`}>Visit</Link>
                        </button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default Catalog
