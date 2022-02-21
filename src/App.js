import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './components/NavBar';
import ResponsiveAppBar from './components/NavBar';
import Home from './components/home/home'
import Footer from './components/Footer/Footer'
import Cities from './components/Cities/cities';
function App() {
  return (
      <BrowserRouter>
      <ResponsiveAppBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cities' element={<Cities/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
