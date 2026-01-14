document.addEventListener('DOMContentLoaded', () => {
    
   
    const btnTheme = document.getElementById('btn-theme');
    btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu-link');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    
    const boxes = document.querySelectorAll('.box');
    const checkBoxes = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) box.classList.add('show');
            else box.classList.remove('show');
        });
    };
    window.addEventListener('scroll', checkBoxes);

    
    const btnJump = document.querySelector('.jump');
    btnJump.addEventListener('mouseover', () => {
        btnJump.classList.add('animate');
    });
    btnJump.addEventListener('animationend', () => {
        btnJump.classList.remove('animate');
    });

    
    const circle = document.querySelector('.circle');
    document.addEventListener('mousemove', (e) => {
        
        circle.style.left = `${e.pageX - 15}px`;
        circle.style.top = `${e.pageY - 15}px`;
    });
});