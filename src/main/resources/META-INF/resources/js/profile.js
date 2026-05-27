window.onload = function() {
    fetch('/profile/info') // 서버에서 사용자 정보 요청, 비동기 i/o
        .then(res => res.json()) // json 파싱
        .then(data => {
            document.getElementById('infoUsername').textContent = data.username; // DOM 조작 방지
            document.getElementById('infoEmail').textContent = data.email;
            document.getElementById('infoPhone').textContent = data.phone;
            if (data.profileImage) { // null 체크
                document.getElementById('profileImg').src = '/uploads/profile/' + data.profileImage;
            } else document.getElementById('profileImg').src = '/uploads/profile/default.jpg';
            
            const profileLink = document.getElementById('profileNavLink')
            if (profileLink) {
                profileLink.setAttribute('data-bs-title', `👋 ${data.username}`)
                new bootstrap.Tooltip(profileLink)
            }
        });
    
    
    const params = new URLSearchParams(window.location.search)
    const error = params.get('error')
    if (error === 'upload-fail') showToast('업로드에 실패했습니다.', 'danger')
    if (params.get('update-success') !== null) showToast('프로필을 갱신했습니다.')
}