export default function validationForm() {
    const form = document.querySelector('.worker__form');
    const inputs = form.querySelectorAll('input[required]');
    const agreement = form.querySelector('.worker__agreement');
    const button = form.querySelector('.worker__input--button');

    function validate() {
        const elem = this;
        if (elem.validity.valid) {
            elem.nextElementSibling.textContent = "";
            elem.nextElementSibling.className = 'error'
        } else {
            showError(elem)
        }
    }

    function submit(e) {
        inputs.forEach(input => {
            if(!input.validity.valid) {
                showError(input);
                e.preventDefault();
            }
        })
    }

    function showError(elem) {
        if(elem.validity.valueMissing) {
            elem.nextElementSibling.textContent = "To pole jest żądane";
        } else if(elem.validity.typeMismatch) {
            elem.nextElementSibling.textContent = "Wprowadzona wartość musi być adresem e-mail"
        } else if (elem.validity.tooShort) {
            elem.nextElementSibling.textContent = `Email musi posiadać minimum 10 znaków. Wpisane zostało natomiast 8.`
        }

        elem.nextElementSibling.className = "error active"
    }

    function handleClick() {
        let flag;
        agreement.classList.toggle('worker__agreement--active');

        flag = agreement.classList.contains('worker__agreement--active');
        agreement.setAttribute('aria-hidden', !flag);
    }

    inputs.forEach(input => input.addEventListener('input', validate))
    button.addEventListener('click', handleClick);
    form.addEventListener('submit', submit)
}