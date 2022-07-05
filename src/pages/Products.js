import ItemsListContainer from '../components/ItemsListContainer/ItemsListContainer';
import { useState, useEffect } from "react";
import PacmanLoader from 'react-spinners/PacmanLoader';
const Products = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <>
            {loading ? (
                <div className='loader'>
                    <PacmanLoader
                        loading={loading}
                        size={50}
                        color={'#F8E71C'}>
                    </PacmanLoader>
                </div>
            ) : (
                <div>
                    <h1 style={{ color: "white", fontSize: '50px' }}>PRODUCTS</h1>
                    <ItemsListContainer />
                </div>
            )}
        </>
    )
}
export default Products;
