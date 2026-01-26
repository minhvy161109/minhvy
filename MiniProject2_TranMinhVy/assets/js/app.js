// ... Code cũ (Header & Menu) giữ nguyên ...

    // --- BÀI 2: HERO ANIMATION (GSAP) ---
    
    // Tạo Timeline để chạy tuần tự
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // 1. Hình ảnh xuất hiện (Opacity + Scale)
    tl.fromTo(".hero-image", 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1 }
    );

    // 2. Tiêu đề trượt từ dưới lên
    tl.fromTo(".hero-title", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        "-=0.5" // Chạy sớm hơn 0.5s so với cái trước kết thúc
    );

    // 3. Mô tả trượt từ dưới lên
    tl.fromTo(".hero-desc", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        "-=0.6"
    );

    // 4. Nút bấm nảy ra
    tl.fromTo(".hero-btn-group", 
        { opacity: 0, scale: 0.5 }, 
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, 
        "-=0.5"
    );

    // --- KẾT THÚC BÀI 2 ---
    // --- BÀI 3: KÍCH HOẠT AOS VÀ PARALLAX ---

// 1. Khởi tạo thư viện AOS (Dùng cho Section animation)
AOS.init({
    duration: 1000, // Thời gian chạy hiệu ứng (1 giây)
    once: false,    // Có chạy lại khi cuộn ngược lên không
});

// 2. Viết hiệu ứng Parallax nhẹ cho các phần tử có class 'parallax-item'
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY; // Lấy vị trí cuộn chuột hiện tại
    const parallaxElements = document.querySelectorAll('.parallax-item');
    
    parallaxElements.forEach(el => {
        // Di chuyển phần tử theo hướng ngược lại với tốc độ chậm (0.1)
        el.style.transform = `translateY(${scrollValue * 0.1}px)`;
    });
});
// --- BÀI 4: FORM VALIDATION & INTERACTION ---
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('.form-input');

    // 1. Validation Realtime khi người dùng nhập
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.type === 'email') {
                const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
                input.classList.toggle('invalid', !isEmail);
            } else {
                input.classList.toggle('invalid', input.value.trim() === '');
            }
        });
    });

    // 2. Xử lý Submit
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.querySelector('#submitBtn');
        const spinner = btn.querySelector('.loading-spinner');
        const btnText = btn.querySelector('.btn-text');

        // Hiệu ứng Loading
        btnText.style.display = 'none';
        spinner.style.display = 'block';

        // Giả lập gửi dữ liệu (sau 2 giây)
        setTimeout(() => {
            // Lưu vào localStorage theo yêu cầu
            const formData = {
                name: document.querySelector('#name').value,
                email: document.querySelector('#email').value
            };
            localStorage.setItem('lastContact', JSON.stringify(formData));

            // Hiện Toast thông báo
            const toast = document.querySelector('#toast');
            toast.classList.add('show');

            // Reset Form
            spinner.style.display = 'none';
            btnText.style.display = 'block';
            contactForm.reset();

            // Ẩn Toast sau 3 giây
            setTimeout(() => toast.classList.remove('show'), 3000);
        }, 2000);
    });
}
// Thêm vào cuối file app.js
if (document.querySelector('.mySwiper')) {
    const swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
}