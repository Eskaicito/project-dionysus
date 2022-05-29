import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Detail from './pages/Detail';
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path= '/about' element={<About />} />
          <Route exact path= '/products' element={<Products />}/>
          <Route exact path= '/products/:id' element={<Detail />}/>
          <Route exact path= '/gallery' element={<Gallery />}/>
          <Route exact path= '*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
