export default function stickyHeader() {
    function sticky() {
        const navbar = document.querySelector('.nav')
        const header = document.querySelector('.header')
        if(window.scrollY > header.offsetHeight) {
            navbar.classList.add('fixed');
            document.body.style.paddingTop = `${header.offsetHeight}`;
        } else {
            navbar.classList.remove('fixed')
            document.body.style.paddingTop = '0px';
        }
    }
    window.addEventListener('scroll', sticky)
}