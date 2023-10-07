/** @format */
var typed = new Typed(".typing", {
  strings: [
    "Developer",
    "Designer",
    "Programmer",
    "Machine Learner",
    "Freelancer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const headerTogglerOpen = document.getElementById("header-menu-open");
const headerTogglerClose = document.getElementById("header-menu-close");
const headerSide = document.getElementById("header-side");

headerTogglerOpen.addEventListener("click", (event) => {
  headerSide.style.top = "0";
});
headerTogglerClose.addEventListener("click", (event) => {
  headerSide.style.top = "-200%";
});

window.addEventListener("scroll", function () {
  var headerScroll = document.getElementById("header-scroll");

  if (window.scrollY > 200) {
    headerScroll.classList.add("header-scroll");
  } else {
    headerScroll.classList.remove("header-scroll");
  }
});

window.addEventListener("scroll", function () {
  var headerScroll = document.getElementById("header-scroll");
  var headContainer = this.document.getElementById("head-container");
  if (window.scrollY > 100) {
    headerScroll.classList.add("header-animation");
    headContainer.classList.add("head-container");
  } else {
    headerScroll.classList.remove("header-animation");
    headContainer.classList.remove("head-container");
  }
});

// Dark Mode

const toggleSwitch = document.querySelector(
  ".theme-switch input[type=checkbox]"
);
var currentTheme = localStorage.getItem("theme");
const appearance = document.getElementById("appearance");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    appearance.innerHTML = "Light mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    appearance.innerHTML = "Dark mode";
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

if (currentTheme == "dark") {
  document.querySelector("#light-theme-toggle-btn i").style.opacity = "0";
  document.querySelector("#dark-theme-toggle-btn i").style.opacity = "1";
  
} else {
  document.querySelector("#light-theme-toggle-btn i").style.opacity = "1";
  document.querySelector("#dark-theme-toggle-btn i").style.opacity = "0";
  appearance.innerHTML = "Dark mode";
}

function toggleDark(e) {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
  document.querySelector("#light-theme-toggle-btn i").style.opacity = "0";
  document.querySelector("#dark-theme-toggle-btn i").style.opacity = "1";
}
function toggleLight(e) {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
  document.querySelector("#dark-theme-toggle-btn i").style.opacity = "0";
  document.querySelector("#light-theme-toggle-btn i").style.opacity = "1";
}
document
  .getElementById("dark-theme-toggle-btn")
  .addEventListener("click", toggleDark);
document
  .getElementById("light-theme-toggle-btn")
  .addEventListener("click", toggleLight);
