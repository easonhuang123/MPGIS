import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './styles/base.css'
import { Provider } from 'mobx-react'
import mapStore from './store/mapStore'

const stores = {
    mapStore
  }
  
// For easier debugging
window._____APP_STATE_____ = stores

ReactDOM.render((
    <Provider {...stores}>
      <App />
    </Provider>
), document.getElementById('root'))
