document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.querySelector('.images');
    const images = Array.from(imagesContainer.children);
    let index = 0;

    function scrollImages() {
        index = (index + 1) % images.length;
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(scrollImages, 3000); // Change image every 3 seconds
});
function redirect(url) {
    window.location.href = url;
}
document.getElementById('scholarship-selector').addEventListener('change', function() {
    let value = this.value;
    let url = '';

    switch (value) {
        case 'us_scholarship':
            url = 'https://www.fulbright.org/';
            break;
        case 'uk_scholarship':
            url = 'https://www.chevening.org/';
            break;
        case 'australia_scholarship':
            url = 'https://www.australiaawards.gov.au/';
            break;
        case 'canada_scholarship':
            url = 'https://www.scholarships.gc.ca/';
            break;
        case 'mahadbt':
            url = 'https://mahadbtmahait.gov.in/';
            break;
        case 'tata_scholarships':
            url = 'https://www.tatatrusts.org/our-work/education/individual-grants-programme';
            break;
        case 'aditya_birla':
            url = 'https://www.adityabirla.com/sustainability/education-scholarship-programme';
            break;
        case 'infosys':
            url = 'https://www.infosys.com/infosys-foundation/programs/education/';
            break;
        case 'reliance':
            url = 'https://www.reliancefoundation.org/education';
            break;
        case 'hdfc':
            url = 'https://www.hdfcbank.com/personal/learning/scholarships';
            break;
        default:
            url = '#';
    }

    window.location.href = url;
});

// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Code for interactive elements like modals, buttons, etc.
});
