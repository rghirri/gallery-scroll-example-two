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

// const scrollAmount = -395;
// window.addEventListener('scroll', (e) => {
    // console.log(e)
    // const { top } = heroSection.getBoundingClientRect();
    // const heroInView = top - window.innerHeight < scrollAmount;

    // imageOne.style.opacity = +!heroInView;
    // imageTwo.style.opacity = +heroInView;
    
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
// });

function debounce(func, wait, immediate) {
    var timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
          
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
      
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };

function galleryScroll(e){
    console.count(e);
    const { top } = heroSection.getBoundingClientRect();
    const heroInView = top - window.innerHeight < scrollAmount;
    imageOne.style.opacity = +!heroInView;
    imageTwo.style.opacity = +heroInView;
}

const scrollAmount = -395;
window.addEventListener('scroll', debounce(galleryScroll, 30, true));


    // console.log(e)
    
    
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
// });


