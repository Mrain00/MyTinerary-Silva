import React, { useEffect } from 'react';
import userActions from './redux/actions/userActions'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './components/NavBar';
import ResponsiveAppBar from './components/NavBar';
import Home from './components/home/home'
import Footer from './components/Footer/Footer'
import Cities from './components/Cities/cities';
import Detalles from './components/Detalles/detalles'
import Scroll from './components/Scroll'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignUp/SignIn'
import { connect } from 'react-redux'
import Snack from './components/snackbar';
function App(props) {
  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      const token = localStorage.getItem('token')
      props.VerificarToken(token)
    }
    // eslint-disable-next-line
  }, [])
  return (
    <BrowserRouter>
      <Scroll />
      <Snack/>
      <ResponsiveAppBar style={{ zInedx: 1 }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/detalles/:id' element={<Detalles />} />
        {!props.user && (
          <>
            {/*SI PROPS.USER ESTA FALSE, ME RENDERIZA ESTOS COMPONENTES  */}
            <Route path='/SignUp' element={<SignUp />} />           {/* TRUE = NO LO RENDERIZA */}
            <Route path='/SignIn' element={<SignIn />} />              {/* FALSE = LO RENDERIZA */}
            {/* SI ESTA TRUE NO ME RENDERIZA Y ME DEVUELVE A  */}
          </>)  }
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  }
}
const mapDispatchToProps = {
  VerificarToken: userActions.VerificarToken,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);