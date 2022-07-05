import { useState, useEffect } from "react";
import PacmanLoader from 'react-spinners/PacmanLoader';

const Home = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
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
                    <h1 style={{ color: "white", fontSize: '50px' }}>HOME</h1>
                    <div>
                        <img style={{ position: "relative", width: "40vw", height: "50vh" }} src='../chess_pattern.png' alt='chess_pattern'></img>
                        <img style={{ position: "absolute", top: "230px", left: "550px", width: "40vw" }} src='../dionysus_98.png' alt='dionysus_home'></img>
                        <img style={{ position: "absolute", top: "230px", left: "10px", width: "30vw" }} src='../message_hello.png' alt='hello_message'></img>
                        <img style={{ position: "absolute", top: "340px", left: "10px", width: "30vw" }} src='../message_welcome.png' alt='welcome_message'></img>
                        <img style={{ position: "absolute", top: "200px", right: "5px", width: "20vw", height: "60vh" }} src='../column_project.png' alt='column_1'></img>
                        <img style={{ position: "absolute", top: "170px", right: "50px", width: "20vw", height: "60vh" }} src='../column_project.png' alt='column_2'></img>
                    </div>
                </div>
            )}
        </>
    )
}
export default Home;