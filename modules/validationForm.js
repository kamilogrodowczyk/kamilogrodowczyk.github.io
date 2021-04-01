export default function validationForm() {
    const form = document.querySelector('.worker__form');
    const inputs = document.querySelectorAll('input[required]');
    const agreement = document.querySelector('.worker__agreement');
    const button = document.querySelector('.worker__input--button');
    const buttonSubmit = document.querySelector('.worker__button');
    if(form) {
        form.setAttribute('novalidate', true)
    }

    const validate = () => {
        const elem = this;
        if (elem.validity.valid) {
            elem.nextElementSibling.textContent = "";
            elem.nextElementSibling.className = 'error'
        } else {
            showError(elem)
        }
    }

    const submit = (e) => {
        inputs.forEach(input => {
            if(!input.validity.valid) {
                showError(input);
                e.preventDefault();
            }
        })

        const formData  = new FormData(form);
                const url = form.getAttribute('action');
                const method = form.getAttribute('method');
                console.log(url, method);
                fetch(url, {
                    mode: 'no-cors',
                    method: method,
                    body: formData
                })
                .then(res => res.json())
                .then(res => {
                    if (res.errors) { //błędne pola
                        const selectors = res.errors.map(el => `[name="${el}"]`);
                        const fieldsWithErrors = form.querySelectorAll(selectors.join(","));
                        for (const el of fieldsWithErrors) {
                            showError(el);
                        }
                    } else { //pola są ok - sprawdzamy status wysyłki
                        if (res.status === "ok") {
                            //wyświetlamy komunikat powodzenia, cieszymy sie
                            const div = document.createElement("div");
                            div.classList.add("form-send-success");
                            div.innerText = "Wysłanie wiadomości się powiodło";

                            form.parentElement.insertBefore(div, form);
                            div.innerHTML = `
                                <strong>Wiadomość została wysłana</strong>
                                <span>Dziękujemy za kontakt. Postaramy się odpowiedzieć jak najszybciej</span>
                            `;
                            form.remove();
                        }
                        if (res.status === "error") {
                            //komunikat błędu, niepowodzenia
                            const statusError = document.querySelector('.send-error');
                            if(statusError) {
                                statusError.remove();
                            }

                            const div = document.createElement('div');
                            div.classList.add('send-error');
                            div.innerText = "Wysłanie wiadomości nie powiodło się";
                            buttonSubmit.parentElement.appendChild(div);
                        }
                    }
                });
    }

    const showError = (elem) => {
        if(elem.validity.valueMissing) {
            elem.nextElementSibling.textContent = "To pole jest żądane";
        } else if(elem.validity.typeMismatch) {
            elem.nextElementSibling.textContent = "Wprowadzona wartość musi być adresem e-mail"
        } else if (elem.validity.tooShort) {
            elem.nextElementSibling.textContent = `Email musi posiadać minimum 10 znaków. Wpisane zostało natomiast 8.`
        }

        elem.nextElementSibling.className = "error active"
    }

    const handleClick = () => {
        let flag;
        agreement.classList.toggle('worker__agreement--active');

        flag = agreement.classList.contains('worker__agreement--active');
        agreement.setAttribute('aria-hidden', !flag);
    }

    inputs.forEach(input => input.addEventListener('input', validate));
    if(form) {
        form.addEventListener('submit', submit);
    }
    if(button) {
        button.addEventListener('click', handleClick);
    }
}