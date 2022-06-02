import './ItemsListContainer.css'
import ItemsList from '../Itemslist/ItemsList'
import '@mui/material';
import { Container } from "@mui/system";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../utils/ProductsMock';

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

    const getProductos = () => {
        return new Promise((resolve, reject) => {
                resolve(products);
        });
    }


    useEffect(() => {
        getProductos()
            .then((Response) => {
                setProductos([])
                filteredCategory(Response)
            })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);


    return (
        <>
            <Container>
                <ItemsList title= {"Productos"}productos={productos} />
            </Container>
        </>
    )
}
export default ItemsListContainer;