import Scanlines from '../components/Scanlines/Scanlines';
import ItemsListContainer from '../components/ItemsListContainer/ItemsListContainer';
import ItemsDetailContainer from '../components/ItemsDetailContainer/ItemsDetailContainer';

const Home = () => {
    return (
        <>
            <Scanlines />
            <ItemsListContainer />
            <ItemsDetailContainer />
        </>
    )
}
export default Home;