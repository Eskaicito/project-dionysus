import './App.css';
import NavBar from './components/NavBar/NavBar';
import Scanlines from './components/Scanlines/Scanlines';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Scanlines />
      <ItemsListContainer />
    </div>
  );
}

export default App;
