// Typing Effect
const typedText = document.getElementById('typed');
const words = ["Student", "Web Developer", "AI Enthusiast", "UI Designer"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIdx];
    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typedText.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
    }

    let typeSpeed = isDeleting ? 100 : 200;
    
    if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pause at end
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
    }

    setTimeout(type, typeSpeed);
}

// Dark/Light Mode Toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    
    const icon = themeBtn.querySelector('i');
    if (body.classList.contains('light-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Sticky Navbar & Scroll Reveal
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 50);

    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

// Lightbox Gallery
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Initialize Typing
document.addEventListener('DOMContentLoaded', () => {
    type();
});
