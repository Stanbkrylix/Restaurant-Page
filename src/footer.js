export default function footerFunc() {
    const footer = document.querySelector(".footer");
    const footerH2 = document.querySelector("h2");
    footerH2.textContent = "Footer Section";
    footer.appendChild(footerH2);
    console.log(footer);
}
