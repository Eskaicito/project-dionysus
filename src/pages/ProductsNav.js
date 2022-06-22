import Catalog from '../components/Catalog/Catalog';
import CatalogList from '../components/CatalogList/CatalogList';
import Scanlines from '../components/Scanlines/Scanlines';
const ProductsNav = () => {
    return (

        <>
            <h1 style={{ color: "white" }}>Catalog</h1>
            <CatalogList />
            <Scanlines />
        </>
    )
}
export default ProductsNav;
