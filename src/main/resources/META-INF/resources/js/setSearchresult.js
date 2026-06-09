const DETAILS = {
    'Aatrox': {
        'summary': '전사 / 난이도: 상',
        'skills': ['패시브: 죽음의 손아귀', 'Q: 다르킨의 검', 'W: 지옥사슬', 'E: 그림자 돌진','R: 세계의 종결자'],
        'story': `한때 신성한 전쟁의 신이었던 아트록스는 다르킨의 힘에 의해 타락했다.
이제 그는 끝없는 복수와 자신의 진정한 육체를 되찾기 위해 세계를 피로 물들인다.
그의 검은 모든 것을 파괴하며, 죽음조차 두려워하지 않는 존재가 되었다.`
    }
}

window.onload = () => {
    if (document.getElementById('championSearchModalStory') === null) return;
    const searchParams = new URLSearchParams(window.location.search)
    document.getElementById('championSearchModalImage').setAttribute('src', searchParams.get('img'))
    document.getElementById('championSearchModalName').innerText = `${searchParams.get('krName')} (${searchParams.get('champ')})`
    
    //TODO API
    const CHAMPIONDETAIL = DETAILS[searchParams.get('champ')]
    if (CHAMPIONDETAIL !== null) {
        document.getElementById('championSearchModalSummary').innerText = CHAMPIONDETAIL['summary']
        document.getElementById('championSearchModalStory').innerText = CHAMPIONDETAIL['story']
        CHAMPIONDETAIL['skills'].forEach(skill => 
            document.getElementById('championSearchModalSkillSet').innerHTML += `<li class=list-group-item>${skill}</li>`
        );
    }

    //TODO! db 검색으로 요약, 스킬셋, 스토리 가져오기
}