import './ItemsDetailContainer.css'
import ItemsDetail from "../ItemsDetail/ItemsDetail";
import productos from "../../utils/ProductsMock";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { useParams } from 'react-router-dom';


const ItemsDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product)
            }, 1000);
        });
    }
    useEffect(() => {
        getItem()
            .then((Response) => {
                setProduct(productId)
            })
    }, [])

    const productId = productos.find((product) => {
        return product.id == id
    })


    return (
        <>
            <Container>
                <ItemsDetail data={product} />
            </Container>
        </>
    )
}
export default ItemsDetailContainer;