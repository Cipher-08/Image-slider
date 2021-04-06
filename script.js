const slide = document.querySelector('.slide');
const image = document.querySelectorAll('.slide img')


//buttons

const prevButton = document.querySelector('.prevBtn')
const nextButton = document.querySelector('.nextBtn')


let counter = 1;
const size = image[0].clientWidth;
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextButton.addEventListener('click', () => {
    if (counter >= image.length - 1) return;

    slide.style.transition = "transform 0.8s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})
prevButton.addEventListener('click', () => {
    if (counter <= 0) return;

    slide.style.transition = "transform 0.8s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

slide.addEventListener("transitionend", () => {
    // console.log(image[counter].id === 'lastClone')
    if (image[counter].id === 'lastClone') {
        slide.style.transition = "none";
        counter = image.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


    } else if (image[counter].id === 'firstClone') {
        slide.style.transition = "none";
        counter = image.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


    }
})
