import { homePage } from "./init.js";
import "./styles.css";
import { menu } from "./menu.js";
import { about } from "./about.js";

homePage();

const btnHome = document.querySelector("#home");
btnHome?.addEventListener("click", () => homePage());

const btnMenu = document.querySelector("#menu");
btnMenu?.addEventListener("click", () => menu());

const btnAbout = document.querySelector("#about");
btnAbout?.addEventListener("click", () => about());
