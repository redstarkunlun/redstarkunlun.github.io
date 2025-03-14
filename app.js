document.addEventListener('DOMContentLoaded', function() {
    // DOM要素
    const masterPasswordScreen = document.getElementById('master-password-screen');
    const mainApp = document.getElementById('main-app');
    const masterPasswordInput = document.getElementById('master-password-input');
    const loginBtn = document.getElementById('login-btn');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');
    const themeToggle = document.getElementById('theme-toggle');

    // マスターパスワード関連の機能
    const MASTER_PASSWORD_KEY = 'master_password_hash';

    // ログイン処理
    loginBtn.addEventListener('click', function() {
        const password = masterPasswordInput.value;
        if (!password) {
            showLoginError('マスターパスワードを入力してください');
            return;
        }

        // ストレージからハッシュ化されたマスターパスワードを取得
        const storedHash = localStorage.getItem(MASTER_PASSWORD_KEY);

        if (!storedHash) {
            // 初回設定
            const passwordHash = hashPassword(password);
            localStorage.setItem(MASTER_PASSWORD_KEY, passwordHash);
            loginSuccess();
        } else {
            // パスワード検証
            const inputHash = hashPassword(password);
            if (inputHash === storedHash) {
                loginSuccess();
            } else {
                showLoginError('マスターパスワードが正しくありません');
            }
        }
    });

    // ログアウト処理
    logoutBtn.addEventListener('click', function() {
        masterPasswordInput.value = '';
        mainApp.style.display = 'none';
        masterPasswordScreen.style.display = 'flex';
    });

    // テーマ切り替え
    themeToggle.addEventListener('click', function() {
        document.documentElement.setAttribute('data-theme', 
            document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');

        // テーマアイコン切り替え
        const themeIcon = themeToggle.querySelector('i');
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // ログイン成功時の処理
    function loginSuccess() {
        loginError.style.display = 'none';
        masterPasswordScreen.style.display = 'none';
        mainApp.style.display = 'block';
    }

    // ログインエラー表示
    function showLoginError(message) {
        loginError.textContent = message;
        loginError.style.display = 'block';
    }

    // パスワードのハッシュ化 (簡易的な実装 - 実際はもっと強力なハッシュ関数を使用すべき)
    function hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 32bit整数に変換
        }
        return hash.toString();
    }

    // パスワード追加機能
    const addBtn = document.getElementById('add-btn');
    const siteNameInput = document.getElementById('site-name');
    const siteUrlInput = document.getElementById('site-url');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const notesInput = document.getElementById('notes');
    const passwordsContainer = document.getElementById('passwords-container');
    const emptyList = document.getElementById('empty-list');
    const generateBtn = document.getElementById('generate-btn');
    const searchInput = document.getElementById('search-input');

    // ローカルストレージからパスワードを読み込む
    loadPasswords();

    // パスワード追加
    addBtn.addEventListener('click', function() {
        const siteName = siteNameInput.value;
        const siteUrl = siteUrlInput.value;
        const username = usernameInput.value;
        const password = passwordInput.value;
        const notes = notesInput.value;

        if (!siteName || !username || !password) {
            alert('サイト名、ユーザー名、パスワードは必須です');
            return;
        }

        const passwordItem = {
            id: Date.now(),
            siteName,
            siteUrl,
            username,
            password,
            notes,
            createdAt: new Date().toISOString()
        };

        savePassword(passwordItem);
        clearForm();
        loadPasswords();
    });

    // パスワード生成
    generateBtn.addEventListener('click', function() {
        const length = 16;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let generatedPassword = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }

        passwordInput.type = 'text';
        passwordInput.value = generatedPassword;

        // 一定時間後にパスワードを非表示に戻す
        setTimeout(() => {
            passwordInput.type = 'password';
        }, 10000);
    });

    // 検索機能
    searchInput.addEventListener('input', function() {
        loadPasswords();
    });

    // パスワード保存
    function savePassword(passwordItem) {
        const passwords = getPasswordsFromStorage();
        passwords.push(passwordItem);
        localStorage.setItem('passwords', JSON.stringify(passwords));
    }

    // パスワード読み込み
    function loadPasswords() {
        const passwords = getPasswordsFromStorage();
        const searchTerm = searchInput.value.toLowerCase();

        // 検索フィルタリング
        const filteredPasswords = passwords.filter(item => 
            item.siteName.toLowerCase().includes(searchTerm) || 
            item.username.toLowerCase().includes(searchTerm)
        );

        passwordsContainer.innerHTML = '';

        if (filteredPasswords.length === 0) {
            passwordsContainer.appendChild(emptyList);
            emptyList.style.display = 'flex';
        } else {
            emptyList.style.display = 'none';

            filteredPasswords.forEach(item => {
                const passwordCard = createPasswordCard(item);
                passwordsContainer.appendChild(passwordCard);
            });
        }
    }

    // パスワードカード作成
    function createPasswordCard(item) {
        const card = document.createElement('div');
        card.className = 'password-card';
        card.dataset.id = item.id;

        const siteFavicon = item.siteUrl ? 
            `https://www.google.com/s2/favicons?domain=${item.siteUrl}` : 
            'https://kufc111.pages.dev/co275.png';

        card.innerHTML = `
            <div class="site-info">
                <img src="${siteFavicon}" alt="${item.siteName}" class="site-favicon">
                <div>
                    <h3>${item.siteName}</h3>
                    <p class="username">${item.username}</p>
                </div>
            </div>
            <div class="password-actions">
                <button class="view-btn" data-id="${item.id}"><i class="fas fa-eye"></i></button>
                <button class="copy-btn" data-id="${item.id}"><i class="fas fa-copy"></i></button>
                <button class="delete-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        `;

        // パスワード表示ボタン
        card.querySelector('.view-btn').addEventListener('click', function() {
            const passwordModal = document.createElement('div');
            passwordModal.className = 'password-modal';
            passwordModal.innerHTML = `
                <div class="password-modal-content">
                    <h3>${item.siteName}</h3>
                    <p><strong>URL:</strong> ${item.siteUrl || '未設定'}</p>
                    <p><strong>ユーザー名:</strong> ${item.username}</p>
                    <p><strong>パスワード:</strong> <span class="password-text">${item.password}</span></p>
                    ${item.notes ? `<p><strong>メモ:</strong> ${item.notes}</p>` : ''}
                    <div class="modal-actions">
                        <button class="close-modal-btn">閉じる</button>
                    </div>
                </div>
            `;

            document.body.appendChild(passwordModal);

            passwordModal.querySelector('.close-modal-btn').addEventListener('click', function() {
                document.body.removeChild(passwordModal);
            });

            passwordModal.addEventListener('click', function(e) {
                if (e.target === passwordModal) {
                    document.body.removeChild(passwordModal);
                }
            });
        });

        // パスワードコピーボタン
        card.querySelector('.copy-btn').addEventListener('click', function() {
            navigator.clipboard.writeText(item.password)
                .then(() => {
                    showNotification('パスワードをコピーしました');
                })
                .catch(err => {
                    console.error('クリップボードへのコピーに失敗しました', err);
                });
        });

        // パスワード削除ボタン
        card.querySelector('.delete-btn').addEventListener('click', function() {
            const confirmDelete = confirm(`${item.siteName} のパスワードを削除しますか？`);
            if (confirmDelete) {
                deletePassword(item.id);
                loadPasswords();
            }
        });

        return card;
    }

    // パスワード削除
    function deletePassword(id) {
        let passwords = getPasswordsFromStorage();
        passwords = passwords.filter(item => item.id !== id);
        localStorage.setItem('passwords', JSON.stringify(passwords));
    }

    // ストレージからパスワード取得
    function getPasswordsFromStorage() {
        const passwords = localStorage.getItem('passwords');
        return passwords ? JSON.parse(passwords) : [];
    }

    // 通知表示
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

    // フォームクリア
    function clearForm() {
        siteNameInput.value = '';
        siteUrlInput.value = '';
        usernameInput.value = '';
        passwordInput.value = '';
        notesInput.value = '';
    }
});