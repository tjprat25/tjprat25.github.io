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

document.getElementById("buttonA").addEventListener("click", function() {
    document.getElementById("headerA").scrollIntoView({behavior: 'smooth'});
});

document.getElementById("buttonE").addEventListener("click", function() {
    document.getElementById("headerE").scrollIntoView({behavior: 'smooth'});
});

document.getElementById("buttonP").addEventListener("click", function() {
    document.getElementById("headerP").scrollIntoView({behavior: 'smooth'});
});

document.getElementById("buttonC").addEventListener("click", function() {
    document.getElementById("headerC").scrollIntoView({behavior: 'smooth'});
});

document.getElementById("button-top").addEventListener("click", function() {
    document.getElementById("header-top").scrollIntoView({behavior: 'smooth'});
});