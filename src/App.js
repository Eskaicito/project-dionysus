import './App.css';
import NavBar from './components/NavBar/NavBar';
import Scanlines from './components/Scanlines/Scanlines';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemsDetailContainer from './components/ItemsDetailContainer/ItemsDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Scanlines />
      <ItemsListContainer />
      <ItemsDetailContainer />
    </div>
  );
}

export default App;
