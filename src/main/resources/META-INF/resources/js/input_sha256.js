const hashPassword = async (password) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(password)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b=>b.toString(16).padStart(2,'0')).join('')
}

const showConfirmModal = async () => {
    const username = document.getElementById('username').value.trim()
    const email = document.getElementById('email').value.trim()
    const phone = document.getElementById('phone').value.trim()
    const password = document.getElementById('password').value

    document.getElementById('confirmUsername').textContent = username
    document.getElementById('confirmEmail').textContent = email
    document.getElementById('confirmPhone').textContent = phone

    const hashed = await hashPassword(password)
    document.getElementById('hashedPassword').value = hashed
    
    console.log('해시된 패스워드: ', hashed)

    const modal = new bootstrap.Modal(document.getElementById('confirmModal'))
    modal.show()
}

const submitRegister = () => {
    bootstrap.Modal.getInstance(document.getElementById('confirmModal')).hide()

    document.getElementById('registerForm').submit()
}

document.getElementById('submitRegister').addEventListener('onclick', submitRegister)