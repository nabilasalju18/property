document.addEventListener('DOMContentLoaded', () => {

    // FILTER PROPERTI
    const filterBtns = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            propertyCards.forEach(card => {
                if(filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // SLIDER
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if(sliderTrack && slides.length > 0) {
        let index = 0;
        const totalSlides = slides.length;
        const slideWidth = slides[0].offsetWidth + 20; // 20 = margin-right baru

        let autoSlide;

        function goToSlide(idx) {
            sliderTrack.style.transform = `translateX(-${slideWidth * idx}px)`;
        }

        function startAutoSlide() {
            autoSlide = setInterval(() => {
                index = (index + 1) % totalSlides;
                goToSlide(index);
            }, 3000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlide);
        }

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % totalSlides;
            goToSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + totalSlides) % totalSlides;
            goToSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });

        startAutoSlide();
    }

});
