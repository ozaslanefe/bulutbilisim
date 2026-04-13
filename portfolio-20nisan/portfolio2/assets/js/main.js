document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // ETKİLEŞİM 1: HAMBURGEr MENÜ
  // Mobil ekranlarda nav linkleri gizlenir.
  // ☰ butonuna tıklanınca menü açılır/kapanır.
  // ============================================================
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ============================================================
  // ETKİLEŞİM 2: YUKARI ÇIK BUTONU
  // Kullanıcı 300px aşağı kaydırdığında sağ altta bir buton
  // belirir. Tıklanınca sayfanın en üstüne smooth geçiş yapar.
  // ============================================================
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const footerUp = document.querySelector('.footer-up');
  if (footerUp) {
    footerUp.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ============================================================
  // ETKİLEŞİM 3: KOYU / AÇIK TEMA DEĞİŞTİRİCİ
  // 🌙 butonuna tıklanınca body'ye "dark" class eklenir/kaldırılır.
  // CSS değişkenleri ile tüm renkler anında değişir.
  // Tercih localStorage'a kaydedilir, sayfa yenilenince hatırlanır.
  // ============================================================
  const themeBtn = document.getElementById('theme-toggle');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (themeBtn) themeBtn.textContent = '☀️';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      themeBtn.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // ============================================================
  // ETKİLEŞİM 4: TYPEWRİTER YAZMA EFEKTİ
  // Hero bölümünde kelimeler sırayla karakter karakter yazılır,
  // ardından silinir ve bir sonraki kelimeye geçilir.
  // ============================================================
  const typewriterEl = document.getElementById('typewriter');

  if (typewriterEl) {
    const words = [
      'Yazılım Geliştirici.',
      'Web Tasarımcısı.',
      'Java Geliştiricisi.',
      'Öğrenci.',
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typewriterEl.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriterEl.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400;
      }

      setTimeout(type, typingSpeed);
    }

    setTimeout(type, 600);
  }

  // ── Aktif nav linkini işaretle ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === currentPage) a.classList.add('active');
  });

  // ── Scroll Reveal ──
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // ── Beceri Çubukları ──
  const skillsGrid = document.querySelector('.skills-grid');
  if (skillsGrid) {
    const barObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-fill').forEach(bar => {
            const w = parseFloat(bar.style.width) / 100;
            bar.style.transform = 'scaleX(0)';
            setTimeout(() => { bar.style.transform = `scaleX(${w})`; }, 150);
          });
          barObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    barObs.observe(skillsGrid);
  }

  // ── İletişim Formu ──
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = '✓ Gönderildi!';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = 'Mesaj Gönder'; btn.disabled = false; }, 3000);
    });
  }

});
