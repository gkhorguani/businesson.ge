import React from 'react';

const Footer = () => (
    <>
        <footer id="footer" className="footer">
            <div className="footer-widget-area">
                <div className="container pt-90 pb-60">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div id="tm_widget_contact_info-1" className="split-nav-menu clearfix widget widget-contact-info clearfix mb-20">
                                <div className="tm-widget tm-widget-contact-info contact-info contact-info-style1  contact-icon-theme-colored1">
                                    {/* <div className="thumb">
                                        <img alt="Logo" src="images/logo.jpg" />
                                    </div> */}
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
                    </div>
                </div>
            </div>
        </footer>
        <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
    </>
)

export default Footer;