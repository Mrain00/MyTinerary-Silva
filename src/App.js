import Banner from './img/banner.png'
import './styles/App.css';
import './components/NavBar'
import ResponsiveAppBar from './components/NavBar';
import Carousel from './components/Carousel';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
        <div className='main'>
        <section>
        <h1>MyTinerary</h1>
        <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
        </section>
        <img src={Banner} alt='banner' id='fotomain' />
        </div>
        <div className='carousel_section'>
        <Carousel />    
        </div>
</div>
  );
}

export default App;
