document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    let dogImage;

    function createDogImage() {
        dogImage = document.createElement('img');
        dogImage.src = "./assets/dog.png";
        dogImage.classList.add('moving-dog');
        body.appendChild(dogImage);
    }

    function updateDogPosition(event) {
        const offsetX = -50; 
        const offsetY = -50; 
        const posX = event.clientX + offsetX;
        const posY = event.clientY + offsetY;
        dogImage.style.left = posX + 'px';
        dogImage.style.top = posY + 'px';
    }

    function removeDogImage() {
        if (dogImage && dogImage.parentNode) {
            dogImage.parentNode.removeChild(dogImage);
        }
    }

    createDogImage();

    document.addEventListener('mousemove', updateDogPosition);

    window.addEventListener('unload', removeDogImage);
});
