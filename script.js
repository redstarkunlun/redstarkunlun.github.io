// スクロール時のナビゲーション効果
window.addEventListener('scroll', function() {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 12px var(--shadow-color)';
  } else {
    nav.style.boxShadow = '0 2px 10px var(--shadow-color)';
  }
});

// テーマの切り替え機能
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

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
