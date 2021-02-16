const hamburger = document.querySelector('.nav__hamburger');
const links = document.querySelector('.nav__links');

const handleClick = () => {
	const body = document.body;
	links.classList.toggle('nav__links--active');

	let flag = links.classList.contains('nav__links--active');
	hamburger.setAttribute('aria-expanded', flag);	
}

hamburger.addEventListener('click', handleClick);

const elements = document.querySelectorAll('.animate');
    const options = {
        root: null,
        threshhold: 0.5,
        rootMargin: '0px 0px -20% 0px'
     };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('animated');
            observer.unobserve(entry.target)
        })
    }, options)

    elements.forEach(element => observer.observe(element))

const circle = document.querySelectorAll('.numbers__result');
const circleOptions = {
		root: null,
		threshhold: 0.5,
		rootMargin: '0px 0px -9% 0px'
	};

const observerCircle = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			return;
		}
		up()
		observer.unobserve(entry.target)
	})
}, circleOptions)

circle.forEach(element => observerCircle.observe(element))


const counter = document.querySelectorAll('.numbers__result');
const speed = 200;

function up() {

	counter.forEach(counter => {
		function updateCount() {
			const target = +counter.getAttribute('data-target');
			const count = +counter.innerText
			const inc = target / speed;
			
			if(count < target) {
				counter.innerText = Math.ceil(count + inc);
				setTimeout(updateCount, 1)
			} else {
				count.innerText = target;
			}
		}
		updateCount();
	})
}