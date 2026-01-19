// --- 1. SCROLL REVEAL (Hiện nội dung khi cuộn) ---
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // Khoảng cách từ đáy màn hình để bắt đầu hiện

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });

    // --- 2. SCROLL SPY (Menu sáng theo vị trí) ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item');
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) { // -150px để bù trừ chiều cao menu
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

// --- 3. DARK MODE TOGGLE (Chuyển chế độ Sáng/Tối) ---
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Đổi icon mặt trời/mặt trăng
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }
});

// --- 4. CUSTOM CURSOR (Con trỏ chuột trang trí) ---
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hiệu ứng khi hover vào nút hoặc link
const hoverElements = document.querySelectorAll('a, button');
hoverElements.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursor.style.backgroundColor = "rgba(255, 107, 107, 0.1)";
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.backgroundColor = "transparent";
    });
});