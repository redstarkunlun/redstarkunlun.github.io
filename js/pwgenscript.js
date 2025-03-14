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
