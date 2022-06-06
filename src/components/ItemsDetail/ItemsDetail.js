import './ItemsDetail.css'
import { Grid } from "@mui/material";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ItemsDetail = ({ data }) => {
    const [showButton, setShowButton] = useState(false)
    return (
        <>
            <Grid container>
                <Grid item md={6}>
                    <div className='bust'>
                        <img src={`../${data.image}`} alt='symbolsoftruth'></img>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className='detailList'>
                        <div className='detail'>
                            <h1>{data.desc}</h1>
                            <h3>Stock: {data.stock}</h3>
                            <p>{data.cont}</p>
                        </div>
                        {!showButton ?
                            <ItemCount stock={data.stock} setShowButton={setShowButton} />
                            :
                            <Link to={`/cart`} ><button>END SHOPPING</button></Link>
                        }
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default ItemsDetail;