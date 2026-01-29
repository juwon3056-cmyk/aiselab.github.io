// AISE Lab Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 HTML 자동 생성
    createMobileMenu();
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // 모바일 메뉴 토글
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.classList.toggle('active');
            
            // 메뉴 열릴 때 스크롤 방지
            if (!mobileMenu.classList.contains('hidden')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // 메뉴 항목 클릭 시 닫기
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // 모바일 드롭다운 처리
        mobileMenu.querySelectorAll('.dropdown > a').forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('active');
                }
            });
        });
        
        // 외부 클릭 시 닫기
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Active navigation highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#2C4E5E';
            link.style.fontWeight = '600';
        }
    });
});

// 모바일 메뉴 HTML 생성 함수
function createMobileMenu() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    // 햄버거 버튼 생성
    const btn = document.createElement('button');
    btn.id = 'mobile-menu-btn';
    btn.className = 'mobile-menu-btn';
    btn.innerHTML = '<span></span><span></span><span></span>';
    btn.setAttribute('aria-label', 'Toggle menu');
    nav.appendChild(btn);
    
    // 모바일 메뉴 생성
    const desktopMenu = nav.querySelector('ul');
    if (desktopMenu) {
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.className = 'mobile-menu hidden';
        mobileMenu.innerHTML = desktopMenu.innerHTML;
        nav.appendChild(mobileMenu);
    }
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        // 데스크톱으로 변경 시 모바일 메뉴 닫기
        if (window.innerWidth >= 768 && mobileMenu) {
            mobileMenu.classList.add('hidden');
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    }, 250);
});

// ESC 키로 메뉴 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    }
});

// Image lazy loading fallback for older browsers
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}