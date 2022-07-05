import CatalogContainer from '../components/CatalogContainer/CatalogContainer';
import { useState, useEffect } from "react";
import PacmanLoader from 'react-spinners/PacmanLoader';
const Catalog = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
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
                    <h1 style={{ color: "white", fontSize: '50px' }}>CATALOG</h1>
                    <CatalogContainer />
                </div>
            )}
        </>
    )
}
export default Catalog;
