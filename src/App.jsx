import './App.css';

import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';


function App() {
  return (
    <div className='main'>
      <NavBar />
      <Carousel/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
