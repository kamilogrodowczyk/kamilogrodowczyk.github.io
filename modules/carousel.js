export default function carousel() {
    const button = document.querySelectorAll('.header__button[aria-label]');
    const header = document.querySelector('.header__container[aria-label]');

    function handleClick() {        
        const target = this.getAttribute('aria-label')
        const images = ['url(assets/slider.jpg)', 'url(assets/3.jpg.png)', 'url(assets/rubra-right.jpg)'];

        header.style.backgroundImage = images[target-1];
        header.setAttribute('aria-label', `${target} of 3`);
    }

    button.forEach(element => element.addEventListener('click', handleClick));
}