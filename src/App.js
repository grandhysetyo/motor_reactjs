import React, { Component } from 'react'
import {
  BrowserRouter as Router,  
  Route  
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './config/redux';

import './assets/style/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import Navbar from './components/navbar/navbar';
import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import SearchResult from './pages/SearchResult/index';
import Footer from './components/footer/footer';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        
          <Navbar />       
          <Route path="/" exact component={Home}/>
          <Route path="/search" exact component={SearchResult}/>
          <Route path="/detail" exact component={Detail}/>
          <Footer />      
        </Router>
    </Provider>
    )
  }
}
export default App;
