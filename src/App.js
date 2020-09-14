/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
// import './App.css';

import Home from './pages/home'
import Footer from './components/footer'

function App() {
  return (
    <>
      <header id="header" className="header header-layout-type-header-2rows">
        <div className="header-top ">
          <div className="container">
            <div className="row">
              <div className="col-xl-auto header-top-left align-self-center text-center text-xl-left">
                <ul className="element contact-info">
                  <li className="contact-phone"><i className="fa fa-phone font-icon sm-display-block"></i> Tel: +440-98-5298</li>
                  <li className="contact-email"><i className="fa fa-envelope-o font-icon sm-display-block"></i> info@example.com</li>
                  <li className="contact-address"><i className="fa fa-map-o font-icon sm-display-block"></i> 121 King Street, Melbourne</li>
                </ul>
              </div>
              <div className="col-xl-auto ml-xl-auto header-top-right align-self-center text-center text-xl-right">
                <div className="element">
                  <ul className="header-top-nav list-inline">
                    <li className="menu-item"><a title="Home" className="menu-item-link" href="#"><strong>Home</strong></a></li>
                    <li className="menu-item"><a title="Home" className="menu-item-link" href="#"><strong>Cart</strong></a></li>
                    <li className="menu-item"><a title="Home" className="menu-item-link" href="#"><strong>Contact Us</strong></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav">
          <div className="header-nav-wrapper navbar-scrolltofixed green">
            <div className="menuzord-container header-nav-container green ">
              <div className="container position-relative">
                <div className="row">
                  <div className="col">
                    <div className="row header-nav-col-row">
                      <div className="col-sm-auto align-self-center">
                        <a className="menuzord-brand site-brand" href="index-mp-layout1.html">
                          <img className="logo-default logo-1x" src="images/logo-wide.png" alt="Logo" />
                          <img className="logo-default logo-2x retina" src="images/logo-wide@2x.png" alt="Logo" />
                        </a>
                      </div>
                      <div className="col-sm-auto ml-auto pr-0 align-self-center">
                        <nav id="top-primary-nav" className="menuzord green" data-effect="fade" data-animation="none" data-align="right">
                          <ul id="main-nav" className="menuzord-menu">
                            <li className="active"><a href="index-mp-layout1.html">Home</a></li>
                            <li><a href="page-about.html">About</a></li>
                            <li><a href="#">Pages</a>
                              <ul className="dropdown">
                                <li><a href="page-gallery.html">Gallery</a></li>
                                <li><a href="page-team-grid.html">Team Grid</a></li>
                                <li><a href="page-team-details.html">Team Details</a></li>
                              </ul>
                            </li>
                            <li><a href="#home">Service</a>
                              <ul className="dropdown">
                                <li><a href="page-services.html">Service Grid</a></li>
                                <li><a href="page-service-details.html">Service Deatils</a></li>
                              </ul>
                            </li>
                            <li><a href="#">Blog</a>
                              <ul className="dropdown">
                                <li><a href="news-grid.html">News Grid</a></li>
                                <li><a href="news-details.html">News Details</a></li>
                              </ul>
                            </li>
                            <li><a href="page-contact.html">Contact</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="row d-block d-xl-none">
                      <div className="col-12">
                        <nav id="top-primary-nav-clone" className="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive" data-effect="slide" data-animation="none" data-align="right">
                          <ul id="main-nav-clone" className="menuzord-menu menuzord-right menuzord-indented scrollable">
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Home />
      <Footer />
    </>
  );
}

export default App;
