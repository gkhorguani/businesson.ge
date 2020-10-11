/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Offer from './pages/offer'
import Careers from './pages/careers'
import Contact from './pages/contact'
import PrivacyPolicy from './pages/privacy_policy'

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
        <Route path="/offer/:id" component={Offer} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route component={Footer} />
      </Router>
    </>
  );
}

export default App;
