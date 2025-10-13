document.addEventListener('DOMContentLoaded', function() {
    
    // --- ÇEVİRİ OBJESİ ---
    const translations = {
        en: {
            navHome: 'Home', navAbout: 'About', navContact: 'Contact',
            educationTitle: 'EDUCATION',
            bauName: 'Bahçeşehir University',
            bauMaster: "Master's Degree in Computer Engineering", bauMasterDate: "(September 2025 - Ongoing)",
            bauBachelor: "Bachelor's Degree in Computer Engineering", bauBachelorDate: "(September 2017 - July 2021)",
            bauDetail1: "Board Member: Aerospace Community", bauDetail2: "Member: Al Community, Software Community, IEEE Community", bauDetail3: "2017-2018 Fall Semester Honour Roll",
            politoName: 'Politecnico di Torino',
            politoMaster: "Master's Degree in Computer Engineering", politoDate: "(October 2023 - December 2024)",
            politoDetail: "Completed the first year of the Master's program; the degree was not completed.",
            experienceTitle: "PROFESSIONAL EXPERIENCE (3 YEARS)",
            vodafoneRole: "Software Engineer", vodafoneDate: "(February 2022 - August 2023)",
            vodafoneDetail1: "Served as Scrum Master for a core squad automating end- to-end test processes for Vodafone's internal teams.", vodafoneDetail2: "Worked as an outsourced employee from Netas.", vodafoneDetail3: "Technologies used: Java, Selenium, RestAPI, SSH, Linux commands, TestNG, Maven, Allure, Jenkins.",
            netasRole1: "Test Automation Development Engineer", netasDate1: "(August 2021 - January 2022)",
            netasDetail1: "Developed test scripts for the Turkcell TV+ application and executed test suites in Jenkins.",
            netasTechs1: "Used Java, Appium, Selenium, Gradle, Gherkin, Cucumber, Allure, Jenkins, Jira, and Atlassian Stash.",
            netasRole2: "Test Automation Engineer", netasDate2: "(November 2020 - July 2021)",
            netasDetail2: "Developed scripts for test cases of the Turkcell BiP application and executed test suites in Jenkins (4 days a week).",
            netasTechs2: "Technologies used: Java, Appium, Gradle, Gherkin, Cucumber. Allure, Jenkins, Jira, and Atlassian Stash.",
            netasRole3: "Intern", netasDate3: "(July 2020 - August 2020)",
            netasDetail3: "Developed scripts for test cases of the Turkcell BiP application and executed test suites in Jenkins.",
            netasTechs3: "Utilized Java, Appium, Gradle, Gherkin, Cucumber, Allure, Jenkins, Jira, and Atlassian Stash.",
            competenceTitle: "COMPETENCE", competenceSubTitle: "Tools and Technologies:",
            competenceList1: "Languages & Principles:", competenceList2: "Frameworks & Libraries:", competenceList3: "Methodologies & Platforms:",
            aboutTitle: "ABOUT ME",
            aboutParagraph: "I am a Software Engineer with 3 years of professional experience, specializing in Java-based test automation, API testing, and CI/CD processes. Throughout my career at leading telecommunication companies like Turkcell and Vodafone, I have successfully automated complex test scenarios using modern technologies such as Selenium, Appium, and Jenkins. I have experience working with Agile methodologies and have served as a Scrum Master. I hold a Bachelor's degree in Computer Engineering from Bahçeşehir University and am currently pursuing my Master's degree in the same field. I am focused on continuous learning and improving my skills with new technologies.",
            contactTitle: "CONTACT", contactSubTitle: "You can reach me through the channels below."
        },
        tr: {
            navHome: 'Ana Sayfa', navAbout: 'Hakkımda', navContact: 'İletişim',
            educationTitle: 'EĞİTİM',
            bauName: 'Bahçeşehir Üniversitesi',
            bauMaster: "Bilgisayar Mühendisliği Yüksek Lisans", bauMasterDate: "(Eylül 2025 - Devam Ediyor)",
            bauBachelor: "Bilgisayar Mühendisliği Lisans", bauBachelorDate: "(Eylül 2017 - Temmuz 2021)",
            bauDetail1: "Yönetim Kurulu Üyesi: Havacılık ve Uzay Topluluğu", bauDetail2: "Üye: Yapay Zeka Topluluğu, Yazılım Topluluğu, IEEE Topluluğu", bauDetail3: "2017-2018 Güz Dönemi Onur Derecesi",
            politoName: 'Politecnico di Torino',
            politoMaster: "Bilgisayar Mühendisliği Yüksek Lisans", politoDate: "(Ekim 2023 - Aralık 2024)",
            politoDetail: "Yüksek lisans programının ilk yılı tamamlandı; derece tamamlanmadı.",
            experienceTitle: "PROFESYONEL DENEYİM (3 YIL)",
            vodafoneRole: "Yazılım Mühendisi", vodafoneDate: "(Şubat 2022 - Ağustos 2023)",
            vodafoneDetail1: "Vodafone'un iç ekipleri için uçtan uca test süreçlerini otomatize eden bir ekibin Scrum Master'ı olarak görev alındı.", vodafoneDetail2: "Netaş tarafından dış kaynak olarak çalışıldı.", vodafoneDetail3: "Kullanılan Teknolojiler: Java, Selenium, RestAPI, SSH, Linux komutları, TestNG, Maven, Allure, Jenkins.",
            netasRole1: "Test Otomasyon Geliştirme Mühendisi", netasDate1: "(Ağustos 2021 - Ocak 2022)",
            netasDetail1: "Turkcell TV+ uygulaması için test betikleri geliştirildi ve test paketleri Jenkins'te yürütüldü.",
            netasTechs1: "Kullanılanlar: Java, Appium, Selenium, Gradle, Gherkin, Cucumber, Allure, Jenkins, Jira, ve Atlassian Stash.",
            netasRole2: "Test Otomasyon Mühendisi", netasDate2: "(Kasım 2020 - Temmuz 2021)",
            netasDetail2: "Turkcell BiP uygulaması için test senaryoları geliştirildi ve test paketleri Jenkins'te yürütüldü (haftada 4 gün).",
            netasTechs2: "Kullanılan Teknolojiler: Java, Appium, Gradle, Gherkin, Cucumber. Allure, Jenkins, Jira, ve Atlassian Stash.",
            netasRole3: "Stajyer", netasDate3: "(Temmuz 2020 - Ağustos 2020)",
            netasDetail3: "Turkcell BiP uygulaması için test senaryoları geliştirildi ve test paketleri Jenkins'te yürütüldü.",
            netasTechs3: "Kullanılanlar: Java, Appium, Gradle, Gherkin, Cucumber, Allure, Jenkins, Jira, ve Atlassian Stash.",
            competenceTitle: "YETKİNLİKLER", competenceSubTitle: "Araçlar ve Teknolojiler:",
            competenceList1: "Diller ve Prensipler:", competenceList2: "Framework'ler ve Kütüphaneler:", competenceList3: "Metodolojiler ve Platformlar:",
            aboutTitle: "HAKKIMDA",
            aboutParagraph: "Java tabanlı test otomasyonu, API testi ve CI/CD süreçleri konusunda uzmanlaşmış, 3 yıllık profesyonel deneyime sahip bir Yazılım Mühendisiyim. Kariyerim boyunca Turkcell ve Vodafone gibi önde gelen telekomünikasyon şirketlerinde, Selenium, Appium ve Jenkins gibi modern teknolojileri kullanarak karmaşık test senaryolarının otomasyonunu başarıyla gerçekleştirdim. Agile metodolojilerle çalışma ve Scrum Master olarak görev yapma tecrübem bulunmaktadır. Bahçeşehir Üniversitesi Bilgisayar Mühendisliği lisans derecesine sahibim ve şu anda aynı alanda yüksek lisans eğitimime devam etmekteyim. Sürekli öğrenmeye ve yeteneklerimi yeni teknolojilerle geliştirmeye odaklıyım.",
            contactTitle: "İLETİŞİM", contactSubTitle: "Bana aşağıdaki kanallardan ulaşabilirsiniz."
        }
    };
    
    // --- FONKSİYONLAR ---
    function initTabNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const contentSections = document.querySelectorAll('.content-section');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.id.replace('-link', '-content');
                const targetSection = document.getElementById(targetId);
                if (targetSection.classList.contains('active')) return;
                contentSections.forEach(section => section.classList.remove('active'));
                targetSection.classList.add('active');
                navLinks.forEach(navLink => navLink.setAttribute('aria-selected', 'false'));
                this.setAttribute('aria-selected', 'true');
                updateNavUnderline(this);
            });
        });
    }

    function initThemeToggle() {
        const themeToggleButton = document.getElementById('theme-toggle');
        const body = document.body;
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light') {
            body.classList.add('light-theme');
            themeToggleButton.textContent = '🌙';
        } else {
            themeToggleButton.textContent = '☀️';
        }
        themeToggleButton.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const newTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
            themeToggleButton.textContent = newTheme === 'light' ? '🌙' : '☀️';
            localStorage.setItem('theme', newTheme);
        });
    }

    function initNavbarScrollEffect() {
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 10);
        });
    }

    function initBackToTopButton() {
        const backToTopButton = document.getElementById('back-to-top-btn');
        if (!backToTopButton) return;
        window.addEventListener('scroll', () => {
            backToTopButton.classList.toggle('show', window.scrollY > 300);
        });
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function initScrollReveal() {
        const contentBoxes = document.querySelectorAll('.content-box');
        if (!contentBoxes.length) return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });
        contentBoxes.forEach(box => observer.observe(box));
    }

    function initBrandingLink() {
        const brandLink = document.getElementById('brand-link');
        const homeLink = document.getElementById('home-link');
        if (!brandLink || !homeLink) return;
        brandLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (homeLink.getAttribute('aria-selected') !== 'true') {
                homeLink.click();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function updateNavUnderline(targetLink) {
        const underline = document.querySelector('.nav-underline');
        if (!underline || !targetLink) return;
        underline.style.width = `${targetLink.offsetWidth}px`;
        underline.style.left = `${targetLink.offsetLeft}px`;
    }

    function initAnimatedUnderline() {
        const initialActiveLink = document.querySelector('.nav-link[aria-selected="true"]');
        setTimeout(() => updateNavUnderline(initialActiveLink), 100);
    }
    
    function initLanguageSwitcher() {
        const langEnBtn = document.getElementById('lang-en');
        const langTrBtn = document.getElementById('lang-tr');

        const switchLanguage = (lang) => {
            document.querySelectorAll('[data-translate-key]').forEach(el => {
                const key = el.getAttribute('data-translate-key');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
            document.documentElement.lang = lang;
            localStorage.setItem('language', lang);
            
            langEnBtn.classList.toggle('active-lang', lang === 'en');
            langTrBtn.classList.toggle('active-lang', lang === 'tr');

            const currentActiveLink = document.querySelector('.nav-link[aria-selected="true"]');
            updateNavUnderline(currentActiveLink);
        };
        
        langEnBtn.addEventListener('click', () => switchLanguage('en'));
        langTrBtn.addEventListener('click', () => switchLanguage('tr'));
        
        const savedLang = localStorage.getItem('language') || 'en';
        switchLanguage(savedLang);
    }

    // --- TÜM FONKSİYONLARI BAŞLAT ---
    initTabNavigation();
    initThemeToggle();
    initNavbarScrollEffect();
    initBackToTopButton();
    initScrollReveal();
    initBrandingLink();
    initLanguageSwitcher();
    initAnimatedUnderline();
});