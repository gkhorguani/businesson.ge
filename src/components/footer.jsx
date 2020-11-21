import React from 'react';
import { getCookie } from '../utils/cookie'
import { specific_services_geo, specific_services_eng } from '../constants/services'
import { address_geo, address_eng } from '../constants/contact'
import {
    privacy_policy_geo,
    privacy_policy_eng,
    footer_data_geo,
    footer_data_eng
} from '../constants/menu'

const Footer = () => {
    const selected_lang = getCookie('businesson_language_preference');
    const privacyPolicy = selected_lang === 'GE' ? privacy_policy_geo : privacy_policy_eng;
    const services = selected_lang === 'GE' ? specific_services_geo : specific_services_eng;
    const footerData = selected_lang === 'GE' ? footer_data_geo : footer_data_eng;
    const addressData = selected_lang === 'GE' ? address_geo : address_eng;

    // Services slices
    const halfwayThrough = Math.floor(services.length / 2)
    const servicesFirstHalf = services.slice(0, halfwayThrough);
    const servicesSecondHalf = services.slice(halfwayThrough, services.length);

    return (
        <>
            <footer id="footer" className="footer">
                <div className="footer-widget-area">
                    <div className="container pt-90 pb-60">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div id="tm_widget_contact_info-1" className="split-nav-menu clearfix widget widget-contact-info clearfix mb-20">
                                    <div className="tm-widget tm-widget-contact-info contact-info contact-info-style1  contact-icon-theme-colored1">
                                        <div className="thumb">
                                            <img alt="Logo" src="/images/logo/logo_transparent.png" style={{ width: '150px' }} />
                                        </div>
                                        <div className="description">{addressData.street}</div>
                                        <div>
                                            <div>{addressData.tel}</div>
                                            <div>{addressData.email}</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tm_widget_social_list_custom-1" className="split-nav-menu clearfix widget widget-social-list-custom clearfix">
                                    <ul className="tm-widget tm-widget-social-list tm-widget-social-list-custom styled-icons  icon-dark  icon-rounded icon-theme-colored1 ">
                                        {addressData.socialMedia.map(sm =>
                                            <li><a className="social-link" href={sm.url} ><i className={sm.icon}></i></a></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div id="nav_menu-1" className="widget widget_nav_menu">
                                    <h4 className="widget-title widget-title-line-bottom line-bottom-footer-widget line-bottom-theme-colored1">{footerData.servicesTitle}</h4>
                                    <div className="menu-service-nav-menu-container">
                                        <ul id="menu-service-nav-menu" className="menu">
                                            {servicesFirstHalf.map(s =>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-20545">
                                                    <a href={`/offer/${s.id}`}>{s.title}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div id="nav_menu-1" className="widget widget_nav_menu">
                                    <h4 className="widget-title widget-title-line-bottom line-bottom-footer-widget line-bottom-theme-colored1">&nbsp;</h4>
                                    <div className="menu-service-nav-menu-container">
                                        <ul id="menu-service-nav-menu" className="menu">
                                            {servicesSecondHalf.map(s =>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-20545">
                                                    <a href={`/offer/${s.id}`}>{s.title}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div id="tm_widget_opening_hours_compressed-1" className="split-nav-menu clearfix widget widget-opening-hours-compressed clearfix">
                                    <h4 className="widget-title widget-title-line-bottom line-bottom-footer-widget line-bottom-theme-colored1">{footerData.businessHoursTitle}</h4>
                                    <ul className="tm-widget tm-widget-opening-hours tm-widget-opening-hours-compressed opening-hours border-dark">
                                        {footerData.businessHours.map(bh => <li className="clearfix"> <span>{bh.title}</span>
                                            <div className="value">{bh.hours}</div>
                                        </li>)}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footer-bottom" data-tm-bg-color="#2A2A2A">
                        <div className="container">
                            <div className="row pt-20 pb-20">
                                <div className="col-sm-6">
                                    <div className="footer-paragraph">
                                        © 2020
                                </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="footer-paragraph text-sm-right text-xs-left">
                                        <a className="font-size-16" href={privacyPolicy.url}>{privacyPolicy.name}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
        </>
    );
}

export default Footer;