function showToast(m, type='success') {
    const toastEl = document.getElementById('liveToast')
    const toastBody = document.getElementById('toastBody')
    if (!toastEl || !toastBody) return

    // bg set: https://getbootstrap.com/docs/5.0/utilities/background
    toastEl.className = `toast align-items-center text-white bg-${type} border-0`
    toastBody.textContent = m

    const toast = new bootstrap.Toast(toastEl, {delay: 3000})
    toast.show()
}

document.getElementById('playLeague')?.addEventListener('click', () => showToast('즐거운 플레이 되세요'))