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
                    <Items image='statue.gif' desc='Dionysus Bust' stock={6} />
                </Grid>
                <Grid item md={3}>
                    <Items image='mac.gif' desc='Old Macintosh'  stock={8}/>
                </Grid>
                <Grid item md={3}>
                    <Items image='arcade.gif' desc='Arcade Machine' stock={4}/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ItemsList;
