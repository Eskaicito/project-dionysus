import './ItemsList.css'
import Items from "../Items/Items";
import '@mui/material';
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const ItemsList = () =>{
    return(
        <Container>
            <Grid className='items-list' container>
                <Grid item md={3}>
                    <Items image='statue.gif' desc='Discover the Dionysian Misteries' />
                </Grid>
                <Grid item md={3}>
                    <Items image='mac.gif' desc='Unveil the sacred texts'/>
                </Grid>
                <Grid item md={3}>
                    <Items image='arcade.gif' desc='Embrace the symbols'/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ItemsList;