import React from 'react';
import { specific_services_geo } from '../constants/services'

const Footer = () => (
    <>
        <footer id="footer" className="footer">
            <div className="footer-widget-area">
                <div className="container pt-90 pb-60">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div id="tm_widget_contact_info-1" className="split-nav-menu clearfix widget widget-contact-info clearfix mb-20">
                                <div className="tm-widget tm-widget-contact-info contact-info contact-info-style1  contact-icon-theme-colored1">
                                    <div className="thumb">
                                        <img alt="Logo" src="images/static/mtavari/logo fonis gareshe.jpg" style={{ width: '150px' }} />
                                    </div>
                                    <div className="description">თბილისი,  ვახუშტი ბაგრატიონის #29</div>
                                    <div>
                                        <div>2 11 07 47</div>
                                        <div>info@businesson.ge</div>
                                    </div>
                                </div>
                            </div>
                            <div id="tm_widget_social_list_custom-1" className="split-nav-menu clearfix widget widget-social-list-custom clearfix">
                                <ul className="tm-widget tm-widget-social-list tm-widget-social-list-custom styled-icons  icon-dark  icon-rounded icon-theme-colored1 ">
                                    <li><a className="social-link" href="https://www.facebook.com/businesson.ge" ><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="social-link" href="https://twitter.com/business_on_ge" ><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="social-link" href="https://www.linkedin.com/company/53397193" ><i className="fa fa-linkedin"></i></a></li>
                                    <li><a className="social-link" href="https://www.instagram.com/businesson.ge " ><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div id="nav_menu-1" className="widget widget_nav_menu">
                                <h4 className="widget-title widget-title-line-bottom line-bottom-footer-widget line-bottom-theme-colored1">სერვისები</h4>
                                <div className="menu-service-nav-menu-container">
                                    <ul id="menu-service-nav-menu" className="menu">
                                        {specific_services_geo.map(s => 
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
                                <h4 className="widget-title widget-title-line-bottom line-bottom-footer-widget line-bottom-theme-colored1">სამუშაო საათები</h4>
                                <ul className="tm-widget tm-widget-opening-hours tm-widget-opening-hours-compressed opening-hours border-dark">
                                    <li className="clearfix"> <span>ორშაბათი - პარასკევი</span>
                                        <div className="value">9.00 - 17.00</div>
                                    </li>
                                    <li className="clearfix"> <span>შაბათი</span>
                                        <div className="value">9.00 - 16.00</div>
                                    </li>
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
                                <div className="footer-paragraph text-right">
                                    <a href="/privacypolicy">კონფიდენციალურობის პოლიტიკა</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
    </>
)

export default Footer;