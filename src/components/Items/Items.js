import './Items.css'
import '@mui/material'
import { CardContent, Card} from '@mui/material'
import { Link } from 'react-router-dom'

const Items = ({ image, desc, id, price}) => {
    
    return (
        <>
            <Card style={{ 
                backgroundColor: "transparent", 
                color: "white",
                marginLeft: "2rem",
                marginRight: "2rem",
                width:"20vw"
                }}>
                <CardContent >
                    <div className='card-item'>
                        <div>
                            <img src={`../${image}`} alt='card' />
                        </div>
                        <h2>{desc}</h2>
                        <span>Price: ${price}</span>
                        <button>
                            <Link to={`/product/${id}`}>DETAILS</Link>
                        </button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default Items
