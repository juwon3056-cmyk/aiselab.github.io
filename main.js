// AISE Lab Website - Main JavaScript

// =============================================
// 다국어 번역 데이터 (KO / EN)
// =============================================
const translations = {
    en: {
        // Nav
        "nav.research": "Research",
        "nav.publications": "Publications",
        "nav.members": "Members ▾",
        "nav.professor": "Professor",
        "nav.researchers": "Researchers",
        "nav.projects": "Projects",
        "nav.news": "News",
        "nav.contact": "Contact",

        // Footer
        "footer.lab": "AISE Lab",
        "footer.desc": "AI & Structural Engineering Laboratory",
        "footer.univ": "Sejong University",
        "footer.location": "Seoul, South Korea",
        "footer.copyright": "© 2026 AISE Lab, Sejong University. All Rights Reserved.",

        // Index
        "index.hero.title": "AI & Structural Engineering",
        "index.hero.subtitle": "Laboratory",
        "index.hero.meta": "Department of Architectural Engineering · Sejong University",
        "index.about.title": "About\nAISE Lab",
        "index.about.lead": "AISE Lab focuses on developing innovative AI-driven solutions for structural engineering challenges.",
        "index.about.p1": "Our research bridges the gap between artificial intelligence and structural engineering to create more efficient, reliable, and intelligent structural analysis and design methodologies.",
        "index.about.p2": "Led by Professor Seunghye Lee, our team explores cutting-edge technologies including deep learning-based surrogate models, structural optimization, and computational mechanics to address real-world challenges in structural engineering and construction.",
        "index.research.title": "Research Areas",
        "index.research1.title": "AI-based Surrogate Structural Analysis",
        "index.research1.desc": "Developing deep learning-based surrogate models for efficient and accurate structural analysis and prediction.",
        "index.research2.title": "AI-based Automated Structural Design",
        "index.research2.desc": "Leveraging artificial intelligence for intelligent automation in structural design and optimization processes.",
        "index.research3.title": "AI-based Construction Robot Operations",
        "index.research3.desc": "Advancing construction automation through AI-driven robotics and intelligent operation systems.",
        "index.news.title": "Latest Updates",
        "index.news1.title": "Website Renewal Open",
        "index.news1.desc": "The official website of AISE Lab has been renewed. Check out our research and activities.",
        "index.news2.title": "AISE Lab Established",
        "index.news2.desc": "AI Structural Engineering Laboratory (AISE Lab) was officially established at Sejong University.",
        "index.hero.lab": "Where Artificial Intelligence Meets Structural Engineering",
        "index.hero.cta1": "Explore Research →",
        "index.hero.cta2": "Meet the Team",
        "index.stat.title": "Research Focus",
        "index.stat1": "Core Research Areas",
        "index.stat2": "Structural Engineering",
        "index.stat3": "Sejong University, Seoul",
        "index.about.label": "About",
        "index.kw1": "Deep Learning",
        "index.kw2": "Structural Optimization",
        "index.kw3": "Computer Vision",
        "index.kw4": "Computational Mechanics",
        "index.kw5": "Construction Robotics",
        "index.kw6": "Metaheuristics",
        "index.research.viewall": "View All →",
        "index.research.link": "Learn more →",
        "index.research.link2": "Learn more →",
        "index.research.link3": "Learn more →",
        "index.news.viewall": "View All →",

        // Research
        "research.page.title": "Research Areas",
        "research.page.subtitle": "Pioneering AI-driven structural engineering solutions",
        "research.area1.title": "AI-based Surrogate Structural Analysis",
        "research.area1.p": "We develop deep learning-based surrogate models that efficiently approximate complex structural analysis results. By training neural networks on finite element analysis data, we create fast and accurate predictive models.",
        "research.area1.li1": "AI & Deep Learning for Structural Engineering",
        "research.area1.li2": "Computational Mechanics & Structural Analysis",
        "research.area1.li3": "Construction Safety & Health Monitoring",
        "research.area1.li4": "Data-Driven Decision Making",
        "research.area2.title": "AI-based Automated Structural Design",
        "research.area2.p": "We leverage machine learning and metaheuristic optimization algorithms to automate structural design processes. Our research aims to create intelligent systems that can generate optimal designs.",
        "research.area2.li1": "Generative design using AI",
        "research.area2.li2": "Multi-objective structural optimization",
        "research.area2.li3": "Metaheuristic algorithms",
        "research.area2.li4": "Topology optimization",
        "research.area3.title": "AI-based Construction Robot Operations",
        "research.area3.p": "Our construction robotics research focuses on developing intelligent automation systems for construction sites. By combining computer vision, robotics, and AI, we aim to improve safety and efficiency.",
        "research.area3.li1": "Computer vision for construction monitoring",
        "research.area3.li2": "AI-driven safety monitoring",
        "research.area3.li3": "Automated progress tracking",
        "research.area3.li4": "Intelligent equipment operation",

        // Publications
        "pub.badge": "Updates Coming Soon",
        "pub.title": "Lab Publications",
        "pub.desc": "Our team is currently working on cutting-edge research in AI and Structural Engineering. New publications and conference proceedings will be updated here shortly.",
        "pub.wip": "(Research in Progress)",

        // Professor
        "prof.page.title": "Professor",
        "prof.page.subtitle": "Lab Director",
        "prof.name": "Seunghye Lee",
        "prof.rank": "Associate Professor",
        "prof.edu.title": "Education",
        "prof.edu.1": "Ph.D. in Architectural Engineering, Sejong University (2015)",
        "prof.edu.2": "M.A. in Architectural Engineering, Sejong University (2003)",
        "prof.edu.3": "B.A. in Architectural Engineering, Sejong University (2001)",
        "prof.interests.title": "Research Interests",
        "prof.interests.1": "Computational Mechanics",
        "prof.interests.2": "Structural Optimization",
        "prof.interests.3": "Deep Learning-based Surrogate Models",
        "prof.interests.4": "Metaheuristic Algorithms",
        "prof.interests.5": "Tensegrity Structures",
        "prof.exp.title": "Professional Experience",
        "prof.exp.1": "2016–present: Associate Professor, Sejong University",
        "prof.exp.2": "2015–2016: Post-doctoral Researcher, Sejong University",
        "prof.exp.3": "2009–2013: Researcher, RIST (POSCO)",
        "prof.exp.4": "2006–2008: Researcher, Korea Institute of Civil Engineering and Building Technology (KICT)",
        "prof.exp.5": "2003–2005: Engineer, Dongyang Structural Engineers Group",
        "prof.pub.title": "Research Profiles & Publications",
        "prof.scholar": "Google Scholar",
        "prof.scholar.sub": "View Publications",
        "prof.elsevier": "Elsevier Pure",
        "prof.elsevier.sub": "Faculty Profile",
        "prof.scopus": "Scopus",
        "prof.scopus.sub": "Author Details",

        // People
        "people.page.title": "Members",
        "people.page.subtitle": "Our research team",
        "people.section.title": "Undergraduate Researcher",
        "people.juwon.name": "Juwon Choi",
        "people.juwon.rank": "Undergraduate Researcher",
        "people.juwon.dept": "Department of Architectural Engineering, Sejong University",
        "people.juwon.interests": "Computer Vision, Construction Robotics, Deep Learning",

        // Projects
        "proj.page.title": "Research Projects",
        "proj.page.subtitle": "Selected research projects",
        "proj.completed": "Completed Projects",
        "proj.card1.status": "Completed",
        "proj.card1.title": "Long-Span Structural Defect Detection via Computer Vision",
        "proj.card1.focus.label": "Focus Area",
        "proj.card1.focus.val": "Computer Vision & Deep Learning / Structural Health Monitoring",
        "proj.card1.role.label": "Role",
        "proj.card1.role.val": "Researcher",
        "proj.card1.desc": "Designed computer vision pipelines for multi-class defect detection on long-span structures using deep learning. Optimized models through curriculum learning to overcome limited training data constraints.",
        "proj.card2.status": "Completed",
        "proj.card2.title": "Unitree G1 Edu Plus Basic Operation Guide & Seminar",
        "proj.card2.focus.label": "Focus Area",
        "proj.card2.focus.val": "Humanoid Robotics · AI Robot Operation · Technical Education",
        "proj.card2.role.label": "Role",
        "proj.card2.role.val": "Researcher",
        "proj.card2.desc": "Developed a comprehensive basic operation guide for the Unitree G1 Edu Plus humanoid robot and conducted technical seminars. Covered hardware setup, motion control, and AI integration to support research onboarding and training.",
        "proj.placeholder": "Additional project information will be added.",

        // News
        "news.page.title": "Lab News",
        "news.page.subtitle": "Latest updates, announcements, and activities",
        "news.item1.title": "Website Renewal Open",
        "news.item1.desc": "The official website of AISE Lab has been launched. We will share our research achievements and lab activities here.",
        "news.item1.tag": "Announcement",
        "news.item2.title": "AISE Lab Established",
        "news.item2.desc": "AI Structural Engineering Laboratory (AISE Lab) was officially established at Sejong University. Led by Professor Seunghye Lee, we aim to pioneer AI-driven structural engineering solutions.",
        "news.item2.tag": "Milestone",

        // Contact
        "contact.page.title": "Contact Us",
        "contact.page.subtitle": "Get in touch with AISE Lab",
        "contact.lab.title": "Laboratory",
        "contact.lab.name": "AI Structural Engineering Lab (AISE Lab)",
        "contact.lab.kr": "AI구조공학 연구실",
        "contact.loc.title": "Location",
        "contact.loc.text": "Room 225, Chungmu Building (충무관 225호)\nDepartment of Architectural Engineering\nSejong University\n209 Neungdong-ro, Gwangjin-gu\nSeoul 05006, South Korea",
        "contact.email.title": "Email",
        "contact.phone.title": "Phone",
        "contact.links.title": "Links",
        "contact.faculty.link": "Faculty Profile",
        "contact.dept.link": "Department Website",
        "contact.dir.title": "Directions",
        "contact.dir.1": "Subway: Children's Grand Park Station (Line 7), Exit 1 (5 min walk)",
        "contact.dir.2": "Bus: Multiple routes available to Sejong University stop",
        "contact.dir.3": "Located in Gwangjin-gu, Seoul",
    },
    ko: {
        // Nav
        "nav.research": "연구",
        "nav.publications": "논문",
        "nav.members": "구성원 ▾",
        "nav.professor": "교수",
        "nav.researchers": "연구원",
        "nav.projects": "프로젝트",
        "nav.news": "소식",
        "nav.contact": "오시는 길",

        // Footer
        "footer.lab": "AISE 연구실",
        "footer.desc": "AI구조공학 연구실",
        "footer.univ": "세종대학교",
        "footer.location": "대한민국 서울",
        "footer.copyright": "© 2026 AISE Lab, 세종대학교. All Rights Reserved.",

        // Index
        "index.hero.title": "AI & 구조공학",
        "index.hero.subtitle": "AISE Lab",
        "index.hero.meta": "건축공학과 · 세종대학교",
        "index.about.title": "연구실\n소개",
        "index.about.lead": "AISE 연구실은 구조공학의 난제를 AI로 해결하는 새로운 방법론을 연구합니다.",
        "index.about.p1": "인공지능과 구조공학의 접점에서, 기존 방법의 한계를 뛰어넘는 더 효율적이고 신뢰성 높은 구조해석·설계 체계를 구축하고 있습니다.",
        "index.about.p2": "이승혜 교수님의 지도 아래, 딥러닝 기반 대리 모델, 구조 최적화, 전산역학 등 첨단 기술을 탐구하여 건설 및 구조공학 분야의 실제 문제 해결에 기여합니다.",
        "index.research.title": "연구 분야",
        "index.research1.title": "AI 기반 구조 대리해석",
        "index.research1.desc": "유한요소해석 데이터로 학습한 딥러닝 대리 모델로 복잡한 구조 해석을 빠르고 정확하게 수행합니다.",
        "index.research2.title": "AI 기반 구조 자동설계",
        "index.research2.desc": "머신러닝과 메타휴리스틱 최적화를 결합하여 고성능 구조물의 최적 설계를 자동화합니다.",
        "index.research3.title": "AI 기반 건설로봇 운용",
        "index.research3.desc": "컴퓨터 비전과 AI를 접목한 건설 현장 자동화로 안전성과 시공 효율을 높입니다.",
        "index.news.title": "최신 소식",
        "index.news1.title": "홈페이지 리뉴얼 오픈",
        "index.news1.desc": "AISE 연구실 공식 홈페이지가 새롭게 오픈되었습니다. 연구 성과와 다양한 활동을 이곳에서 확인하세요.",
        "index.news2.title": "AISE 연구실 창설",
        "index.news2.desc": "세종대학교에 AI 구조공학 연구실(AISE Lab)이 공식 출범하였습니다.",
        "index.hero.lab": "인공지능과 구조공학이 만나는 곳",
        "index.hero.cta1": "연구 분야 →",
        "index.hero.cta2": "팀 소개",
        "index.stat.title": "연구 중점",
        "index.stat1": "핵심 연구\n분야",
        "index.stat2": "구조\n공학",
        "index.stat3": "세종대학교\n서울",
        "index.about.label": "소개",
        "index.kw1": "딥러닝",
        "index.kw2": "구조 최적화",
        "index.kw3": "컴퓨터 비전",
        "index.kw4": "전산역학",
        "index.kw5": "건설 로봇",
        "index.kw6": "메타휴리스틱",
        "index.research.viewall": "전체 보기 →",
        "index.research.link": "자세히 →",
        "index.research.link2": "자세히 →",
        "index.research.link3": "자세히 →",
        "index.news.viewall": "전체 보기 →",

        // Research
        "research.page.title": "연구 분야",
        "research.page.subtitle": "AI 기반 구조공학의 새 지평을 열다",
        "research.area1.title": "AI 기반 구조 대리해석",
        "research.area1.p": "유한요소해석 데이터를 활용해 신경망을 학습시킴으로써, 복잡한 구조 해석 결과를 효율적으로 근사하는 딥러닝 대리 모델을 개발합니다. 이를 통해 고비용의 수치 해석을 획기적으로 대체합니다.",
        "research.area1.li1": "구조공학을 위한 딥러닝",
        "research.area1.li2": "전산역학 및 유한요소해석",
        "research.area1.li3": "건설 안전 및 구조 건전성 모니터링",
        "research.area1.li4": "데이터 기반 구조공학 의사결정",
        "research.area2.title": "AI 기반 구조 자동설계",
        "research.area2.p": "머신러닝과 메타휴리스틱 최적화 알고리즘을 결합하여 구조 설계 프로세스를 자동화합니다. 성능 기반 최적 설계를 자율적으로 도출하는 지능형 시스템 구축을 목표로 합니다.",
        "research.area2.li1": "AI 기반 생성 설계",
        "research.area2.li2": "다목적 구조 최적화",
        "research.area2.li3": "메타휴리스틱 알고리즘",
        "research.area2.li4": "위상 최적화",
        "research.area3.title": "AI 기반 건설로봇 운용",
        "research.area3.p": "컴퓨터 비전, 로봇공학, AI를 통합하여 건설 현장에 특화된 지능형 자동화 시스템을 개발합니다. 현장 안전 강화와 시공 효율화를 핵심 목표로 삼고 있습니다.",
        "research.area3.li1": "건설 현장 모니터링 비전 시스템",
        "research.area3.li2": "AI 기반 안전·위험 탐지",
        "research.area3.li3": "공정 자동 추적 및 분석",
        "research.area3.li4": "지능형 건설 장비 운용",

        // Publications
        "pub.badge": "업데이트 예정",
        "pub.title": "연구 논문",
        "pub.desc": "AI와 구조공학의 융합 연구를 활발히 진행 중입니다. 발표 논문 및 학술대회 자료는 순차적으로 업데이트될 예정입니다.",
        "pub.wip": "(연구 진행 중)",

        // Professor
        "prof.page.title": "교수",
        "prof.page.subtitle": "연구실 책임교수",
        "prof.name": "이승혜",
        "prof.rank": "부교수",
        "prof.edu.title": "학력",
        "prof.edu.1": "공학박사, 건축공학과, 세종대학교 (2015)",
        "prof.edu.2": "공학석사, 건축공학과, 세종대학교 (2003)",
        "prof.edu.3": "공학사, 건축공학과, 세종대학교 (2001)",
        "prof.interests.title": "연구 관심 분야",
        "prof.interests.1": "전산역학",
        "prof.interests.2": "구조 최적화",
        "prof.interests.3": "딥러닝 기반 대리 모델",
        "prof.interests.4": "메타휴리스틱 알고리즘",
        "prof.interests.5": "텐세그리티 구조",
        "prof.exp.title": "경력",
        "prof.exp.1": "2016 – 현재 · 부교수, 세종대학교 건축공학과",
        "prof.exp.2": "2015 – 2016 · 박사후 연구원, 세종대학교",
        "prof.exp.3": "2009 – 2013 · 연구원, RIST (POSCO 산하 연구소)",
        "prof.exp.4": "2006 – 2008 · 연구원, 한국건설기술연구원 (KICT)",
        "prof.exp.5": "2003 – 2005 · 구조 엔지니어, 동양구조기술사사무소",
        "prof.pub.title": "연구 프로필",
        "prof.scholar": "Google Scholar",
        "prof.scholar.sub": "논문 목록",
        "prof.elsevier": "Elsevier Pure",
        "prof.elsevier.sub": "교수 프로필",
        "prof.scopus": "Scopus",
        "prof.scopus.sub": "저자 정보",

        // People
        "people.page.title": "구성원",
        "people.page.subtitle": "연구팀을 소개합니다",
        "people.section.title": "학부 연구원",
        "people.juwon.name": "최주원",
        "people.juwon.rank": "학부 연구원",
        "people.juwon.dept": "세종대학교 건축공학과",
        "people.juwon.interests": "컴퓨터 비전, 건설 로봇, 딥러닝",

        // Projects
        "proj.page.title": "연구 프로젝트",
        "proj.page.subtitle": "주요 연구 및 개발 프로젝트",
        "proj.completed": "완료된 프로젝트",
        "proj.card1.status": "완료",
        "proj.card1.title": "컴퓨터 비전을 활용한 장경간 구조물 결함 탐지",
        "proj.card1.focus.label": "연구 분야",
        "proj.card1.focus.val": "컴퓨터 비전 · 딥러닝 · 구조 건전성 모니터링",
        "proj.card1.role.label": "역할",
        "proj.card1.role.val": "연구원",
        "proj.card1.desc": "딥러닝을 활용한 장경간 구조물의 다중 클래스 결함 탐지 파이프라인을 설계하였습니다. 제한된 학습 데이터 문제를 극복하기 위해 커리큘럼 러닝 기반의 모델 최적화 기법을 적용하였습니다.",
        "proj.card2.status": "완료",
        "proj.card2.title": "Unitree G1 Edu Plus 기본 조작 가이드 제작 및 세미나 진행",
        "proj.card2.focus.label": "연구 분야",
        "proj.card2.focus.val": "휴머노이드 로봇 · AI 로봇 운용 · 기술 교육",
        "proj.card2.role.label": "역할",
        "proj.card2.role.val": "연구원",
        "proj.card2.desc": "Unitree G1 Edu Plus 휴머노이드 로봇의 체계적인 기본 조작 가이드를 제작하고 기술 세미나를 진행하였습니다. 하드웨어 구성, 모션 제어 등을 다루며 연구실 구성원의 로봇 연구 진입을 지원하였습니다.",
        "proj.placeholder": "추가 프로젝트 정보가 업데이트될 예정입니다.",

        // News
        "news.page.title": "연구실 소식",
        "news.page.subtitle": "최신 공지, 연구 성과 및 활동을 전합니다",
        "news.item1.title": "홈페이지 리뉴얼 오픈",
        "news.item1.desc": "AISE 연구실 공식 홈페이지가 새롭게 오픈되었습니다. 연구 성과와 연구실 소식을 지속적으로 공유할 예정입니다.",
        "news.item1.tag": "공지",
        "news.item2.title": "AISE 연구실 창설",
        "news.item2.desc": "이승혜 교수님의 지도 아래 AI 구조공학 연구실(AISE Lab)이 세종대학교에 공식 출범하였습니다.",
        "news.item2.tag": "이정표",

        // Contact
        "contact.page.title": "오시는 길",
        "contact.page.subtitle": "AISE 연구실에 문의하세요",
        "contact.lab.title": "연구실",
        "contact.lab.name": "AI 구조공학 연구실 (AISE Lab)",
        "contact.lab.kr": "AI구조공학 연구실",
        "contact.loc.title": "위치",
        "contact.loc.text": "충무관 225호\n세종대학교 건축공학과\n서울특별시 광진구 능동로 209",
        "contact.email.title": "이메일",
        "contact.phone.title": "전화",
        "contact.links.title": "링크",
        "contact.faculty.link": "교수 프로필",
        "contact.dept.link": "학과 홈페이지",
        "contact.dir.title": "교통 안내",
        "contact.dir.1": "지하철: 7호선 어린이대공원역 1번 출구 — 도보 약 5분",
        "contact.dir.2": "버스: 세종대학교 정류장 이용",
        "contact.dir.3": "서울특별시 광진구 능동로 209",
    }

};

