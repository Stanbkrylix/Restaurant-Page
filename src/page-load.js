import { navbar } from "./nav";
import homeContent from "./home";
import menuContent from "./menu";
import contactContent from "./contact";
import footerFunc from "./footer";

export default function pageLoad() {
    navbar();
    homeContent();
    menuContent();
    footerFunc();

    const homeLinkBtn = document.querySelector(".homeLink");
    const menuLinkBtn = document.querySelector(".homeLink");
    const contactLinkBtn = document.querySelector(".homeLink");

    const homeContainer = document.querySelector(".homeContainer");
    homeContainer.classList.add("hidden");

    homeLinkBtn.addEventListener("click", (event) => {
        // homeContainer.classList.add("hidden");
    });
    // console.log(homeLinkBtn);
}
