import ReactDOM from 'react-dom'
import App from './App'
import Header from './components/Header';

import './style.module.scss'

ReactDOM.render(
  <div>
    <Header />
    <App />
  </div>,
  document.getElementById("root")
);
