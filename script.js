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
        // Switch to dark modeP
        body.classList.add('dark');
        body.style.backgroundColor = '#101928';
    }
}
function showeDescription(element) {
    const linkIcon = element.querySelector('.project-link-icon');
    if (linkIcon) {
        linkIcon.style.opacity = '1';
    }
}

function hideeDescription(element) {
    const linkIcon = element.querySelector('.project-link-icon');
    if (linkIcon) {
        linkIcon.style.opacity = '0';
    }
}
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    }).then(function (response) {
        if (response.ok) {
            form.reset();
            document.getElementById('successModal').classList.remove('hidden');
        } else {
            document.getElementById('successMessage').innerText = 'There was an error sending your message.';
        }
    }).catch(function (error) {
        document.getElementById('successMessage').innerText = 'There was an error sending your message.';
    });
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('successModal').classList.add('hidden');
    // Reset the form to clear CAPTCHA if the user closes the modal
    document.getElementById('contactForm').reset();
});
