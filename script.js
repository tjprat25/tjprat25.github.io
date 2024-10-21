document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-element');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        if (rect.top < windowHeight && rect.bottom >= 0)
            {
                element.classList.add('visible');
            }
            else
            {
                element.classList.remove('visible');
            }
    });
});