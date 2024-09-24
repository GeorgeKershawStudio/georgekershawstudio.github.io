function duplicateContainers() {
    const originalContainer = document.getElementById('heroSlider').outerHTML;
    const duplicatedContainers = document.getElementById('heroSection');
    duplicatedContainers.innerHTML = '';

    const screenWidth = window.innerWidth;
    const numberOfContainers = Math.floor(screenWidth / 300);

    const imageSets = [
        ["/IrnBru-Leith-Agency-Design.jpg", 
            "/Portfolio-Template-Img.jpg", 
            "/IrnBru-Leith-Agency-Design.jpg", 
            "/Portfolio-Template-Img.jpg", 
            "/IrnBru-Leith-Agency-Design.jpg", 
            "/Portfolio-Template-Img.jpg", ],
        ["/IrnBru-Leith-Agency-Design.jpg",
            "/War-of-the-Worlds-Album-Graphic.png",
            "/IrnBru-Leith-Agency-Design.jpg", 
            "/War-of-the-Worlds-Album-Graphic.png",
            "/IrnBru-Leith-Agency-Design.jpg", 
            "/War-of-the-Worlds-Album-Graphic.png", ]
    ];

    for (let i = 0; i < numberOfContainers; i++) {
        const newContainerWrapper = document.createElement('div');
        newContainerWrapper.innerHTML = originalContainer;
        const newContainer = newContainerWrapper.firstElementChild;

        newContainer.classList.add('hero-slider');

        const heroImages = newContainer.querySelector('.hero-images');
        if (i % 4 === 1) {
            heroImages.classList.add('hero-reverse-anim');
        } else if (i % 4 === 2) {
            heroImages.classList.add('hero-offset-anim');
        } else if (i % 4 === 3) {
            heroImages.classList.add('hero-reverse-offset-anim');
        }

        const imageSet = imageSets[i % imageSets.length];
        
        const imageMaskers = heroImages.querySelectorAll('.image-masker img');
        imageMaskers.forEach((img, index) => {
            img.src = imageSet[index % imageSet.length];
        });

        duplicatedContainers.appendChild(newContainer);
    }
}

duplicateContainers();

window.addEventListener('resize', duplicateContainers);