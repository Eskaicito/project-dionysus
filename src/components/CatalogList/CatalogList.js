import Catalog from "../Catalog/Catalog";
import './CatalogList.css'
import '@mui/material';
import { Grid } from "@mui/material";

const CatalogList = ({ catalogs }) => {
    return (
        <>
            <Grid className="catalog-list" container>
                {
                    catalogs.map(({ image, desc, category, id, title }) => {
                        return (
                            <Grid item md={3} key={id}>
                                <Catalog image={image} desc={desc} id={id} category={category} title={title}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
export default CatalogList