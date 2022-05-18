import './App.css';
import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import Scanlines from './components/scanlines/Scanlines';

function App() {
  return (
    <div className="App">
      <Scanlines />
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
