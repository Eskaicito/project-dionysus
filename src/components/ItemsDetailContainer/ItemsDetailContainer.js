import ItemsDetail from "../ItemsDetail/ItemsDetail";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';


const ItemsDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    /*const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product)
            }, 1000);
        });
    }*/

    useEffect(() => {
        getProduct()
            .then((product) => {
                setProduct(product)
            })
    }, [])

    const getProduct = async () =>{
        const docRef = doc(db, "products", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }

    /*const productId = productos.find((product) => {
        return product.id == id
    })*/


    return (
        <>
            <Container>
                <ItemsDetail data={product} />
            </Container>
        </>
    )
}
export default ItemsDetailContainer;