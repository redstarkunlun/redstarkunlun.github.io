// モダンなJavaScriptファイル - redstarkunlun.github.io

// DOM要素の取得
const nav = document.getElementById('nav');
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// スクロール時のナビゲーション効果
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 12px var(--shadow-color)';
  } else {
    nav.style.boxShadow = '0 2px 10px var(--shadow-color)';
  }
});

// ローカルストレージからテーマ設定を読み込む
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

// テーマアイコンを更新する関数
function updateThemeIcon(theme) {
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// テーマ切り替えイベント
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

// モバイルメニュートグル
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// ナビゲーションリンクのクリックでメニューを閉じる
const navLinks = document.querySelectorAll('.menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 767) {
      menu.classList.remove('active');
    }
  });
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = nav.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// スキルバーのアニメーション
function animateSkillBars() {
  const skillLevels = document.querySelectorAll('.skill-level');
  skillLevels.forEach(level => {
    const width = level.style.width;
    level.style.width = '0';
    setTimeout(() => {
      level.style.width = width;
    }, 300);
  });
}

// スクロールアニメーション
function checkFadeElements() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// コンタクトフォーム送信
const submitBtn = document.getElementById('submit-form');
if (submitBtn) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // フォームの値を取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // 簡易バリデーション
    if (!name || !email || !message) {
      alert('すべての項目を入力してください。');
      return;
    }
    
    // 実際の送信処理はサーバーサイドで行う必要があります
    // ここではデモとしてアラートを表示
    alert('現在、フォームの送信機能は実装中です。SNSやメールでお問い合わせください。');
    
    // フォームをリセット
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
}

// 現在のページをハイライト
function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.menu a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || 
        (currentPath === '/' && linkPath === '#about') ||
        (currentPath.includes(linkPath) && linkPath !== '#')) {
      link.classList.add('active');
    }
  });
}

// 初期化
window.addEventListener('load', () => {
  animateSkillBars();
  checkFadeElements();
  highlightCurrentPage();
  
  // 現在の年を設定
  const yearElements = document.querySelectorAll('.current-year');
  yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});

// スクロールイベント
window.addEventListener('scroll', checkFadeElements);

// リサイズイベント
window.addEventListener('resize', () => {
  if (window.innerWidth > 767 && menu.classList.contains('active')) {
    menu.classList.remove('active');
  }
});
