const menu_geo = [
    { name: 'მთავარი', url: '/' },
    { name: 'ჩვენს შესახებ', url: '/about' },
    { name: 'სერვისები', url: '/services', subUrl: 'offer' },
    { name: 'კარიერა', url: '/careers' },
    { name: 'კონტაქტი', url: '/contact' }
];

const menu_eng = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services', subUrl: 'offer' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' }
];

const privacy_policy_geo = { name: 'კონფიდენციალურობის პოლიტიკა', url: '/privacypolicy' };
const privacy_policy_eng = { name: 'Privacy Policy', url: '/privacypolicy' };

const footer_data_geo = {
    servicesTitle: 'სერვისები',
    businessHoursTitle: 'სამუშაო საათები',
    businessHours: [
        { title: 'ორშაბათი - პარასკევი', hours: '9.00 - 17.00' },
        { title: 'შაბათი', hours: '9.00 - 16.00' }
    ]
};

const footer_data_eng = {
    servicesTitle: 'Services',
    businessHoursTitle: 'Business Hours',
    businessHours: [
        { title: 'Monday - Friday', hours: '9.00 - 17.00' },
        { title: 'Saturday', hours: '9.00 - 16.00' }
    ]
};

export {
    menu_geo,
    menu_eng,
    privacy_policy_geo,
    privacy_policy_eng,
    footer_data_geo,
    footer_data_eng
}
