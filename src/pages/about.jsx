import React from 'react'
import { getCookie } from '../utils/cookie'
import { home_services_geo, home_services_eng } from '../constants/services'
import { about_geo, about_eng, team_geo, team_eng } from '../constants/about'

const About = () => {
    const selected_lang = getCookie('businesson_language_preference');
    const home_services = selected_lang === 'GE' ? home_services_geo : home_services_eng;
    const about_data = selected_lang === 'GE' ? about_geo : about_eng;
    const team_data = selected_lang === 'GE' ? team_geo : team_eng;

    return (
        <div className="main-content">

            <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/bg-shape-bconsul2.png">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <img src={about_data.image} className="attachment-full" alt="" />
                            </div>
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <h2 className="font-size-30 mb-20" >{about_data.title1}</h2>
                                <div className="mb-30">
                                    <p>
                                        {about_data.content1}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h2 className="font-size-30 mb-20" >{about_data.title2}</h2>
                        <div className="mb-30">
                            <p>
                                {about_data.content2}
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="tm-sc tm-sc-unordered-list list-style10">
                                    <ul>
                                        {home_services.map(service => <li>{service.title}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h2 className="font-size-30 mb-20" >{about_data.title3}</h2>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >{about_data.subtitle3}</h2>
                            <p>
                                {about_data.content3}
                            </p>
                        </div>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >{about_data.title4}</h2>
                            <p>
                                {about_data.content4}
                            </p>
                        </div>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >{about_data.title5}</h2>
                            <p>
                                {about_data.content5}
                            </p>
                        </div>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >{about_data.title6}</h2>
                            <p>
                                {about_data.content6}
                            </p>
                        </div>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >{about_data.title7}</h2>
                            <p>
                                {about_data.content7}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container pt-90">
                    <div className="section-title">
                        <div className="row justify-content-md-center">
                            <div className="col-md-8">
                                <div className="text-center mb-60">
                                    <div
                                        className="tm-sc tm-sc-section-title section-title section-title-style1 text-center line-bottom-style3-bordered-line">
                                        <div className="title-wrapper">
                                            <h2 className="title" dangerouslySetInnerHTML={{ __html: team_data.title }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="tm-sc tm-sc-staff staff-style5-current-theme mb-lg-30">
                                    <div className="tm-staff staff-items type-staff-items">
                                        <div className="staff-inner">
                                            <div className="box-hover-effect">
                                                <div className="staff-header effect-wrapper">
                                                    <div className="thumb"> <img src="/images/static/about/Ekaterine Khorguani.jpg" className="img-fullwidth" width="365" height="445" alt="" /></div>
                                                </div>
                                                <div className="staff-content">
                                                    <h5 className="name"><a href="#">{team_data.members.eka.name}</a></h5>
                                                    <div className="speciality"><div><br /></div>{team_data.members.eka.title}</div>
                                                    <div className="staff-btn">
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="tm-sc tm-sc-staff staff-style5-current-theme mb-lg-30">
                                    <div className="tm-staff staff-items type-staff-items">
                                        <div className="staff-inner">
                                            <div className="box-hover-effect">
                                                <div className="staff-header effect-wrapper">
                                                    <div className="thumb"> <img src="/images/static/about/nata ekaladze.jpg" className="img-fullwidth" width="365" height="445" alt="" /></div>
                                                </div>
                                                <div className="staff-content">
                                                    <h5 className="name"><a href="#">{team_data.members.nata.name}</a></h5>
                                                    <div className="speciality">{team_data.members.nata.title}</div>
                                                    <div className="staff-btn">
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="tm-sc tm-sc-staff staff-style5-current-theme mb-lg-30">
                                    <div className="tm-staff staff-items type-staff-items">
                                        <div className="staff-inner">
                                            <div className="box-hover-effect">
                                                <div className="staff-header effect-wrapper" style={{ minHeight: '493px' }}>
                                                    <div className="thumb"> <img src="/images/static/about/mikheil kvirkvelia.jpg" className="img-fullwidth" width="365" height="445" alt="" /></div>
                                                </div>
                                                <div className="staff-content">
                                                    <h5 className="name"><a href="#">{team_data.members.mikheil.name}</a></h5>
                                                    <div className="speciality">{team_data.members.mikheil.title}</div>
                                                    <div className="staff-btn">
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="tm-sc tm-sc-staff staff-style5-current-theme mb-lg-30">
                                    <div className="tm-staff staff-items type-staff-items">
                                        <div className="staff-inner">
                                            <div className="box-hover-effect">
                                                <div className="staff-header effect-wrapper" style={{ minHeight: '493px' }}>
                                                    <div className="thumb"> <img src="/images/static/about/mindia surmanidze.jpg" className="img-fullwidth" width="365" height="445" alt="" /></div>
                                                </div>
                                                <div className="staff-content">
                                                    <h5 className="name"><a href="#">{team_data.members.mindia.name}</a></h5>
                                                    <div className="speciality">{team_data.members.mindia.title}</div>
                                                    <div className="staff-btn">
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default About;
