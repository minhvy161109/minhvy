
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    
    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
};
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    
    slides[currentIndex].classList.remove('active');
    
    
    currentIndex = (currentIndex + 1) % slides.length;
    
    
    slides[currentIndex].classList.add('active');
}


setInterval(nextSlide, 5000);
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            
            entry.target.classList.add('active');
        } else {
            
        }
    });
}, {
    threshold: 0.1 
});


document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));