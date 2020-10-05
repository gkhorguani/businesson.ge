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

export {
    menu_geo,
    menu_eng,
    privacy_policy_geo,
    privacy_policy_eng
}
