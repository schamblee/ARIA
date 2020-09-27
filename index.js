function initPage () {
    const icon = document.getElementById('turtle');
    const message = document.getElementById('message');
    const form = document.getElementById('form');
    const btn = document.getElementById('submitBtn');

    form.addEventListener("change", () => {
        btn.disabled = !form.checkValidity()
    });

    setTimeout(function() {
        icon.classList.add('slide');
    }, 500);

    document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
        e.preventDefault();
        icon.classList.add('exit');
        setTimeout(function() {
            message.classList.remove('hidden');
            message.classList.add('slide');
        }, 500);
    });
}

initPage();
