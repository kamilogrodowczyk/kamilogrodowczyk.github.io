export default function stickyHeader() {
    function sticky() {
        const navbar = document.querySelector('.nav')
        const header = document.querySelector('.header')
        const halfOfHeader = (header.offsetHeight) / 2
        if(window.scrollY > halfOfHeader) {
            navbar.classList.add('fixed');
            // document.body.style.paddingTop = `${navbar.offsetHeight}`;
        } else {
            navbar.classList.remove('fixed')
            // document.body.style.paddingTop = '0px';
        }
    }
    window.addEventListener('scroll', sticky)
}