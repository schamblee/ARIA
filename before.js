function initPage () {
    const icon = document.getElementById('turtle');
    const message = document.getElementById('message');
    const form = document.getElementById('form');
    const checkbox = document.getElementById('agree')

    function handleCheckboxClick () {
        if (checkbox.classList.contains('checked')) {
            checkbox.classList.remove('checked');
            checkbox.ariaChecked = false;
        } else {
            checkbox.classList.add('checked');
            checkbox.ariaChecked = true;
        }
    }

    function validateForm () {
        return form.checkValidity() && checkbox.classList.contains('checked');
    }

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
        handleCheckboxClick();
    });

    checkbox.addEventListener('keydown', function (e) {
        if (e.keyCode === 32) {
            handleCheckboxClick();
        }
    })
}

initPage();
