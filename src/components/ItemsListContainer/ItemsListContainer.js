import './ItemsListContainer.css'
import ItemsList from '../Itemslist/ItemsList'
import '@mui/material';
import { Container } from "@mui/system";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Firestore
import { collection, getDocs } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

const ItemsListContainer = () => {
    const [productos, setProductos] = useState([])
    const { category } = useParams();
    
    const filteredCategory = (array) => {
        array.map( (item) => {
            //eslint-disable-next-line
            if (item.category == category) {
                return setProductos(productos => [...productos, item])
            }
        })
    }

    /*const getProductos = () => {
        return new Promise((resolve, reject) => {
                resolve(products);
        });
    }*/


    useEffect(() => {
        getProductsFirestore()
            .then((productos) => {
                console.log("productos", productos)
                setProductos([])
                filteredCategory(productos)
            })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    const getProductsFirestore = async () =>{
        const productSnapshot = await getDocs(collection(db, "products"));
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
                <ItemsList title= {"Productos"}productos={productos} />
            </Container>
        </>
    )
}
export default ItemsListContainer;