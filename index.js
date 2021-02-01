//scroll trigger + smooth scroll bar
gsap.registerPlugin(ScrollTrigger);


// Setup
const scroller = document.querySelector('.scroller');

const bodyScrollBar = Scrollbar.init(scroller, {
    damping: 0.1,
    delegateTo: document,
    alwaysShowTracks: true,



});




const cursor = document.querySelector(".cursor");
const cursorInner = document.querySelector(".cursor-inner");
const link = document.querySelector(".links");
const sociaLinks = document.querySelector(".hover-links");


let posX = 0,
    posY = 0;

let mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 5;
        posY += (mouseY - posY) / 5;

        TweenMax.set(cursorInner, {
            css: {
                left: posX,
                top: posY
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

link.addEventListener("mouseenter", () => {
    cursorInner.classList.add("active");
    cursor.style.padding = "3rem";
});

link.addEventListener("mouseleave", () => {
    cursorInner.classList.remove("active");
    cursor.style.padding = "1.5rem";
});


sociaLinks.addEventListener("mouseenter", () => {
    cursorInner.classList.add("active-social");
    cursor.style.padding = "1rem";
});

sociaLinks.addEventListener("mouseleave", () => {
    cursorInner.classList.remove("active-social");
    cursor.style.padding = "1.5rem";
});