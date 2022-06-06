import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Detail from './pages/Detail';
import CartPage from './pages/CartPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path= '/about' element={<About />} />
          <Route exact path= '/products/:category' element={<Products />}/>
          <Route exact path= '/product/:id' element={<Detail />}/>
          <Route exact path= '/gallery' element={<Gallery />}/>
          <Route exact path='/cart' element={<CartPage />}/>
          <Route exact path= '*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
