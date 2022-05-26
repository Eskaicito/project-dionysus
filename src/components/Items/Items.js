import './Items.css'
import '@mui/material'
import { CardContent, Card} from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'

const Items = ({ image, desc, stock}) => {
    
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
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default Items
