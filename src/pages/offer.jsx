import React from 'react'
import { useParams } from 'react-router-dom'
import { getCookie } from '../utils/cookie'
import { specific_services_geo, specific_services_eng } from '../constants/services'

const Offer = () => {
    const params = useParams();
    const selected_lang = getCookie('businesson_language_preference');
    const services = selected_lang === 'GE' ? specific_services_geo : specific_services_eng;
    const offerDetails = services.filter(s => s.id === params.id)[0];

    if (offerDetails) {
        return (
            <div className="main-content" style={{ minHeight: '80vh', textAlign: 'justify' }}>
                <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/bg-shape-bconsul2.png">
                    <div className="container">
                        <div class="container">
                            <h2 className="font-size-22 mb-20" >{offerDetails.title}</h2>
                            <div className="mb-30 font-size-16" dangerouslySetInnerHTML={{ __html: offerDetails.markup }} />
                        </div>
                    </div>
                </section>

            </div>
        )
    } else {
        return <div>404 Not found</div>
    }
}

export default Offer;
