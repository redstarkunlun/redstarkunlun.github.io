function password_generate() {
    if (document.getElementById("small").checked == true) {
        var small = "abcdefghijklmnopqrstuvwxyz";
    } else {
        var small = "";
    }
    if (document.getElementById("big").checked == true) {
        var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
        var big = "";
    }
    if (document.getElementById("num").checked == true) {
        var num = "0123456789";
    } else {
        var num = "";
    }
    if (document.getElementById("symbol").checked == true) {
        var symbol = "!@#$%^&*";
    } else {
        var symbol = "";
    }
    
    // 高度な設定の処理追加
    if (document.getElementById("avoid-similar") && document.getElementById("avoid-similar").checked) {
        small = small.replace(/[ol]/g, '');
        big = big.replace(/[OIL]/g, '');
        num = num.replace(/[01]/g, '');
    }
    
    if (document.getElementById("avoid-ambiguous") && document.getElementById("avoid-ambiguous").checked) {
        symbol = symbol.replace(/[\{\}\[\]\(\)]/g, '');
    }
    
    var character = small + big + num + symbol;
    var l = document.getElementById("password_longer").value;
    var cl = character.length;
    var pass = "";
    
    // 最低文字数の条件を確保する処理
    const minDigits = document.getElementById("min-digits") ? parseInt(document.getElementById("min-digits").value) || 0 : 0;
    const minSymbols = document.getElementById("min-symbols") ? parseInt(document.getElementById("min-symbols").value) || 0 : 0;
    
    // 基本パスワード生成
    for(var i=0; i<l; i++){
        pass += character[Math.floor(Math.random()*cl)];
    }
    
    // 最低条件を満たすまで再生成
    if ((minDigits > 0 || minSymbols > 0) && num + symbol !== "") {
        let attempts = 0;
        while (attempts < 10) { // 無限ループ防止
            const digitCount = (pass.match(new RegExp('[' + num + ']', 'g')) || []).length;
            const symbolCount = (pass.match(new RegExp('[' + symbol.replace(/[\^\$\.\*\+\?\(\)\[\]\{\}\\]/g, '\\$&') + ']', 'g')) || []).length;
            
            if ((num === "" || digitCount >= minDigits) && (symbol === "" || symbolCount >= minSymbols)) {
                break; // 条件を満たしていれば終了
            }
            
            // 条件を満たしていなければ再生成
            pass = "";
            for(var i=0; i<l; i++){
                pass += character[Math.floor(Math.random()*cl)];
            }
            attempts++;
        }
    }
    
    document.getElementById("password").value = pass;
    
    // パスワード強度評価の呼び出し
    if (typeof updatePasswordStrength === 'function') {
        updatePasswordStrength(pass);
    }
}

function password_copy() {
    var text = document.getElementById("password");
    text.select();
    document.execCommand("copy");
    
    // コピー通知の表示（もし実装されていれば）
    if (typeof showCopyNotification === 'function') {
        showCopyNotification();
    }
}

function password_longer_count() {
    var password_longer = document.getElementById("password_longer").value;
    document.getElementById("number").innerHTML = password_longer;
}

// パスワード強度の評価
function updatePasswordStrength(password) {
    // パスワード強度計算ロジック
    let strength = 0;
    if (password.length > 12) strength += 1;
    if (password.length > 20) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // 強度表示要素のチェック
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('password-strength-text');
    
    if (strengthBar && strengthText) {
        let strengthLabel = '';
        let color = '';
        
        switch(strength) {
            case 0:
            case 1:
            case 2:
                strengthLabel = '弱い';
                color = '#ff4d4d';
                break;
            case 3:
            case 4:
                strengthLabel = '普通';
                color = '#ffa64d';
                break;
            case 5:
                strengthLabel = '強い';
                color = '#2ecc71';
                break;
            case 6:
                strengthLabel = '非常に強い';
                color = '#1e8449';
                break;
        }
        
        strengthBar.style.width = ((strength / 6) * 100) + '%';
        strengthBar.style.backgroundColor = color;
        strengthText.textContent = 'パスワード強度: ' + strengthLabel;
    }
}

// コピー通知の表示
function showCopyNotification() {
    var notification = document.getElementById('copy-notification');
    if (notification) {
        notification.style.display = 'inline';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 2000);
    }
}

// テーマシステム用の拡張コード
// 既存のpwgenscript.jsと連携して使用

