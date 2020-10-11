import React from 'react'
import { getCookie } from '../utils/cookie'
import {
    specific_services_geo,
    specific_services_eng
} from '../constants/services'

const Services = () => {
    const selected_lang = getCookie('businesson_language_preference');
    const specific_services = selected_lang === 'GE' ? specific_services_geo : specific_services_eng;

    return (
        <div className="main-content">

            <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/curve-bg-industryee2.png">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            {specific_services.map(service => <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="tm-sc tm-sc-services services-style-current-theme mb-30">
                                    <div className="tm-service services type-services">
                                        <div className="thumb">
                                            <div className="thumb-inner"> <img width="672" height="448" src={service.image} className="img-fullwidth" alt="" /></div>
                                        </div>
                                        <div className="details">
                                            <h4 className="title font-size-18" style={{ 'minHeight': '55px' }}><a href={`/offer/${service.id}`}>{service.title}</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
