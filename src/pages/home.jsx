import React from 'react'
import { getCookie } from '../utils/cookie'
import {
    home_services_eng,
    home_services_geo,
    home_main_geo,
    home_main_eng
} from '../constants/services'

const Home = () => {
    const selected_lang = getCookie('businesson_language_preference');
    const home_main = selected_lang === 'GE' ? home_main_geo : home_main_eng;
    const home_services = selected_lang === 'GE' ? home_services_geo : home_services_eng;

    return (
        <div className="main-content-area">

            <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/bg-shape-bconsul2.png">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <img src="/images/bconsul-about1.jpg" className="attachment-full" alt="" />
                            </div>
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <h2 className="font-size-40 mb-20" >{home_main.title}</h2>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="tm-sc tm-sc-unordered-list list-style10">
                                            <ul>
                                                {home_main.list.map(l => <li>{l}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-img-no-repeat" data-tm-bg-img="images/bg/bg-shape-bconsul1.png">
                <div className="container pt-0">
                    <div className="section-content">
                        <div className="row">
                            {home_services.map(service => <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="tm-sc tm-sc-services services-style-current-theme mb-30">
                                    <div className="tm-service services type-services">
                                        <div className="thumb">
                                            <div className="thumb-inner"> <img width="672" height="448" src={service.image} className="img-fullwidth" alt="" /></div>
                                        </div>
                                        <div className="details" style={{ 'minHeight': '180px' }}>
                                            <h4 className="title"><a href="#">{service.title}</a></h4>
                                            <ul className="cat-list"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
