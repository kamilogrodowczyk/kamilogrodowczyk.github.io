export default function zoomPhoto() {
    const images = document.querySelectorAll('.realisation__image, .realisation__image--big');

    function selectImage(e) { 
        createElements(e.currentTarget)
    }

    function createElements(element) {

        const firstChild = createFirstChild(element);
        const secondChild = createSecondChild(element)
        const thirdChild = createThirdChild()

        removeElements(element, thirdChild, firstChild)
        removeElements(element, firstChild, firstChild)

        element.appendChild(firstChild)
        firstChild.appendChild(secondChild)
        secondChild.appendChild(thirdChild)
    }

    function createFirstChild(element) {
        const zoom = document.createElement('div');
        zoom.className = 'realisation__zoom realisation__zoom--active';
        zoom.setAttribute('aria-label', `${element.getAttribute('aria-label')} - powiększone`)

        return zoom;
    }

    function createSecondChild(element) {

        const style = window.getComputedStyle(element); 
        const backgroundImage = style.getPropertyValue('background-image');

        const zoomChild = document.createElement('div');
        zoomChild.className = 'realisation__wrapper realisation__image--active';

        if(element.classList.contains('realisation__image--big')) {
            zoomChild.className = 'realisation__wrapper realisation__image--big--active';
        } 

        zoomChild.style.backgroundImage = backgroundImage;
        zoomChild.addEventListener('click', e => {
            e.stopPropagation()
        })

        return zoomChild;
    }

    function createThirdChild() {
        const button = document.createElement('button');
        button.className = 'realisation__wrapper--cancel';
        button.setAttribute('aria-label', 'Wyłącz powiększone zdjęcie')

        // button.textContent = 'X'

        return button;
    }

    function removeElements(mainParent, child, removedElement) {
        if(child) {
            child.addEventListener('click', e => {
                e.stopPropagation()
                mainParent.removeChild(removedElement)
            })
        }
    }
    
    images.forEach(image => image.addEventListener('click', selectImage));
}

