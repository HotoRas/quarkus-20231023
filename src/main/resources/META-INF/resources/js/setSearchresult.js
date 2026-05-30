window.onload = () => {
    if (document.getElementById('championSearchModalStory') === null) return;
    const searchParams = new URLSearchParams(window.location.search)
    document.getElementById('championSearchModalImage').setAttribute('src', searchParams.get('img'))
    document.getElementById('championSearchModalName').innerText = `${searchParams.get('krName')} (${searchParams.get('champ')})`

    //TODO! db 검색으로 요약, 스킬셋, 스토리 가져오기
}