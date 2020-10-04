import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { specific_services_geo, specific_services_eng } from '../constants/services'

const Offer = () => {
    const params = useParams();
    const offerDetails = specific_services_geo.filter(s => s.id === params.id)[0];

    if (offerDetails) {

        return (
            <div className="main-content" style={{ minHeight: '80vh' }}>
                <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/bg-shape-bconsul2.png">
                    <div className="container">
                        <div class="container">
                            <h2 className="font-size-30 mb-20" >{offerDetails.title}</h2>
                            <div className="mb-30" dangerouslySetInnerHTML={{ __html: offerDetails.markup }} />
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
