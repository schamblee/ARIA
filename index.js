function initPage () {
    console.log('init')
    setTimeout(function() {
        document.getElementsByTagName('img')[0].className = 'slide';
    }, 500)
}

initPage();
