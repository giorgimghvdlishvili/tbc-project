const slides = document.getElementsByClassName("slide");
const sliderPoints = document.querySelector(".slider-points");
const sliderArrows = document.getElementsByClassName("slider-arrow");

function swapSlides(id) {
    const slidesArr = Array.from(slides);
    let currentActive = 1;
    slidesArr.forEach(slide => {
        if(slide.dataset.isactive === "true") {
            currentActive = parseInt(slide.dataset.slidenumber);
        }
    })

    let nextSlide = currentActive + 1;
    if(currentActive === slidesArr.length) {
        nextSlide = 1;
    }

    if(id) {
        nextSlide = id;
    }

    slidesArr.forEach(slide => {
        if(slide.dataset.slidenumber == nextSlide) {
            slide.dataset.isactive = "true";
        } else {
            slide.dataset.isactive = "false";
        }
    })
}

let lastSliderControllClick = 0;
sliderPoints.addEventListener("click", (e) => {
    const {
        target: {
            dataset: {
                sliderpointid
            }
        }
    } = e;

    if(!sliderpointid) return;

    lastSliderControllClick = +new Date();
    swapSlides(parseInt(sliderpointid));
})

Array.from(sliderArrows).forEach(arrow => {
    const dirrection = arrow.dataset.arrowdirrection;
    const increment = dirrection === "left" ? -1 : dirrection === "right" ? 1 : 0;
    const slidesArr = Array.from(slides);

    arrow.addEventListener("click", () => {
        lastSliderControllClick = +new Date();

        let currentActive = 1;
        slidesArr.forEach(slide => {
            if(slide.dataset.isactive === "true") {
                currentActive = parseInt(slide.dataset.slidenumber);
            }
        })

        newActiveId = currentActive + increment;

        if(newActiveId < 1) newActiveId = slidesArr.length;
        else if (newActiveId > slidesArr.length) newActiveId = 1;

        swapSlides(newActiveId)
    })
})

const interval = 5000;
setInterval(() => {
    if(+new Date() - lastSliderControllClick > interval){
        swapSlides();
    }
}, interval)
