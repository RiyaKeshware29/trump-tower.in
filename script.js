let ham = document.querySelector(".ham-div");
let close = document.querySelector(".cross");
let temp = document.querySelector(".temp");

ham.addEventListener('click', () => {
    temp.style.marginRight = "0%";
});

close.addEventListener('click', () => {
    temp.style.marginRight = "200%";
    location.reload();
});


let prev_btn = document.querySelector('.btn-prev');
let next_btn = document.querySelector('.btn-next');
let slide1 = document.getElementById('home-img1');
let slide2 = document.getElementById('home-img2');

let slides = document.getElementsByClassName("home-slides");
let index = 0;
// next function
document.querySelector(".btn-next").addEventListener('click', () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");

});
// prev function
document.querySelector('.btn-prev').addEventListener('click', () => {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
});


setInterval(() => {

    if (index >= 0) {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }


}, 6000);