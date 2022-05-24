import './ItemsListContainer.css'
import ItemsList from '../Itemslist/ItemsList'
import '@mui/material';
import { Container } from "@mui/system";
import { useState, useEffect } from 'react';

const ItemsListContainer = () =>{
    const [productos, setProductos] = useState([])
    const products = [
        {
            image: "statue.gif",
            desc: "Dionysus Bust",
            id: "1",
            stock: "6",
        },
        {
            image: "mac.gif",
            desc: "Old Macintosh",
            id: "2",
            stock: "8",
        },
        {
            image: "arcade.gif",
            desc: "Arcade Machine",
            id: "3",
            stock: "4",
        },
    ];
    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 3000);
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
        <Container>
            <ItemsList productos = {productos}/>
        </Container>
        </>
    )
}
export default ItemsListContainer;