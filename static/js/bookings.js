document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    document.querySelector('.carousel-next').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
    });

    // Date validation
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');
    
    const today = new Date().toISOString().split('T')[0];
    checkin.setAttribute('min', today);
    
    checkin.addEventListener('change', function() {
        checkout.value = '';
        checkout.setAttribute('min', checkin.value);
    });
    
    checkout.addEventListener('change', function() {
        if (checkout.value <= checkin.value) {
            alert('Check-out date must be after check-in date');
            checkout.value = '';
        }
    });
});