import './ItemsList.css'
import Items from "../Items/Items";
import '@mui/material';
import { Grid } from "@mui/material";

const ItemsList = ({productos}) => {
    return (
        <>
                <Grid className='items-list' container>
                    {
                        productos.map(({image, desc, id, stock, price}) => {
                            return (
                                <Grid item md={4} key = {id}>
                                    <Items image={image} desc={desc} stock={stock} id={id} price={price} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
        </>
    )
}
export default ItemsList;
