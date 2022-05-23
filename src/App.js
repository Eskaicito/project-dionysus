import './App.css';
import NavBar from './components/NavBar/NavBar';
import Scanlines from './components/Scanlines/Scanlines';
import ItemsList from './components/Itemslist/ItemsList';

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