// テーマ設定の管理
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.initTheme();
        this.setupEventListeners();
    }

    // テーマの初期化
    initTheme() {
        // ユーザーが前回設定したテーマを取得
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            // 保存されたテーマがあればそれを適用
            document.documentElement.setAttribute('data-theme', savedTheme);
            this.themeToggle.checked = (savedTheme === 'dark');
        } else {
            // なければシステム設定を確認
            this.applySystemTheme();
        }
    }
    
    // システムテーマ設定を適用
    applySystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.themeToggle.checked = true;
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            this.themeToggle.checked = false;
            localStorage.setItem('theme', 'light');
        }
    }
    
    // イベントリスナーの設定
    setupEventListeners() {
        // テーマ切り替えボタンのイベント
        this.themeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
        
        // システムテーマの変更検知
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    // ユーザーが明示的にテーマを設定していない場合のみ自動的に変更
                    const newTheme = e.matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    this.themeToggle.checked = e.matches;
                }
            });
        }
    }
    
    // 現在のテーマを取得
    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme');
    }
    
    // テーマを変更
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.themeToggle.checked = (theme === 'dark');
        localStorage.setItem('theme', theme);
    }
}

// パスワード強度評価機能
class PasswordStrengthMeter {
    constructor() {
        this.strengthBar = document.getElementById('strength-bar');
        this.strengthText = document.getElementById('password-strength-text');
    }
    
    // パスワード強度を評価
    evaluate(password) {
        if (!password) {
            this.reset();
            return;
        }
        
        // パスワード強度計算ロジック
        let strength = 0;
        if (password.length > 12) strength += 1;
        if (password.length > 20) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[a-z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        
        // エントロピーを考慮した追加評価
        if (this.hasGoodEntropy(password)) strength += 0.5;
        
        let strengthLabel = '';
        let color = '';
        
        switch(Math.floor(strength)) {
            case 0:
            case 1:
            case 2:
                strengthLabel = '弱い';
                color = '#ff4d4d';
                break;
            case 3:
            case 4:
                strengthLabel = '普通';
                color = '#ffa64d';
                break;
            case 5:
                strengthLabel = '強い';
                color = '#2ecc71';
                break;
            case 6:
            default:
                strengthLabel = '非常に強い';
                color = '#1e8449';
                break;
        }
        
        this.strengthBar.style.width = ((strength / 6) * 100) + '%';
        this.strengthBar.style.backgroundColor = color;
        this.strengthText.textContent = 'パスワード強度: ' + strengthLabel;
    }
    
    // エントロピーの評価（文字の多様性と配置の複雑さ）
    hasGoodEntropy(password) {
        // 単純な繰り返しパターンをチェック
        const repeats = /(.)\1{2,}/;
        // 連続した文字/数字をチェック
        const sequences = /(?:abcdef|123456|qwerty)/i;
        
        return !repeats.test(password) && !sequences.test(password);
    }
    
    // 強度表示をリセット
    reset() {
        this.strengthBar.style.width = '0';
        this.strengthText.textContent = 'パスワード強度: 未生成';
    }
}

// 通知管理
class NotificationManager {
    constructor() {
        this.notificationElement = document.getElementById('copy-notification');
    }
    
    // 通知を表示
    show(message, duration = 2000) {
        if (this.notificationElement) {
            this.notificationElement.textContent = message || 'コピーしました！';
            this.notificationElement.style.display = 'inline';
            
            // 既存のタイマーをクリア
            if (this.timer) {
                clearTimeout(this.timer);
            }
            
            // 一定時間後に非表示
            this.timer = setTimeout(() => {
                this.notificationElement.style.display = 'none';
            }, duration);
        }
    }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', function() {
    // 現在の年を設定
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // 各機能のインスタンスを作成
    const themeManager = new ThemeManager();
    const strengthMeter = new PasswordStrengthMeter();
    const notificationManager = new NotificationManager();
    
    // 既存関数のオーバーライド
    // 元の関数を保存
    const originalGenerate = window.password_generate;
    const originalCopy = window.password_copy;
    
    // password_generate関数を拡張
    window.password_generate = function() {
        // オリジナルの関数を呼び出し
        originalGenerate();
        
        // パスワード強度評価
        const password = document.getElementById('password').value;
        strengthMeter.evaluate(password);
    };
    
    // password_copy関数を拡張
    window.password_copy = function() {
        // オリジナルの関数を呼び出し
        originalCopy();
        
        // コピー通知を表示
        notificationManager.show('コピーしました！');
    };
});
