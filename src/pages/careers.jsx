import React from 'react'
import { job } from '../constants/careers'

const Careers = () => {
    return (
        <div className="main-content">
            <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/bg-shape-bconsul2.png">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <img src={job.image} className="attachment-full" alt="" />
                            </div>
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <h6 class="text-theme-colored2">{job.pageTitle}</h6>
                                <h2 className="font-size-40 mb-20" >{job.title}</h2>
                                <div className="row" dangerouslySetInnerHTML={{ __html: job.markup }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Careers;
