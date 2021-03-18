export default function stickyHeader() {
    function sticky() {
        const navbar = document.querySelector('.nav')
        const header = document.querySelector('.header')
        const halfOfHeader = (header.offsetHeight) / 2
        if(window.scrollY > halfOfHeader) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed')
        }
    }
    window.addEventListener('scroll', sticky)
}