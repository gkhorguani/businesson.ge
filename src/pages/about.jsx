import React from 'react'
import { home_services_geo, home_services_eng } from '../constants/services'

const About = () => {
    return (
        <div className="main-content">

            <section className="bg-img-no-repeat bg-img-right" data-tm-bg-img="images/bg/bg-shape-bconsul2.png">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <img src="/images/about_us.jpg" className="attachment-full" alt="" />
                            </div>
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <h2 className="font-size-30 mb-20" >ჩვენს შესახებ</h2>
                                <div className="mb-30">
                                    <p>
                                        „ბიზნეს ON“  შეიქმნა წარმატებისთვის.
                                        თქვენი და ჩვენი წარმატებისთვის.
                                        თქვენი ბიზნესის საჭიროებები, თქვენთვის მაქსიმალური კომფორტის შექმნა, თქვენი საქმიანობის სრული მხარდაჭერა, თქვენი ბიზნესის წარმატებული ოპერირებისთვის სიახლეების მუდმივი ძიება და საჭირო დროს  თქვენთვის შემოთავაზება - ეს ის ძირითადი ასპექტებია, რაზეც ჩვენი კომპანიის კონცეფცია ავაგეთ და ამ იდეის გარშემო რამდენიმე მოტივირებული, შესაბამისი უნარების და კვალიფიკაციის მქონე ახალგაზრდა გავერთიანდით.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h2 className="font-size-30 mb-20" >რას გთავაზობთ</h2>
                        <div className="mb-30">
                            <p>
                                „ბიზნეს ON“  გთავაზობთ ბევრად მეტს, ვიდრე ბაზარზე არსებული სხვა საკონსულტაციო კომპანიები. ჩვენი პროდუქტი იმით არის უნიკალური და ინოვაციური, რომ ჩვენ უპრეცენდენტო მასშტაბის აუთსორსინგს გთავაზობთ.
                                ჩვენ შევისწავლეთ ბიზნესის საჭიროება და შევქმენით ბიზნესის მხარდამჭერი პირველი კომპანია საქართველოში, რომელსაც  თქვენთვის ყველა იმ მომსახურების შეთავაზება შეუძლია, რაც თქვენს საქმიანობას დასჭირდება.
                                ჩევნს მიერ შემოთავაზებული ბიზნეს პროცესების აუთსორსინგი მოიცავს ისეთ სფეროებს, როგორიც არის:
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="tm-sc tm-sc-unordered-list list-style10">
                                    <ul>
                                        {home_services_geo.map(service => <li>{service.title}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h2 className="font-size-30 mb-20" >რას მიიღებთ ჩვენგან</h2>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >შემცირებულ  დანახარჯებს</h2>
                            <p>
                                არ გეხარჯებათ თანხა თანამშრომლების მოძიებაში, დატრენინგებაში, ზოგავთ მათთან დაკავშირებულ ყველა ხარჯს,
                                არ ქმნით მის სამუშაო სივრცეს და არ უხდით მათ ყოველთვიურად ხელფასს.
                            </p>
                        </div>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >გაზრდილ გაყიდვებს</h2>
                            <p>
                                ჩვენი პარტნიორები წარმატებული კომპანიების კვალიფიციური თანამშრომლები არიან, რომელთა ეფექტური მუშაობის შედეგი მოკლე დროში
                                დადებითად აისახება თქვენი კომპანიის შემოსავლის და გაყიდვების ზრდის დინამიკაზე.
                            </p>
                        </div>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >დაზოგილ  დროს</h2>
                            <p>
                                ჩვენი შემოთავაზების მიღებით, იღებთ კომპლექსურ მომსახურებას და ზოგავთ თქვენთვის ყველაზე ძვირფასს - თქვენს დროს და თქვენი
                                კომპანიის განვითარებისთვის უფრო მნიშვნელოვან საკითხებზე რჩებით ორიენტირებულნი -  საჭიროების დადგომისას, უკავშირდებით მხოლოდ „ბიზნეს ON“-ს და
                                თქვენ პირადი ბიზნეს ასისტენტი თვითონ დაუკავშირდება პირს,  ვისი მომსახურებაც იმ ეტაპზე გჭირდებათ.
                            </p>
                        </div>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >მეტ კომფორტს</h2>
                            <p>
                                თქვენ უკვე პირადი ბიზნეს ასისტენტი გყავთ, ენდობით და ზუსტად იცით, რომ მასთან ერთი დარეკვით, ყველა წარმოქმნილ პრობლემას აგვარებთ.
                                არ გჭირდებათ დამატებით  შეხსენება ან კონტროლი. თავს უფლებას აძლევთ, თვალი ადევნოთ გამართულ სამუშაო
                                პროცესს და მეგობრებთან თავი მოიწონოთ „ბიზნეს ON“-თან პარტნიორობით.
                            </p>
                        </div>
                        <div className="mb-30">
                            <h2 className="font-size-15 mb-15" >გაზრდილ ხარისხს და უფრო მაღალ შედეგს</h2>
                            <p>
                                საჭიროების დადგომისას, თქვენი პრობლემის მოგვარების პროცესში ბიზნეს-პროცესების და კრიზისების მართვის გუნდი ერთვება,
                                რომელიც მთელი მისი შემადგენლობის კვალიფიკაციის, ცოდნის, უნარების და რესურსების ხარჯზე გადაწყვეტს თქვენს პრობლემას.
                                ასეთი გუნდის მიერ შესრულებული სამუშაო კი გარანტირებულად  უფრო მაღალ შედეგს და ხარისხს გპირდებათ, ვიდრე კომპანიაში ამ საკითხის მოსაგვარებლად
                                დაქირავებული 1 თანამშრომლის მიერ შესრულებული სამუშაო.
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
                                            <h2 className="title"> <span className="">ჩვენი </span> <span
                                                className="text-theme-colored2">გუნდი</span> </h2>
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
                                                    <h5 className="name"><a href="#">ეკატერინე ხორგუანი</a></h5>
                                                    <div className="speciality"><div><br /></div>დამფუძნებელი და დირექტორი</div>
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
                                                    <h5 className="name"><a href="#">ნატა ეკალაძე</a></h5>
                                                    <div className="speciality">ადმინისტრაციული მიმართულების ხელმძღვანელი</div>
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
                                                    <h5 className="name"><a href="#">მიხეილ კვირკველია</a></h5>
                                                    <div className="speciality">პროდუქტის განვითარების მიმართულების ხელმძღვანელი</div>
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
                                                    <h5 className="name"><a href="#">მინდია სურმანიძე</a></h5>
                                                    <div className="speciality">ბრენდის განვითარების მიმართულების ხელმძღვანელი</div>
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
