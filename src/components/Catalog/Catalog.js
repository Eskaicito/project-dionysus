import './Catalog.css'
import '@mui/material'
import { CardContent, Card} from '@mui/material'
import { Link } from 'react-router-dom'

const Catalog = ({ image, desc, category}) => {
    
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
                            <Link to={`/products/${category}`}>Details</Link>
                        </button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default Catalog
