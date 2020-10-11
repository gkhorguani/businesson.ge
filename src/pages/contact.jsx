import React from 'react'
import { getCookie } from '../utils/cookie'
import { contact_details_geo, contact_details_eng } from '../constants/contact';

const Contant = () => {
    const selected_lang = getCookie('businesson_language_preference');
    const contactData = selected_lang === 'GE' ? contact_details_geo : contact_details_eng;

    return (
        <div className="main-content">

            <section id="contact" className="">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="tm-sc tm-sc-custom-columns-holder tm-cc-two-columns tm-cc-responsive-mode-1280">
                                    <div className="tm-sc tm-sc-custom-columns-holder-item bg-white-f5" data-item-className="econsul-mascot-custom-columns-924797" data-1200-up="80px 15% 100px 10%" data-1199-down="80px 10% 100px 10%">
                                        <div className="item-inner">
                                            <div className="item-content econsul-mascot-custom-columns-924797">
                                                <h2>{contactData.title}</h2>
                                                <div role="form" className="wpcf7" id="wpcf7-f452-p311-o1" lang="en-US" dir="ltr">
                                                    <div className="screen-reader-response"></div>
                                                    <form action="/corporate/business/econsul/demo/#wpcf7-f452-p311-o1" method="post" className="wpcf7-form" novalidate="novalidate">
                                                        <div> <input type="hidden" name="_wpcf7" value="452" /> <input type="hidden" name="_wpcf7_version" value="5.1.1" /> <input type="hidden" name="_wpcf7_locale" value="en_US" /> <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f452-p311-o1" /> <input type="hidden" name="_wpcf7_container_post" value="311" /> <input type="hidden" name="g-recaptcha-response" value="" /></div>
                                                        <div className="tm-contact-form-transparent pr-0">
                                                            <div className="row">
                                                                <div className="col-md-6"> <span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder={contactData.firstName} /></span></div>
                                                                <div className="col-md-6"> <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder={contactData.email} /></span></div>
                                                                <div className="col-md-6"> <span className="wpcf7-form-control-wrap your-phone"><input type="text" name="your-phone" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder={contactData.phone} /></span></div>
                                                                <div className="col-md-6"> <span className="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder={contactData.subject} /></span></div>
                                                                <div className="col-md-12"> <span className="wpcf7-form-control-wrap textarea"><textarea name="textarea" cols="40" rows="3" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder={contactData.fullText}></textarea></span></div>
                                                                <div className="col-md-12"> <input type="submit" value={contactData.sendButton} className="wpcf7-form-control wpcf7-submit btn btn-theme-colored1 btn-round" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="wpcf7-response-output wpcf7-display-none"></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tm-sc tm-sc-custom-columns-holder-item" data-item-className="senior-mascot-custom-columns-283434" data-tm-bg-img="/images/static/kontaqti/kontaqti.jpg">
                                        <div className="item-inner">
                                            <div className="item-content senior-mascot-custom-columns-283434">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid pt-0 pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.0589350328224!2d44.78695600103989!3d41.72994574035707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472c67ef009d3%3A0x8c5536dff5d2767!2s49%2F51%2F51a%20Akaki%20Tsereteli%20Ave%2C%20T&#39;bilisi%2C%20Georgia!5e0!3m2!1sen!2sus!4v1602447720512!5m2!1sen!2sus" width="2600" height="600" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contant;
