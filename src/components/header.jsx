import React from 'react';
import { useLocation } from 'react-router-dom'
import {setCookie, getCookie} from '../utils/cookie'
import { menu_geo, menu_eng } from '../constants/menu'

const setLang = lang => {
    setCookie('businesson_language_preference', lang, 7);
}

const Header = () => {
    const selected_lang = getCookie('businesson_language_preference');
    const location = useLocation();
    const menu_data = selected_lang === 'GE' ? menu_geo : menu_eng;

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
                                    <li className="menu-item">
                                        <a title="Georgian" className="menu-item-link" style={{textDecoration: selected_lang === 'GE' ? 'underline' : 'none'}} href="#" onClick={() => setLang('GE')}><strong>GE</strong></a>
                                    </li>
                                    <li className="menu-item">
                                        <a title="English" className="menu-item-link" style={{textDecoration: selected_lang === 'EN' ? 'underline' : 'none'}} href="#" onClick={() => setLang('EN')}><strong>EN</strong></a>
                                    </li>
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
                                                    {menu_data.map(menu =>
                                                        <li className={location.pathname === menu.url || location.pathname.indexOf(menu.subUrl) > -1 ? "active" : ""}><a href={menu.url}>{menu.name}</a></li>
                                                    )}
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