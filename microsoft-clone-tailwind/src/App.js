
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Promo from './components/Promo';
import Slider from './components/Slider';


function App() {

  return (
  <div className='container mx-auto'>
  <Navbar/>
  <Slider/>
  <Promo/>
  <Footer/>
  </div>
  );
}

export default App;
