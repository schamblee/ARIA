function initPage () {
    const icon = document.getElementById('turtle');
    const message = document.getElementById('message');
    const form = document.getElementById('form');

    setTimeout(function() {
        icon.classList.add('slide');
    }, 500);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        icon.classList.add('exit');
        setTimeout(function() {
            message.classList.remove('hidden');
            message.classList.add('slide');
        }, 500);
    });
}

initPage();
