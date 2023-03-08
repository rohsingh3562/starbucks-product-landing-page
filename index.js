function imgSlider(anything) {
    document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
    const circle =document.querySelector(".circle");
    circle.style.background = color;

}

const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('active');
  navList.classList.toggle('active');
});

