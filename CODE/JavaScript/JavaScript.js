function ScrollTo(y) {
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
};

// contact function
function sendEmail() {
    let name = prompt("Please enter your full name");
    let subject = "Send From harrysidiropoulos.netlify.app by "+ name +"."
    let body = ""
    
    window.open("mailto:harryssidiropoulos@gmail.com?subject="+ subject +"&body="+ body);
}


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
    // other shortcuts
    if (e.key === "`") {
        let username = prompt("Please enter your username");

        if (username === null) {
            alert("Hello!");
        } else {
            alert("Hello " + username + "!");
        }
    }

    // navigation shortcuts
    if (e.key === "1") {
        location.href = '#Welcome-Screen'
    }
    if (e.key === "2") {
        location.href = '#Skills-Screen'
    }
    if (e.key === "3") {
        location.href = '#About-Me-Screen'
    }
    if (e.key === "4") {
        location.href = '#Projects-Screen'
    }

    // circle themes
    if (e.ctrlKey) {
        circle.classList.toggle('active-theme-1');
    }
})
