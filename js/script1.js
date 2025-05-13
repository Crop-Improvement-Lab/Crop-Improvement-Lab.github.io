// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const modal      = document.getElementById('imageModal');
  const modalImg   = document.getElementById('modalImg');
  const captionTxt = document.getElementById('modalCaption');
  const closeBtn   = document.getElementById('modalClose');

  // Open modal on thumbnail click
  document.querySelectorAll('.pamphlet-item img').forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src        = this.dataset.full;
      captionTxt.textContent = this.alt;
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Also close if user clicks outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
