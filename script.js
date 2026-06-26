// =============================================
// HAMBURGER MENU TOGGLE
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('active');
    });

    // Mobile: tap on dropdown button to expand (instead of hover)
    document.querySelectorAll('.dropbtn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                const parent = this.closest('.dropdown');
                // Close others
                document.querySelectorAll('.dropdown').forEach(d => {
                    if (d !== parent) d.classList.remove('open');
                });
                parent.classList.toggle('open');
            }
        });
    });

    // Close menu when a nav link (non-dropdown) is clicked on mobile
    document.querySelectorAll('#nav-menu li:not(.dropdown) a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) {
                hamburger.classList.remove('open');
                navMenu.classList.remove('active');
            }
        });
    });
});

// =============================================
// SCHOLARSHIP HUB - Main JavaScript
// =============================================


// --- IMAGE SLIDER ---
document.addEventListener('DOMContentLoaded', function () {
    const imagesContainer = document.querySelector('.images');
    if (imagesContainer) {
        const images = Array.from(imagesContainer.children);
        let index = 0;
        function scrollImages() {
            index = (index + 1) % images.length;
            imagesContainer.style.transform = `translateX(-${index * 100}%)`;
        }
        setInterval(scrollImages, 3000);
    }
});

// --- SEARCH BAR ---
const scholarships = [
    { name: 'Fulbright Program', url: 'https://foreign.fulbrightonline.org/' },
    { name: 'Chevening Scholarships', url: 'https://www.chevening.org/' },
    { name: 'Erasmus+ Scholarships', url: 'https://erasmus-plus.ec.europa.eu/' },
    { name: 'DAAD Scholarships', url: 'https://www.daad.de/en/' },
    { name: 'MEXT Scholarships', url: 'https://www.studyinjapan.go.jp/en/planning/scholarship/' },
    { name: 'Korean Government Scholarship Program', url: 'http://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do' },
    { name: 'Australia Awards Scholarships', url: 'https://www.dfat.gov.au/people-to-people/australia-awards' },
    { name: 'Commonwealth Scholarships', url: 'https://cscuk.fcdo.gov.uk/apply/' },
    { name: 'Gates Cambridge Scholarships', url: 'https://www.gatescambridge.org/' },
    { name: 'National Scholarships Portal', url: 'https://scholarships.gov.in/' },
    { name: 'Central Sector Scheme of Scholarships', url: 'https://scholarships.gov.in/' },
    { name: 'AICTE Scholarships', url: 'https://www.aicte-india.org/schemes/students-development-schemes' },
    { name: 'UGC Scholarships', url: 'https://www.ugc.ac.in/' },
    { name: 'INSPIRE Scholarship', url: 'http://www.online-inspire.gov.in/' },
    { name: 'National Means Cum Merit Scholarship', url: 'https://scholarships.gov.in/' },
    { name: 'Prime Minister\'s Scholarship Scheme', url: 'https://scholarships.gov.in/' },
    { name: 'Kishore Vaigyanik Protsahan Yojana', url: 'http://www.kvpy.iisc.ernet.in/' },
    { name: 'Andhra Pradesh Scholarships', url: 'https://jnanabhumi.ap.gov.in/' },
    { name: 'Telangana Scholarships', url: 'https://telanganaepass.cgg.gov.in/' },
    { name: 'Karnataka Scholarships', url: 'https://ssp.postmatric.karnataka.gov.in/' },
    { name: 'Kerala Scholarships', url: 'https://dcescholarship.kerala.gov.in/' },
    { name: 'Maharashtra Scholarships', url: 'https://mahadbtmahait.gov.in/' },
    { name: 'Tamil Nadu Scholarships', url: 'https://ssp.tn.gov.in/' },
    { name: 'Uttar Pradesh Scholarships', url: 'https://scholarship.up.gov.in/' },
    { name: 'West Bengal Scholarships', url: 'https://wbmdfcscholarship.gov.in/' },
    { name: 'J.N. Tata Endowment', url: 'https://www.jntataendowment.org/' },
    { name: 'Aditya Birla Scholarship', url: 'https://www.adityabirla.com/' },
    { name: 'HDFC Educational Crisis Scholarship', url: 'https://www.hdfcbank.com/personal/help/support/scholarship' },
    { name: 'Reliance Foundation Scholarship', url: 'https://www.reliancefoundation.org/education/scholarship' },
    { name: 'Infosys Foundation Scholarship', url: 'https://www.infosys.com/infosys-foundation/programs/education/' },
    { name: 'Tata Trusts Scholarship', url: 'https://www.tatatrusts.org/our-work/education/individual-grants-programme' }
];

document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    if (!searchBar) return;

    function handleSearch() {
        const query = searchBar.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        if (query) {
            const filtered = scholarships.filter(s => s.name.toLowerCase().includes(query));
            if (filtered.length > 0) {
                searchResults.style.display = 'block';
                filtered.forEach(s => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.textContent = s.name;
                    item.onclick = () => {
                        searchBar.value = s.name;
                        window.open(s.url, '_blank');
                        searchResults.style.display = 'none';
                    };
                    searchResults.appendChild(item);
                });
            } else {
                searchResults.style.display = 'none';
            }
        } else {
            searchResults.style.display = 'none';
        }
    }

    searchBar.addEventListener('input', handleSearch);
    if (searchButton) searchButton.addEventListener('click', handleSearch);

    document.addEventListener('click', (e) => {
        if (searchResults && !searchResults.contains(e.target) && e.target !== searchBar && e.target !== searchButton) {
            searchResults.style.display = 'none';
        }
    });
});

