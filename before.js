const form = document.getElementById('form');
const checkbox = document.getElementById('agree')

function handleCheckboxClick (el) {
    if (el.classList.contains('checked')) {
        el.classList.remove('checked');
        el.ariaChecked = false;
    } else {
        el.classList.add('checked');
        el.ariaChecked = true;
    }
}

function validateForm () {
    return form.checkValidity() && checkbox.classList.contains('checked');
}

function initPage () {
    const icon = document.getElementById('turtle');
    const message = document.getElementById('message');

    setTimeout(function() {
        icon.classList.add('slide');
    }, 500);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            icon.classList.add('exit');
            setTimeout(function() {
                message.classList.remove('hidden');
                message.classList.add('slide');
            }, 500);
        }
    });

    checkbox.addEventListener('click', function () {
        handleCheckboxClick(this);
    });

    checkbox.addEventListener('keydown', function (e) {
        if (e.key === 'Space') {
            handleCheckboxClick(this);
        }
    })
}

initPage();
