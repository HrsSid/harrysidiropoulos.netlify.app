function ScrollTo(y) {
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
};

// circle variable
let circle = document.querySelector('.circle');

// circle mouse follower
const moveCircle = (e) => {
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`
}
const addPulse = () => {
    circle.classList.toggle('active-theme-1');
}

window.addEventListener('mousemove' , moveCircle);
window.addEventListener('mousedown' , addPulse);
window.addEventListener('mouseup' , addPulse);

// circle themes
window.addEventListener('keydown' , e => {
    if (e.ctrlKey) {
        circle.classList.toggle('active-theme-0');
    }
    if (e.key === "1") {
        circle.classList.toggle('active-theme-1');
    };
    if (e.key === "2") {
        circle.classList.toggle('active-theme-2');
    };
    if (e.key === "3") {
        circle.classList.toggle('active-theme-3');
    };
    if (e.key === "4") {
        circle.classList.toggle('active-theme-4');
    };
})
