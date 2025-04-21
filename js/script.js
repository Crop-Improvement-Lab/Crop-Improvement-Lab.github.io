const carousel = document.querySelector('.achievements-carousel');
const items = document.querySelectorAll('.achievement-item');
let currentIndex = 0;
const totalItems = items.length;

function moveCarousel() {
    const itemHeight = items[0].clientHeight;
    carousel.style.transform = `translateY(-${currentIndex * itemHeight}px)`;
    
    currentIndex++;
    if (currentIndex >= totalItems) {
        currentIndex = 0; // Reset to the first item once we reach the end
    }
}

// Move every 10 seconds
let scrollInterval = setInterval(moveCarousel, 10000);

// Pause scrolling on hover
carousel.addEventListener('mouseenter', () => {
    clearInterval(scrollInterval);
});

// Resume scrolling after hover
carousel.addEventListener('mouseleave', () => {
    scrollInterval = setInterval(moveCarousel, 10000);
});
