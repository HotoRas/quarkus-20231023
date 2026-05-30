function updateTheme() {
    const body = document.body
    const btn = document.getElementById('themeToggleBtn')
    const navbar = document.querySelector('.navbar')

    const userinfo = document.getElementById('userinfoWrapper')
    const usercont = document.getElementById('userinfoContainer')

    if (body.classList.contains('light-mode')) {
        sessionStorage.setItem('theme', 'light')
        btn.textContent = '☀️ LIGHT'
        navbar.classList.remove('navbar-dark', 'bg-dark')
        navbar.classList.add('navbar-light', 'bg-light')
        navbar.setAttribute('data-bs-theme', 'light')
        if (userinfo !== null && usercont !== null) {
            userinfo.classList.remove('bg-dark', 'text-white')
            usercont.classList.remove('table-dark')
            userinfo.classList.add   ('bg-light','text-dark')
            usercont.classList.add   ('table-light')
        }
    } else {
        sessionStorage.setItem('theme', 'dark')
        btn.textContent = '🌙 DARK '
        navbar.classList.remove('navbar-light', 'bg-light')
        navbar.classList.add('navbar-dark', 'bg-dark')
        navbar.setAttribute('data-bs-theme', 'dark')
        if (userinfo !== null && usercont !== null) {
            userinfo.classList.remove('bg-light','text-dark')
            usercont.classList.remove('table-light')
            userinfo.classList.add   ('bg-dark', 'text-white')
            usercont.classList.add   ('table-dark')
        }
    }
}

const toggleTheme = () => {
    /// function toggleTheme() -> void
    const body = document.body
    body.classList.toggle('light-mode')

    updateTheme()
}

if (sessionStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode')
    updateTheme()
}

/*
if (sessionStorage.getItem('loginUser') !== null) {
    fetch('/modals/navbar-loggedin.html').then(r=>{
        if (!r.ok) throw new Error('404')
        return r.text()
    }).then(t=>
        document.getElementsByTagName('nav').innerHTML = t
    ).catch(e=>{
        console.error('file not found:', '/modals/navbar-loggedin.html')
    })
} else {
    fetch('/modals/navbar.html').then(r=>{
        if (!r.ok) throw new Error('404')
        return r.text()
    }).then(t=>
        document.getElementsByTagName('nav').innerHTML = t
    ).catch(e=>{
        console.error('file not found:', '/modals/navbar.html')
    })
}
 */

document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme)