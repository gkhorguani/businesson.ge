import React from 'react';
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    return (
        <header id="header" className="header header-layout-type-header-2rows">
            <div className="header-top ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-auto header-top-left align-self-center text-center text-xl-left">
                            <ul className="element contact-info">
                                <li className="contact-phone"><i className="fa fa-phone font-icon sm-display-block"></i>  2 11 07 47</li>
                                <li className="contact-email"><i className="fa fa-envelope-o font-icon sm-display-block"></i> info@businesson.ge</li>
                                <li className="contact-address"><i className="fa fa-map-o font-icon sm-display-block"></i> თბილისი,  ვახუშტი ბაგრატიონის #29</li>
                            </ul>
                        </div>
                        <div className="col-xl-auto ml-xl-auto header-top-right align-self-center text-center text-xl-right">
                            <div className="element">
                                <ul className="header-top-nav list-inline">
                                    <li className="menu-item"><a title="Home" className="menu-item-link" href="#"><strong>GE</strong></a></li>
                                    <li className="menu-item"><a title="Home" className="menu-item-link" href="#"><strong>EN</strong></a></li>
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
                                            <a className="menuzord-brand site-brand" href="/">
                                                <img className="logo-default logo-1x" src="/images/logo.jpg" alt="Logo" />
                                                <img className="logo-default logo-2x retina" src="images/logo.jpg" alt="Logo" />
                                            </a>
                                        </div>
                                        <div className="col-sm-auto ml-auto pr-0 align-self-center">
                                            <nav id="top-primary-nav" className="menuzord green" data-effect="fade" data-animation="none" data-align="right">
                                                <ul id="main-nav" className="menuzord-menu">
                                                    <li className={location.pathname === "/" ? "active" : ""}><a href="/">მთავარი</a></li>
                                                    <li className={location.pathname === "/about" ? "active" : ""}><a href="/about">ჩვენს შესახებ</a></li>
                                                    <li className={(location.pathname === "/services" || location.pathname.indexOf('offer') > -1) ? "active" : ""}><a href="/services">სერვისები</a></li>
                                                    <li className={location.pathname === "/careers" ? "active" : ""}><a href="/careers">კარიერა</a></li>
                                                    <li className={location.pathname === "/contact" ? "active" : ""}><a href="/contact">კონტაქტი</a></li>
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
    )

};

export default Header;