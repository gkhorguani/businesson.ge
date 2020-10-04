import React from 'react'
import {
    specific_services_geo,
    specific_services_eng
} from '../constants/services'

const Services = () => {
    return (
        <div className="main-content">

            <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/curve-bg-industryee2.png">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            {specific_services_geo.map(service => <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="tm-sc tm-sc-services services-style-current-theme mb-30">
                                    <div className="tm-service services type-services">
                                        <div className="thumb">
                                            <div className="thumb-inner"> <img width="672" height="448" src={service.image} className="img-fullwidth" alt="" /></div>
                                        </div>
                                        <div className="details">
                                            <h4 className="title" style={{ 'minHeight': '70px' }}><a href={`/offer/${service.id}`}>{service.title}</a></h4>
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
