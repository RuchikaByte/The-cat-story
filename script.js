// JavaScript for swipe functionality
const imageGallery = document.querySelector('.image-gallery');
let currentPosition = 0;

imageGallery.addEventListener('mousedown', startTouch);
imageGallery.addEventListener('touchstart', startTouch);
imageGallery.addEventListener('mouseup', endTouch);
imageGallery.addEventListener('touchend', endTouch);

function startTouch(event) {
    const touchStartX = event.type === 'mousedown' ? event.clientX : event.touches[0].clientX;
    imageGallery.style.transition = 'none';
    
    imageGallery.addEventListener('mousemove', moveTouch);
    imageGallery.addEventListener('touchmove', moveTouch);
    
    function moveTouch(event) {
        const touchMoveX = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX;
        const touchOffsetX = touchMoveX - touchStartX;
        currentPosition = -touchOffsetX;
        imageGallery.style.transform = `translateX(${currentPosition}px)`;
    }
}

function endTouch(event) {
    imageGallery.style.transition = 'transform 0.3s ease-in-out';
    imageGallery.style.transform = `translateX(${currentPosition}px)`;
    
    imageGallery.removeEventListener('mousemove', moveTouch);
    imageGallery.removeEventListener('touchmove', moveTouch);
}
