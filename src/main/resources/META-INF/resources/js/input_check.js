const validateAndShowModal = () => {
    let valid = true

    const username = document.getElementById('username').value.trim()
    const password = document.getElementById('password').value.trim()
    const passwordConfirm = document.getElementById('passwordConfirm').value.trim()
    const email = document.getElementById('email').value.trim()
    const phone = document.getElementById('phone').value.trim()

    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/
    if(!usernameRegex.test(username)) {
        showError('username','아이디는 4~20자 영숫자만 가능합니다.')
        valid=false
    } else clearError('username')

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
    if(!passwordRegex.test(password)) {
        showError('password', '8자 이상, 영숫자 및 특수문자 포함 필요')
        valid=false
    } else clearError('password')

    if (password!==passwordConfirm) {
        showError('passwordConfirm', '패스워드가 일치하지 않습니다.')
        valid=false
    } else clearError('passwordConfirm')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        showError('email', '올바른 이메일 형식이 아닙니다.')
        valid = false
    } else clearError('email')

    const phoneRegex = /^010-\d{4}-\d{4}$/
    if (!phoneRegex.test(phone)) {
        showError('phone', '010-0000-0000 형식으로 입력해주세요.')
        valid = false;
    } else clearError('phone')
    
    if (valid) showConfirmModal()
}

const showError = (fieldId, message) => {
    const field = document.getElementById(fieldId)
    field.classList.add('is-invalid')
    const msg = document.getElementById(fieldId+'Msg')
    if(msg) msg.textContent = message;
}

const clearError = (fieldId) => {
    const field = document.getElementById(fieldId)
    field.classList.remove('is-invalid')
    field.classList.add('is-valid')
}

window.onload = () => {
    const params = new URLSearchParams(window.location.search)
    const error = params.get('error')

    if(error==='duplicate_username') showError('username', '이미 사용 중인 아이디입니다.')
    else if(error==='duplicate_email') showError('email', '이미 사용 중인 이메일입니다.')
}