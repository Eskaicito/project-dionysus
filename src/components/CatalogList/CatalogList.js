import Catalog from "../Catalog/Catalog";
import './CatalogList.css'
import '@mui/material';
import { Grid } from "@mui/material";

const CatalogList = ({ catalogs }) => {
    return (
        <>
            <Grid container>
                {
                    catalogs.map(({ image, desc, category, id }) => {
                        return (
                            <Grid key={id}>
                                <Catalog image={image} desc={desc} id={id} category={category} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
export default CatalogList