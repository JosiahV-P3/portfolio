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
// Video Modal
function openVideo(videoSrc){
    const modal =
        document.getElementById('videoModal');
    const video =
        document.getElementById('projectVideo');
    video.src = videoSrc;
    modal.style.display = 'flex';
    video.play();
}
function closeVideo(){
    const modal =
        document.getElementById('videoModal');
    const video =
        document.getElementById('projectVideo');
    video.pause();
    video.currentTime = 0;
    video.src = '';
    modal.style.display = 'none';
}
//when clicking outside the pop-up video player the video closes
const modal =
    document.getElementalById('vieoModal');
modal.addEventListener('click', function(event){
    if(event.target === modal){
        closeVideo();
    }
});
//ESC key closed video
document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        closeVideo();
    }
})