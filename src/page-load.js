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
    contactContainer.classList.add("hidden");
    homeContainer.classList.remove("hidden");
    homeLinkBtn.classList.add("underlined");

    homeLinkBtn.addEventListener("click", (event) => {
        homeContainer.classList.remove("hidden");
        menuContainer.classList.add("hidden");
        contactContainer.classList.add("hidden");

        homeLinkBtn.classList.add("underlined");
        menuLinkBtn.classList.remove("underlined");
        contactLinkBtn.classList.remove("underlined");

        console.log("works");
    });

    menuLinkBtn.addEventListener("click", (event) => {
        homeContainer.classList.add("hidden");
        menuContainer.classList.remove("hidden");
        contactContainer.classList.add("hidden");

        homeLinkBtn.classList.remove("underlined");
        menuLinkBtn.classList.add("underlined");
        contactLinkBtn.classList.remove("underlined");
    });

    contactLinkBtn.addEventListener("click", (event) => {
        homeContainer.classList.add("hidden");
        menuContainer.classList.add("hidden");
        contactContainer.classList.remove("hidden");

        homeLinkBtn.classList.remove("underlined");
        menuLinkBtn.classList.remove("underlined");
        contactLinkBtn.classList.add("underlined");
    });
}
