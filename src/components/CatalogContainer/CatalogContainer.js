import CatalogList from '../CatalogList/CatalogList';
import '@mui/material';
import { Container } from "@mui/system";
import { useState, useEffect } from 'react';
//Firestore
import { collection, getDocs } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';


const CatalogContainer = () =>{
    const [catalogs, setCatalogs] = useState([])
    
    const filteredCategory = (array) => {
        array.map( (item) => {
            //eslint-disable-next-line
            if (item) {
                return setCatalogs(catalogs => [...catalogs, item])
            }
        })
    }
    useEffect(() => {
        getProductsFirestore()
            .then((catalogs) => {
                setCatalogs([])
                filteredCategory(catalogs)
            })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProductsFirestore = async () =>{
        const productSnapshot = await getDocs(collection(db, "catalog"));
        //console.log("productSnapshot: ", productSnapshot)
        const productList = productSnapshot.docs.map((doc) =>{
            let product = doc.data()
            product.id = doc.id;
            return product
        })
        return productList
    }

    return (
        <>
            <Container>
                <CatalogList title= {"Catalogs"} catalogs={catalogs} />
            </Container>
        </>
    )
}
export default CatalogContainer