export default function zoomPhoto() {
    const zoom = document.querySelector('.realisation__zoom');
    const zoomedImage = document.querySelector('.realisation__wrapper');;
    const span = document.querySelector('.realisation__wrapper--cancel');
    const images = document.querySelectorAll('.realisation__image, .realisation__image--big');


    function selectImage(e) {  
        const style = window.getComputedStyle(e.currentTarget); 
        const backgroundImage = style.getPropertyValue('background-image'); 
        zoom.classList.add('realisation__zoom--active') 
        zoomedImage.style.backgroundImage = backgroundImage;
        zoomedImage.classList.add('realisation__image--active')
        if(this.classList.contains('realisation__image--big')) {
            zoomedImage.classList.add('realisation__image--big--active')
        } else {
            zoomedImage.classList.remove('realisation__image--big--active')
        }   
    }

    function cancelZoom() {
        zoom.classList.remove('realisation__zoom--active') 
    }
    
    images.forEach(image => image.addEventListener('click', selectImage));
    zoomedImage.addEventListener('click', e => e.stopPropagation())
    span.addEventListener('click', cancelZoom)
    zoom.addEventListener('click', cancelZoom)
    window.addEventListener('keydown', e => {
        if(e.key === "Escape") {
            zoom.classList.remove('realisation__zoom--active') 
        }
        console.log(e)
    })
}

