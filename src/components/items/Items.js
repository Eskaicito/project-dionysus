import './Items.css'
import '@mui/material'
import { CardContent, Card} from '@mui/material'

const Items = ({image, desc}) =>{
    return(
        <>
        <Card style={{backgroundColor: "transparent", color: "white"}}>
            <CardContent>
            <div className='card-item'>
                <div>
                    <img src={`./${image}`} />
                </div>
                <span>{desc}</span>
            </div>
            </CardContent>
        </Card>
        </>
    )
}
export default Items