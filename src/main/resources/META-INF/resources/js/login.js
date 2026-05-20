function validateAndLogin() {
    // basic validation check from input_check.js
    let valid = true
    const username = document.getElementById('usernameInput').value.trim()
    const password = document.getElementById('passwordInput').value
    // ① 아이디 : 4~20자 영문/숫자
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/
    if (!usernameRegex.test(username)) {
        showError('username', '아이디는 4~20자 영문/숫자만 가능합니다.')
        valid = false
    } else { clearError('username') }
    // ② 패스워드 : 8자 이상, 영문+숫자+특수문자
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
    if (!passwordRegex.test(password)) {
        showError('password', '8자 이상, 영문+숫자+특수문자를 포함 필요.')
        valid = false
    } else { clearError('password') }

    if(valid) submitLogin()
}
function showError(fieldId, message) {
    const field = document.getElementById(fieldId + 'Input')
    field.classList.add('is-invalid')
    const msg = document.getElementById(fieldId + 'Msg')
    if (msg) msg.textContent = message
}
function clearError(fieldId) {
    const field = document.getElementById(fieldId + 'Input')
    field.classList.remove('is-invalid')
    field.classList.add('is-valid')
}
const submitLogin = async() => {
    const password = document.getElementById('passwordInput').value
    const hashed = await hashPassword(password)
    document.getElementById('password').value = hashed
    document.getElementById('loginForm').submit()
}