import './ItemsDetailContainer.css'
import ItemsDetail from "../ItemsDetail/ItemsDetail";
import { bust } from "../../utils/ProductsMock";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";


const ItemsDetailContainer = () => {
    const [products, setProducts] = useState({})
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(bust)
            }, 1000);
        });
    }
    useEffect(() => {
        getItem()
            .then((Response) => {
                setProducts(Response)
            })

    }, [])


    return (
        <>
        <Container>
            <ItemsDetail data={products} />
        </Container>
        </>
    )
}
export default ItemsDetailContainer;