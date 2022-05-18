import './App.css';
import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import Scanlines from './components/scanlines/Scanlines';
import ItemsList from './components/itemslist/ItemsList';

function App() {
  return (
    <div className="App">
      <Scanlines />
      <NavBar />
      <Banner />
      <ItemsList />
    </div>
  );
}

export default App;
