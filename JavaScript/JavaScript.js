function ScrollTo(y) {
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
};

// notify
function exitNotify() {
    let notification = document.querySelector(".notification")
    let progressBar = document.querySelector(".progress")

    notification.classList.remove("active")
    progressBar.classList.remove("active")
}

function notify() {
    let notification = document.querySelector(".notification")
    let progressBar = document.querySelector(".progress")

    notification.classList.add("active")
    progressBar.classList.add("active")

    window.addEventListener('keydown' , e => {
        if (e.key === "Escape") {
            notification.classList.remove("active")
            progressBar.classList.remove("active")
        }
    })

    const myTimeout = setTimeout(exitNotify, 8.75*1000);
}

// contact function
function sendEmail() {
    let name = prompt("Please enter your full name");

    if (name != null) {
        let subject = "Send From harrysidiropoulos.netlify.app by "+ name +"."
        let body = ""
        
        window.open("mailto:harryssidiropoulos@gmail.com?subject="+ subject +"&body="+ body);
    } else {
        console.error("name equals to null, unable to continue.")
    }
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

    if (e.shiftKey) {
        window.location.reload();
        console.log("|⟲| Reloaded.")
    }
})

const fadeOutMain = () => {
    const loaderWrapper = document.querySelector(".wrapper")
    loaderWrapper.classList.add("fade")
}

const fadeOut = () => {
    const myTimeout = setTimeout(fadeOutMain, 0.50*1000);
}

window.addEventListener('load' , fadeOut)
