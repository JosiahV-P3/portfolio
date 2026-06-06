const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.animate(
                    [
                        {
                            opacity: 0, transfor:'translateY(40px)'
                        },
                        {
                            opacity: 1, transform: 'translateY(0)'
                        }
                    ],
                    {
                        duration:700, easing: 'ease-out', fill: 'forwards'
                    }
                );
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);
document
    .querySelectorAll('#projects, #skills, #about, #contact')
    .forEach(section => {
        section.computedStyleMap.opacity = '0';
        observer.observe(section);
    });
