import ItemsDetailContainer from "../components/ItemsDetailContainer/ItemsDetailContainer"
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useState, useEffect } from "react";

const Detail = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <>
        { loading ? (
            <div className='loader'>
            <PacmanLoader 
            loading={loading} 
            size={50} 
            color={'#F8E71C'}>
            </PacmanLoader>
            </div>
        ) : (
            <ItemsDetailContainer />
        )}
        </>
    )
}
export default Detail;