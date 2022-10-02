const heroSection = document.querySelector("#hero");
const imageOne = document.querySelector("#imageOne");
const imageTwo = document.querySelector("#imageTwo");

// console.log(heroSection);

gallery.forEach( elementData => {
    // console.log(heroSection.getBoundingClientRect());
    // heroSection.forEach( element => {
        // element.item["#imageOne"].style.backgroundImage = `url(${elementData.imageOne})`;
        // element.item["#imageTwo"].style.backgroundImage = `url(${elementData.imageTwo})`;
        imageOne.style.backgroundImage = `url(${elementData.imageOne})`;
        imageTwo.style.backgroundImage = `url(${elementData.imageTwo})`;
    // });
});

// console.log(window.innerHeight);

const scrollAmount = -600;
window.addEventListener('scroll', (e) => {
    // console.log(e)
    const { top } = heroSection.getBoundingClientRect();
    const heroInView = top - window.innerHeight < scrollAmount;

    imageOne.style.opacity = +!heroInView;
    imageTwo.style.opacity = +heroInView;
    
    // imageOne.style.opacity = heroInView ? 0 : 1;
    // imageTwo.style.opacity = heroInView ? 1 : 0;

    // if ( top - window.innerHeight < scrollAmount ) {
    //     imageOne.style.opacity = 0;
    //     imageTwo.style.opacity = 1;
    //     // gallery.forEach( element => {
    //     //     // console.log(heroSection.getBoundingClientRect());
    //     //     heroSection.style.backgroundImage = `url(${element.imageTwo})`;
    //     // });
    // } else {
    //     imageOne.style.opacity = 1;
    //     imageTwo.style.opacity = 0;
    //     // gallery.forEach( element => {
    //     //     // console.log(heroSection.getBoundingClientRect());
    //     //     heroSection.style.backgroundImage = `url(${element.imageOne})`;
    //     // });
    // }
});


