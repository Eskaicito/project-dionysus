import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";


const Loader = (loading, setLoading) => {
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])
    return(
        <PacmanLoader loading={loading} setLoading={setLoading}></PacmanLoader>
    )
}
export default Loader

