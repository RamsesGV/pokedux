import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { pokemonsReducer } from './reducers/pokemons.js'
import { Provider } from 'react-redux'
import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import { logger} from './middlewares/index.js'
import {compose} from 'redux'
import thunk from 'redux-thunk'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhacers =  composeAlt( applyMiddleware(thunk,logger))
const store =  createStore (pokemonsReducer, composeEnhacers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
