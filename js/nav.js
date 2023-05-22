const navBar = document.querySelector("#navigation");

const home = document.querySelector("#home");
const login = document.querySelector("#login");
const proSer = document.querySelector("#pro-ser");
const about = document.querySelector("#about");
const blogsNews = document.querySelector("#blogs-news");
const join = document.querySelector("#join");
const contact = document.querySelector("#contact");

const links = document.querySelectorAll(".nav-link");

const domain = document.location.pathname;

// if (domain.includes("index.html")) {
//   home.classList.add("active");
//   home.classList.remove("inactive");

// } else {
//   home.classList.remove("active");
//     home.classList.add("inactive");

// }

// if (domain.includes("products_services.html")) {
//   proSer.classList.add("active");
//   proSer.classList.remove("inactive");

// } else {
//   proSer.classList.remove("active");
//     proSer.classList.add("inactive");

// }

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navBar.classList.add("shadow");

    home.classList.add("blue-link");
    proSer.classList.add("blue-link");
    about.classList.add("blue-link");
    blogsNews.classList.add("blue-link");
    join.classList.add("blue-link");
    contact.classList.add("blue-link");
    login.classList.add("login-bg");
  } else {
    navBar.classList.remove("shadow");

    home.classList.remove("blue-link");
    proSer.classList.remove("blue-link");
    about.classList.remove("blue-link");
    blogsNews.classList.remove("blue-link");
    join.classList.remove("blue-link");
    contact.classList.remove("blue-link");
    login.classList.remove("login-bg");
  }
});
