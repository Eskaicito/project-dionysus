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
import { CartProvider } from './context/CartContext';
import Catalog from './pages/ProductsNav';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/catalog' element={<Catalog />} />
            <Route exact path='/products/:category' element={<Products />} />
            <Route exact path='/product/:id' element={<Detail />} />
            <Route exact path='/gallery' element={<Gallery />} />
            <Route exact path='/cart' element={<CartPage />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
