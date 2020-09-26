function initPage () {
    const icon = document.getElementsByTagName('img')[0];
    setTimeout(function() {
        icon.classList.add('slide');
    }, 500)
    document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
        e.preventDefault();
        icon.classList.add('exit');
    })
}

initPage();
