import React from 'react'
import {getCookie} from '../utils/cookie'
import { job_geo, job_eng } from '../constants/careers';

const Careers = () => {
    const selected_lang = getCookie('businesson_language_preference');
    const job_data = selected_lang === 'GE' ? job_geo : job_eng;

    return (
        <div className="main-content" style={{ textAlign: 'justify' }}>
            <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/bg-shape-bconsul2.png">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <img src={job_data.image} className="attachment-full" alt="" />
                            </div>
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <h6 class="text-theme-colored2">{job_data.pageTitle}</h6>
                                <h2 className="font-size-30 mb-20" >{job_data.title}</h2>
                                <div className="row font-size-16" dangerouslySetInnerHTML={{ __html: job_data.markup }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Careers;
