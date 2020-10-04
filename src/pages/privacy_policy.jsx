import React from 'react'
import {policy} from '../constants/privacy_policy'

const PrivacyPolicy = () => {
    return (
        <div className="main-content">
            <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/bg-shape-bconsul2.png">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="font-size-25 mb-20" >{policy.title}</h2>
                                <div className="container" dangerouslySetInnerHTML={{ __html: policy.markup }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PrivacyPolicy;
