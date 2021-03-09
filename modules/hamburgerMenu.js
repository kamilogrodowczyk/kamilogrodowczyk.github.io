export default function hamburgerMenu() {
    const hamburger = document.querySelector('.nav__hamburger');
    const links = document.querySelector('.nav__links');

    const handleClick = (e) => {
        links.classList.toggle('nav__links--active');

        let flag = links.classList.contains('nav__links--active');
        hamburger.setAttribute('aria-expanded', flag);	
    }
    hamburger.addEventListener('click', handleClick);
}