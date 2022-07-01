import './ItemsDetail.css'
import { Grid } from "@mui/material";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemsDetail = ({ data, counter }) => {
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
                        <ItemCount stock={data.stock} data={data} counter={counter}/>
                        <Link to={`/cart`} ><button>GO TO CART</button></Link>
                        {console.log(counter)}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default ItemsDetail;