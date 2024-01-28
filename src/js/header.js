const hamburgerMenu = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".menu-mobile")
const header = document.getElementsByTagName("header")[0];

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    mobileMenu.classList.toggle("open")
})

const scrollOffset = 85;
const scrollDelta = 3;
let prevY = 0;
document.addEventListener("scroll", (e) => {
    const currentY = document.documentElement.scrollTop;
    const isScrolledDown = currentY > prevY; // check if it was scrolled down
    const diff = Math.abs(currentY - prevY); // distance between prev and current

    if(!header) return;

    if(diff >= scrollDelta) { // if it was scrolled at least by 5px 
        if(isScrolledDown && currentY > scrollOffset) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
    }

    if(currentY > scrollOffset) {
        header.classList.add("transparent-header")
    } else {
        header.classList.remove("transparent-header")
    }

    prevY = currentY;
})