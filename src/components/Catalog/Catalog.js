import './Catalog.css'
import '@mui/material'
import { CardContent, Card} from '@mui/material'
import { Link } from 'react-router-dom'

const Catalog = ({ image, desc, title, category}) => {
    
    return (
        <>
            <Card style={{ backgroundColor: "transparent", color: "white" }}>
                <CardContent  >
                    <div className='catalog-item'>
                        <div>
                            <img src={`../${image}`} alt='card' />
                        </div>
                        <h1>{title}</h1>
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
