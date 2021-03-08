const images = document.querySelectorAll('.lazy');

const imagesOptions = {};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        const image = entry.target
        const dataURL = image.getAttribute('data-visible');
        image.style.backgroundImage = dataURL;
        observer.unobserve(image)
    })

}, imagesOptions);

images.forEach(image => observer.observe(image))