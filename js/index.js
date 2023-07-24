// Function to deal with menuToggle and dayNight

let body = document.querySelector("body");
let dayNight = document.querySelector(".dayNight");
let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");

dayNight.onclick = function () {
  dayNight.classList.toggle("active");
  body.classList.toggle("dark");
}

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