// --- MARQUEE PAUSE ON HOVER ---
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container1');
    if (!container) return;
    container.addEventListener('mouseover', () => {
        document.querySelectorAll('marquee').forEach(m => m.stop());
    });
    container.addEventListener('mouseout', () => {
        document.querySelectorAll('marquee').forEach(m => m.start());
    });
});

// --- GOOGLE TRANSLATE INIT ---
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,te,ta,ml,kn',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

// --- SCHOLARSHIP REDIRECT (International page) ---
function redirectInternational() {
    const select = document.getElementById('scholarship-select');
    if (!select) return;
    const links = {
        'fulbright': 'https://foreign.fulbrightonline.org/',
        'chevening': 'https://www.chevening.org/',
        'daad': 'https://www.daad.de/en/',
        'australia_awards': 'https://www.dfat.gov.au/people-to-people/australia-awards',
        'new_zealand_aid': 'https://www.mfat.govt.nz/en/aid-and-development/new-zealand-government-scholarships/'
    };
    const url = links[select.value] || '#';
    if (url !== '#') window.open(url, '_blank');
}

// --- SCHOLARSHIP REDIRECT (National page) ---
function redirectNational() {
    const select = document.getElementById('scholarship-select');
    if (!select) return;
    const links = {
        'national_scholarship_portal': 'https://scholarships.gov.in/',
        'pm_scholarship': 'http://www.desw.gov.in/scholarship',
        'ugc': 'https://www.ugc.ac.in/',
        'aishe': 'https://www.aicte-india.org/schemes/students-development-schemes',
        'mhrd': 'https://www.education.gov.in/en/scholarships'
    };
    const url = links[select.value] || '#';
    if (url !== '#') window.open(url, '_blank');
}

// --- SCHOLARSHIP REDIRECT (Private page) ---
function redirectPrivate() {
    const select = document.getElementById('scholarship-select');
    if (!select) return;
    const links = {
        'tata_scholarships': 'https://www.tatatrusts.org/our-work/education/individual-grants-programme',
        'aditya_birla': 'https://www.adityabirla.com/sustainability/education-scholarship-programme',
        'infosys': 'https://www.infosys.com/infosys-foundation/programs/education/',
        'reliance': 'https://www.reliancefoundation.org/education',
        'hdfc': 'https://www.hdfcbank.com/personal/learning/scholarships'
    };
    const url = links[select.value] || '#';
    if (url !== '#') window.open(url, '_blank');
}

// --- STATE SCHOLARSHIP REDIRECT (State page & Status page) ---
function redirectToScholarship() {
    const stateSelector = document.getElementById('stateSelector');
    if (!stateSelector) return;
    const selectedValue = stateSelector.value;
    const scholarshipLinks = {
        'andhra-pradesh': 'https://jnanabhumi.ap.gov.in/',
        'arunachal-pradesh': 'https://scholarships.gov.in/',
        'assam': 'https://dipr.assam.gov.in/',
        'bihar': 'https://www.pmsonline.bih.nic.in/',
        'chhattisgarh': 'https://postmatric-scholarship.cg.nic.in/',
        'goa': 'https://cmscholarship.goa.gov.in/',
        'gujarat': 'https://www.digitalgujarat.gov.in/',
        'haryana': 'https://harchhatravratti.highereduhry.ac.in/',
        'himachal-pradesh': 'https://hpepass.cgg.gov.in/',
        'jharkhand': 'https://ekalyan.cgg.gov.in/',
        'karnataka': 'https://ssp.postmatric.karnataka.gov.in/',
        'kerala': 'https://dcescholarship.kerala.gov.in/',
        'madhya-pradesh': 'https://scholarshipportal.mp.nic.in/',
        'maharashtra': 'https://mahadbt.maharashtra.gov.in/',
        'manipur': 'https://scholarship.mdmmanipur.in/',
        'meghalaya': 'https://megeducation.gov.in/',
        'mizoram': 'https://scholarships.mizoram.gov.in/',
        'nagaland': 'https://scholarship.nagaland.gov.in/',
        'odisha': 'https://scholarship.odisha.gov.in/',
        'punjab': 'https://scholarships.punjab.gov.in/',
        'rajasthan': 'https://sje.rajasthan.gov.in/',
        'sikkim': 'https://scholarships.sikkim.gov.in/',
        'tamil-nadu': 'https://ssp.tn.gov.in/',
        'telangana': 'https://telanganaepass.cgg.gov.in/',
        'tripura': 'https://scholarships.gov.in/',
        'uttar-pradesh': 'https://scholarship.up.gov.in/',
        'uttarakhand': 'https://he.uk.gov.in/dpages/scholarship-portal',
        'west-bengal': 'https://scholarships.wbsed.gov.in/',
        'andaman-nicobar-islands': 'https://eservices.andaman.gov.in/',
        'chandigarh': 'https://www.chdeducation.gov.in/',
        'dadra-nagar-haveli-and-daman-and-diu': 'https://dnh.gov.in/',
        'delhi': 'https://scholarships.gov.in/',
        'lakshadweep': 'https://scholarships.gov.in/',
        'puducherry': 'https://dhte.py.gov.in/',
        'ladakh': 'https://scholarships.gov.in/',
        'jammu-and-kashmir': 'https://www.aicte-jk-scholarship-gov.in/'
    };
    if (selectedValue && scholarshipLinks[selectedValue]) {
        window.location.href = scholarshipLinks[selectedValue];
    } else {
        alert('Please select a state or union territory.');
    }
}