// =============================================
// 현재 언어 상태
// =============================================
let currentLang = localStorage.getItem('aise-lang') || 'en';

function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('aise-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const val = translations[lang][key];
            // stat-label 등 줄바꿈이 필요한 요소는 innerHTML 사용
            if (el.classList.contains('stat-label') || el.tagName === 'H2') {
                el.innerHTML = val.split("\\n").join("<br>");
            } else {
                el.textContent = val;
            }
        }
    });

    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// =============================================
// DOMContentLoaded
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    // 모바일 메뉴 생성
    createMobileMenu();

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.classList.toggle('active');
            document.body.style.overflow = !mobileMenu.classList.contains('hidden') ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        mobileMenu.querySelectorAll('.dropdown > a').forEach(trigger => {
            trigger.addEventListener('click', function (e) {
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('active');
                }
            });
        });

        document.addEventListener('click', function (e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // 언어 버튼 이벤트
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            applyTranslations(this.dataset.lang);
            // 모바일 메뉴 업데이트 (동기화)
            syncMobileMenuLang();
        });
    });

    // 초기 번역 적용
    applyTranslations(currentLang);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') { e.preventDefault(); return; }
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Fade-in 애니메이션
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
});

// =============================================
// 모바일 메뉴 생성
// =============================================
function createMobileMenu() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const btn = document.createElement('button');
    btn.id = 'mobile-menu-btn';
    btn.className = 'mobile-menu-btn';
    btn.innerHTML = '<span></span><span></span><span></span>';
    btn.setAttribute('aria-label', 'Toggle menu');
    nav.appendChild(btn);

    const desktopMenu = nav.querySelector('ul');
    if (desktopMenu) {
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.className = 'mobile-menu hidden';
        mobileMenu.innerHTML = desktopMenu.outerHTML;
        document.body.appendChild(mobileMenu);
    }
}

function syncMobileMenuLang() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu) return;
    mobileMenu.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// =============================================
// 리사이즈 / ESC 키
// =============================================
let resizeTimer;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (window.innerWidth >= 768 && mobileMenu) {
            mobileMenu.classList.add('hidden');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});