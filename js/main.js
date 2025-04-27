// Hàm chờ tài liệu HTML tải xong
document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng cuộn mượt cho menu
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Chỉ áp dụng cho các liên kết trong trang hiện tại
            const href = this.getAttribute('href');
            if (href.charAt(0) === '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Hiệu ứng xuất hiện khi cuộn
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature, .app-card, .tutorial-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Gọi hàm animateOnScroll khi tải trang và khi cuộn
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // Hiệu ứng cho nút CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        ctaButton.addEventListener('click', function() {
            // Chuyển đến trang ứng dụng khi nhấp vào nút CTA
            window.location.href = 'app.html';
        });
    }
    
    // Xử lý form liên hệ
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            this.reset();
        });
    }
    
    // Xử lý biểu mẫu đăng ký nhận thông báo (cho trang Coming Soon)
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('notify-email');
            const email = emailInput.value.trim();
            
            if (email) {
                alert(`Cảm ơn bạn đã đăng ký! Chúng tôi sẽ thông báo cho ${email} khi trang web ra mắt.`);
                emailInput.value = '';
                
                // Hiệu ứng thành công
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Đăng ký thành công!';
                subscribeForm.appendChild(successMessage);
                
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    }
    
    // Hiệu ứng đếm ngược cho trang Coming Soon
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        // Đặt ngày ra mắt (ví dụ: 30 ngày kể từ bây giờ)
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 30);
        
        // Cập nhật đếm ngược mỗi giây
        function updateCountdown() {
            const currentDate = new Date();
            const difference = launchDate - currentDate;
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `
                <div class="countdown-item">${days}<span>Ngày</span></div>
                <div class="countdown-item">${hours}<span>Giờ</span></div>
                <div class="countdown-item">${minutes}<span>Phút</span></div>
                <div class="countdown-item">${seconds}<span>Giây</span></div>
            `;
        }
        
        // Cập nhật đếm ngược ngay lập tức và sau đó mỗi giây
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Hiệu ứng chuyển động cho trang Coming Soon
    const comingSoonSection = document.querySelector('.coming-soon');
    if (comingSoonSection) {
        comingSoonSection.classList.add('animate');
    }
});