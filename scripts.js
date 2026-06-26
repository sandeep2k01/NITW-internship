const scholarships = [
    // International Scholarships
    { name: 'Fulbright Program', url: 'https://foreign.fulbrightonline.org/' },
    { name: 'Chevening Scholarships', url: 'https://www.chevening.org/' },
    { name: 'Erasmus+ Scholarships', url: 'https://erasmus-plus.ec.europa.eu/' },
    { name: 'DAAD Scholarships', url: 'https://www.daad.de/en/' },
    { name: 'MEXT Scholarships', url: 'https://www.studyinjapan.go.jp/en/planning/scholarship/' },
    { name: 'Korean Government Scholarship Program', url: 'http://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do' },
    { name: 'Australia Awards Scholarships', url: 'https://www.dfat.gov.au/people-to-people/australia-awards' },
    { name: 'New Zealand Development Scholarships', url: 'https://www.mfat.govt.nz/en/aid-and-development/new-zealand-development-scholarships/' },
    { name: 'Commonwealth Scholarships', url: 'https://cscuk.fcdo.gov.uk/apply/' },
    { name: 'Gates Cambridge Scholarships', url: 'https://www.gatescambridge.org/' },

    // National Scholarships (India)
    { name: 'National Scholarships Portal', url: 'https://scholarships.gov.in/' },
    { name: 'Central Sector Scheme of Scholarships', url: 'https://scholarships.gov.in/' },
    { name: 'AICTE Scholarships', url: 'https://www.aicte-india.org/schemes/students-development-schemes' },
    { name: 'UGC Scholarships', url: 'https://www.ugc.ac.in/' },
    { name: 'INSPIRE Scholarship', url: 'http://www.online-inspire.gov.in/' },
    { name: 'National Means Cum Merit Scholarship', url: 'https://www.nmms.scholarships.gov.in/' },
    { name: 'Prime Minister’s Scholarship Scheme', url: 'https://scholarships.gov.in/' },
    { name: 'Kishore Vaigyanik Protsahan Yojana', url: 'http://www.kvpy.iisc.ernet.in/' },

    // State Scholarships (India)
    { name: 'Andhra Pradesh Scholarships', url: 'https://jnanabhumi.ap.gov.in/' },
    { name: 'Arunachal Pradesh Scholarships', url: 'https://www.scholarships.gov.in/' },
    { name: 'Assam Scholarships', url: 'https://directorateofhighereducation.assam.gov.in/' },
    { name: 'Bihar Scholarships', url: 'https://www.pmsonline.bih.nic.in/' },
    { name: 'Chhattisgarh Scholarships', url: 'https://ekoshonline.cg.nic.in/' },
    { name: 'Goa Scholarships', url: 'https://www.goa.gov.in/schemes/scholarship/' },
    { name: 'Gujarat Scholarships', url: 'https://www.digitalgujarat.gov.in/' },
    { name: 'Haryana Scholarships', url: 'https://harchhatravratti.highereduhry.ac.in/' },
    { name: 'Himachal Pradesh Scholarships', url: 'https://hpepass.cgg.gov.in/' },
    { name: 'Jharkhand Scholarships', url: 'https://ekalyan.cgg.gov.in/' },
    { name: 'Karnataka Scholarships', url: 'https://ssp.postmatric.karnataka.gov.in/' },
    { name: 'Kerala Scholarships', url: 'https://www.dcescholarship.kerala.gov.in/' },
    { name: 'Madhya Pradesh Scholarships', url: 'https://scholarshipportal.mp.nic.in/MedhaviChhatra/' },
    { name: 'Maharashtra Scholarships', url: 'https://mahadbtmahait.gov.in/' },
    { name: 'Manipur Scholarships', url: 'https://scholarships.gov.in/' },
    { name: 'Meghalaya Scholarships', url: 'https://megedistrict.gov.in/' },
    { name: 'Mizoram Scholarships', url: 'https://www.scholarships.gov.in/' },
    { name: 'Nagaland Scholarships', url: 'https://scholarship.nagaland.gov.in/' },
    { name: 'Odisha Scholarships', url: 'https://www.scholarships.odisha.gov.in/' },
    { name: 'Punjab Scholarships', url: 'https://www.punjabscholarships.gov.in/' },
    { name: 'Rajasthan Scholarships', url: 'https://sje.rajasthan.gov.in/' },
    { name: 'Sikkim Scholarships', url: 'https://www.sikkim.gov.in/scholarships' },
    { name: 'Tamil Nadu Scholarships', url: 'https://www.tnscholarships.gov.in/' },
    { name: 'Telangana Scholarships', url: 'https://telanganaepass.cgg.gov.in/' },
    { name: 'Tripura Scholarships', url: 'https://scholarships.gov.in/' },
    { name: 'Uttar Pradesh Scholarships', url: 'https://scholarship.up.gov.in/' },
    { name: 'Uttarakhand Scholarships', url: 'https://escholarship.uk.gov.in/' },
    { name: 'West Bengal Scholarships', url: 'https://wbmdfcscholarship.gov.in/' },

    // Private Scholarships
    { name: 'Scholarships.com', url: 'https://www.scholarships.com/' },
    { name: 'Fastweb', url: 'https://www.fastweb.com/' },
    { name: 'Unigo', url: 'https://www.unigo.com/' },
    { name: 'Cappex', url: 'https://www.cappex.com/' },
    { name: 'College Board Scholarship Search', url: 'https://bigfuture.collegeboard.org/scholarship-search' },
    { name: 'Niche', url: 'https://www.niche.com/colleges/scholarships/' },
    { name: 'J.N. Tata Endowment', url: 'https://www.jntataendowment.org/' },
    { name: 'Aditya Birla Scholarship', url: 'https://www.adityabirla.com/' },
    { name: 'HDFC Educational Crisis Scholarship', url: 'https://www.hdfcbank.com/personal/help/support/scholarship' },
    { name: 'Reliance Foundation Scholarship', url: 'https://www.reliancefoundation.org/education/scholarship' }
];
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Function to handle search logic and suggestions
function handleSearch() {
    const query = searchBar.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (query) {
        const filteredScholarships = scholarships.filter(scholarship => 
            scholarship.name.toLowerCase().includes(query)
        );

        if (filteredScholarships.length > 0) {
            searchResults.style.display = 'block';

            filteredScholarships.forEach(scholarship => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.textContent = scholarship.name;
                item.onclick = () => {
                    searchBar.value = scholarship.name; // Update search bar with selected option
                    window.open(scholarship.url, '_blank'); // Open the link in a new tab
                    searchResults.style.display = 'none'; // Hide suggestions
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

// Add event listeners for input and button
searchBar.addEventListener('input', handleSearch);
searchButton.addEventListener('click', handleSearch);

// Optional: Clear search results when clicking outside
document.addEventListener('click', (e) => {
    if (!searchResults.contains(e.target) && e.target !== searchBar && e.target !== searchButton) {
        searchResults.style.display = 'none';
    }
});