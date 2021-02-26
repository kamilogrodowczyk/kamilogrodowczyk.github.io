export default function carousel() {
    const button = document.querySelectorAll('.header__dot[aria-label]');
    const header = document.querySelector('.header__container[aria-label]');

    function handleClick(e) {        
        const target = this.getAttribute('aria-label')
        const images = ['', 'url(assets/slide1.jpg)', 'url(assets/slide2.jpg)', 'url(assets/slide3.JPG)'];

        header.style.backgroundImage = images[target];
        header.setAttribute('aria-label', `${target} of 3`);

        button.forEach(element => {
            if(element.classList.contains('header__dot--active')) {
                element.classList.remove('header__dot--active')
            }
            e.currentTarget.classList.add('header__dot--active')
        })
    }

    button.forEach(element => element.addEventListener('click', handleClick));
}