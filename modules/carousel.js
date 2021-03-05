export default function carousel() {
    const button = document.querySelectorAll('.header__dot[aria-label]');
    const header = document.querySelector('.header__container[aria-label]');
    const image = document.querySelectorAll('.header__hero--image')

    function handleClick(e) {        
        const target = this.getAttribute('aria-label')
        image.forEach(element => {
            const attr = element.getAttribute('aria-label')
            if(attr == `${target} z 3`) {
                element.classList.add('header__hero--active')
            } else {
                element.classList.remove('header__hero--active')
            }
        })

        button.forEach(element => {
            if(element.classList.contains('header__dot--active')) {
                element.classList.remove('header__dot--active')
            }
            e.currentTarget.classList.add('header__dot--active')
            element.setAttribute('aria-selected', element.classList.contains('header__dot--active'))
        })
    }

    button.forEach(element => element.addEventListener('click', handleClick));
}