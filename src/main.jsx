import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "animate.css/animate.compat.css";
import { Provider } from 'react-redux';
import configureStore from './redux/store/index.js';
import App from './App.jsx';


const store = configureStore();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* <StrictMode> */}
    <App />
  {/* </StrictMode>, */}
  </Provider>
)