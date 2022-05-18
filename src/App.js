import './App.css';
import NavBar from './components/navbar/NavBar';
import Scanlines from './components/scanlines/Scanlines';
import ItemsList from './components/itemslist/ItemsList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Scanlines />
      <ItemsList />
    </div>
  );
}

export default App;
