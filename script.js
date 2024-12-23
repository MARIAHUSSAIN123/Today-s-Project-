const passwordInput = document.getElementById('password');
const checkBtn = document.getElementById('check-btn');
const resultPara = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const password = passwordInput.value;

    if (password.length < 8) {
        resultPara.textContent = 'Password is too short!';
        resultPara.style.color = 'red';
    } else if (password === password.toUpperCase()) {
        resultPara.textContent = 'Password must contain lowercase letters!';
        resultPara.style.color = 'red';
    } else if (password === password.toLowerCase()) {
        resultPara.textContent = 'Password must contain uppercase letters!';
        resultPara.style.color = 'red';
    } else {
        let hasDigit = false;
        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password[i])) {
                hasDigit = true;
                break;
            }
        }
        if (hasDigit) {
            resultPara.textContent = 'Password is strong!';
            resultPara.style.color = 'green';
        } else {
            resultPara.textContent = 'Password must contain digits!';
            resultPara.style.color = 'red';
        }
    }
});
