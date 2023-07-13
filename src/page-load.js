import { navbar } from "./nav";
import homeContent from "./home";
import menuContent from "./menu";
import contactContent from "./contact";
import footerFunc from "./footer";

export default function pageLoad() {
    navbar();
    homeContent();
    menuContent();
    contactContent();
    footerFunc();

    const homeLinkBtn = document.querySelector(".homeLink");
    const menuLinkBtn = document.querySelector(".menuLink");
    const contactLinkBtn = document.querySelector(".contactLink");

    const homeContainer = document.querySelector(".homeContainer");
    const menuContainer = document.querySelector(".menuContainer");
    const contactContainer = document.querySelector(".contactContainer");

    // console.log(contactContainer);
    menuContainer.classList.add("hidden");
    // contactContainer.classList.add("hidden");
    homeContainer.classList.add("hidden");

    homeLinkBtn.addEventListener("click", (event) => {
        homeContainer.classList.remove("hidden");
        menuContainer.classList.add("hidden");
        contactContainer.classList.add("hidden");

        console.log("works");
    });

    menuLinkBtn.addEventListener("click", (event) => {
        homeContainer.classList.add("hidden");
        menuContainer.classList.remove("hidden");
        contactContainer.classList.add("hidden");
    });

    contactLinkBtn.addEventListener("click", (event) => {
        homeContainer.classList.add("hidden");
        menuContainer.classList.add("hidden");
        contactContainer.classList.remove("hidden");
    });
    // console.log(homeLinkBtn);
}
