import './ItemsList.css'
import Items from "../Items/Items";
import '@mui/material';
import { Grid } from "@mui/material";

const ItemsList = ({productos}) => {
    return (
        <>
                <Grid className='items-list' container>
                    {
                        productos.map((producto) => {
                            const {image, desc, id, stock} = producto;
                            return (
                                <Grid item md={3} key = {id}>
                                    <Items image={image} desc={desc} stock={stock} id={id} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
        </>
    )
}
export default ItemsList;
