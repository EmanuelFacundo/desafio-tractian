import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './app'
import Header from './components/Header';

import reducers from './reducers'

import './style.module.scss'

const store = applyMiddleware(thunk, promise)(createStore)(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <App />
  </Provider>,
  document.getElementById("root")
);
