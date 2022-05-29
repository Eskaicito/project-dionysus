import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Gallery from './pages/Gallery';
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path= '/products' element={<About />} />
          <Route exact path= '/about' element={<Products />}/>
          <Route exact path= '/gallery' element={<Gallery />}/>
          <Route exact path= '*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
