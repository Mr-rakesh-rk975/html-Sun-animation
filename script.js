// // script.js
// const scene = document.querySelector('.scene');
// const sun = document.querySelector('.sun');
// const moon = document.querySelector('.moon');
// const stars = document.querySelector('.stars');
// const toggleBtn = document.querySelector('.toggle-btn');

// let isDay = true;

// toggleBtn.addEventListener('click', () => {
//   isDay = !isDay;
  
//   if (isDay) {
//     // Change to Day
//     scene.style.background = 'linear-gradient(to bottom, #87CEEB, #fff)';
//     sun.style.opacity = '1';
//     sun.style.transform = 'translateX(-50%) translateY(0)';
//     moon.style.opacity = '0';
//     moon.style.transform = 'translateX(-50%) translateY(50px)';
//     stars.style.opacity = '0';
//   } else {
//     // Change to Night
//     scene.style.background = 'linear-gradient(to bottom, #020024, #090979, #00d4ff)';
//     sun.style.opacity = '0';
//     sun.style.transform = 'translateX(-50%) translateY(-50px)';
//     moon.style.opacity = '1';
//     moon.style.transform = 'translateX(-50%) translateY(0)';
//     stars.style.opacity = '1';
//   }
// });







// script.js
const scene = document.querySelector('.scene');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const stars = document.querySelector('.stars');
const shootingStar = document.querySelector('.shooting-star');
const clouds = document.querySelectorAll('.cloud');
const toggleBtn = document.querySelector('.toggle-btn');

let isDay = true;

toggleBtn.addEventListener('click', () => {
  isDay = !isDay;
  
  if (isDay) {
    // Day mode
    scene.style.background = 'linear-gradient(to bottom, #87CEEB, #fff)';
    sun.style.opacity = '1';
    sun.style.transform = 'translateX(-50%) translateY(0)';
    moon.style.opacity = '0';
    moon.style.transform = 'translateX(-50%) translateY(50px)';
    stars.style.opacity = '0';
    shootingStar.style.opacity = '0';
    clouds.forEach(cloud => (cloud.style.opacity = '1'));
  } else {
    // Night mode
    scene.style.background = 'linear-gradient(to bottom, #020024, #090979, #00d4ff)';
    sun.style.opacity = '0';
    sun.style.transform = 'translateX(-50%) translateY(-50px)';
    moon.style.opacity = '1';
    moon.style.transform = 'translateX(-50%) translateY(0)';
    stars.style.opacity = '1';
    shootingStar.style.opacity = '1';
    clouds.forEach(cloud => (cloud.style.opacity = '0'));
  }
});
