function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}
function toggleNavbar() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



function animateOnScroll() {
    const sections = document.querySelectorAll('.fade-in-up');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }
    });
}


function showDescription(element) {
    const description = element.querySelector('.skill-description');
    if (description) {
        description.style.opacity = '1';
    }
}

function hideDescription(element) {
    const description = element.querySelector('.skill-description');
    if (description) {
        description.style.opacity = '0';
    }
}


window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); 
function toggleMode() {
    const body = document.body;
    if (body.classList.contains('dark')) {
        // Switch to light mode
        body.classList.remove('dark');
        body.style.backgroundColor = '#475672'; 
    } else {
        // Switch to dark mode
        body.classList.add('dark');
        body.style.backgroundColor = '#101928'; 
    }
}

