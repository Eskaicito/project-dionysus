import './Items.css'
import '@mui/material'
import { CardContent, Card, Button} from '@mui/material'
import { useState } from 'react'

const Items = ({ image, desc, stock }) => {
    const [counter, setCounter] = useState(0)
    const addItem = () => {
        if (counter < stock) {
            setCounter(() => counter + 1);
        }
    };
    const substractItem = () => {
        if(counter >= 1){
        setCounter(() => counter - 1);
        }
    }

    return (
        <>
            <Card style={{ backgroundColor: "transparent", color: "white" }}>
                <CardContent>
                    <div className='card-item'>
                        <div>
                            <img src={`./${image}`} alt='card' />
                        </div>
                        <div className='counter'>
                            <button onClick={substractItem}>-</button>
                            <p>{counter}</p>
                            <button onClick={addItem}>+</button>
                            <button>BUY</button>
                        </div>
                        <span>{desc}</span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
export default Items
