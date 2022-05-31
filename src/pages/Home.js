import Scanlines from '../components/Scanlines/Scanlines';
const Home = () => {
    return (
        <>
            <h1 style={{ color: "white" }}>Home</h1>
            <div>
                <img style={{ position: "relative", width: "40vw", height:"50vh" }} src='../chess_pattern.png' alt='dionysus_home'></img>
                <img style={{ position: "absolute", top:"290px", left:"550px",width: "40vw" }} src='../dionysus_98.png' alt='dionysus_home'></img>
                <img style={{ position: "absolute", top:"230px", left:"10px",width: "30vw" }} src='../message_hello.png' alt='dionysus_home'></img>
                <img style={{ position: "absolute", top:"340px", left:"10px",width: "30vw" }} src='../message_welcome.png' alt='dionysus_home'></img>
            </div>
            <Scanlines />
        </>
    )
}
export default Home;