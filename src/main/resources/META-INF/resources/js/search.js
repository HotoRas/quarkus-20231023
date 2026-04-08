document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault()
    const query = document.getElementById('searchInput').value.trim()
    if (!query) window.open('#', '_self')
    window.open('https://google.com/search?q=' + encodeURI(query), '_blank')
})