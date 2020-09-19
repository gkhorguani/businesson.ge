/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Careers from './pages/careers'
import Contact from './pages/contact'

import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
