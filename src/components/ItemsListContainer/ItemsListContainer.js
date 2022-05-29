import './ItemsListContainer.css'
import ItemsList from '../Itemslist/ItemsList'
import '@mui/material';
import { Container } from "@mui/system";
import { useState, useEffect } from 'react';
import products from '../../utils/ProductsMock';

const ItemsListContainer = () =>{
    const [productos, setProductos] = useState([])
    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
    }
    useEffect(() => {
        getProductos()
            .then((Response) => {
                setProductos(Response)
            })
            .catch((Error) => {
                setProductos("error", Error)
            });
    }, []);

    return(
        <>
        {console.log(productos)}
        <Container>
            <ItemsList productos = {productos}/>
        </Container>
        </>
    )
}
export default ItemsListContainer;