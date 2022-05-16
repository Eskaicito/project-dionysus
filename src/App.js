import './App.css';
import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="App">
      <section className='header'>
        <NavBar />
        <Banner />
      </section>
    </div>
  );
}

export default App;
