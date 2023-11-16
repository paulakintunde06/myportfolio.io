// import { serviceID, templateID, publicKey} from "./confidential.js";

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navList = document.getElementById("nav-list");

menuIcon.addEventListener("click", (e) => {
     navList.style.display = "block";
     menuIcon.style.display = "none";
})
closeIcon.addEventListener("click", (e) => {
     navList.style.display = "none";
     menuIcon.style.display = "inline-block";
})