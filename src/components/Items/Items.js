import './Items.css'
import '@mui/material'
import { CardContent, Card} from '@mui/material'
import { Link } from 'react-router-dom'

const Items = ({ image, desc, id}) => {
    
    return (
        <>
            <Card style={{ backgroundColor: "transparent", color: "white" }}>
                <CardContent >
                    <div className='card-item'>
                        <div>
                            <img src={`../${image}`} alt='card' />
                        </div>
                        <span>{desc}</span>
                        <button>
                            <Link to={`/product/${id}`}>Details</Link>
                        </button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default Items
