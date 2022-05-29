import './Items.css'
import '@mui/material'
import { CardContent, Card} from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Items = ({ image, desc, stock, id}) => {
    
    return (
        <>
            <Card style={{ backgroundColor: "transparent", color: "white" }}>
                <CardContent>
                    <div className='card-item'>
                        <div>
                            <img src={`./${image}`} alt='card' />
                        </div>
                        <ItemCount stock= {stock}/>
                        <span>{desc}</span>
                        <button>
                            <Link to={`/products/${id}`}>Details</Link>
                        </button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default Items
