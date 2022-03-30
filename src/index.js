import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* import reportWebVitals from './reportWebVitals'; */
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux' /* PROVEER NUESTRA APP */
import { createStore, applyMiddleware } from 'redux'; /* PROVEER UN STORE AL PROVIDER */
import mainReducer from './redux/reducers/mainReducer'
import thunk from 'redux-thunk';  /* VIEWER THUNK */

/* Cuando usamos un Redux Store básico, lo único que puedes hacer son actualizaciones síncronas sencillas por medio 
de una acción. Pero si quieres trabajar con lógica asíncrona para interactuar con el Store, necesitarás algo más. 
Aquí es donde entra redux-thunk.1*/

const reduxStore = createStore(mainReducer,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}> {/* recibe STORE (almacen de datos que engloba nuestra app) */}
    {/* REDUXSTORE = MAINREDUCER */}
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);