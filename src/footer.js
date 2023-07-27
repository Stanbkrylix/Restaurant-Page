export default function footerFunc() {
    const footer = document.querySelector(".footer");
    const container = document.createElement("div");
    container.setAttribute("class", "footer-container");

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    const h21 = document.createElement("h2");
    const h22 = document.createElement("h2");
    const h23 = document.createElement("h2");

    const ul1 = document.createElement("ul");
    const ul2 = document.createElement("ul");
    const ul3 = document.createElement("ul");

    const ul1Li1 = document.createElement("li");
    const ul1Li2 = document.createElement("li");
    const ul1Li3 = document.createElement("li");

    const ul2Li1 = document.createElement("li");
    const ul2Li2 = document.createElement("li");
    const ul2Li3 = document.createElement("li");

    const ul3Li1 = document.createElement("li");
    const ul3Li2 = document.createElement("li");
    const ul3Li3 = document.createElement("li");

    h21.textContent = "About Us";
    h22.textContent = "FAQ";
    h23.textContent = "More Contact";

    ul1Li1.textContent = "About us";
    ul1Li2.textContent = "Carreer";
    ul1Li3.textContent = "Programs";

    ul2Li1.textContent = "Help";
    ul2Li2.textContent = "Location";
    ul2Li3.textContent = "Price";

    ul3Li1.textContent = "Linkend";
    ul3Li2.textContent = "Email";
    ul3Li3.textContent = "More email";

    footer.appendChild(container);
    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(div3);

    div1.appendChild(h21);
    div1.appendChild(ul1);
    ul1.appendChild(ul1Li1);
    ul1.appendChild(ul1Li2);
    ul1.appendChild(ul1Li3);

    div2.appendChild(h22);
    div2.appendChild(ul2);
    ul2.appendChild(ul2Li1);
    ul2.appendChild(ul2Li2);
    ul2.appendChild(ul2Li3);

    div3.appendChild(h23);
    div3.appendChild(ul3);
    ul3.appendChild(ul3Li1);
    ul3.appendChild(ul3Li2);
    ul3.appendChild(ul3Li3);
}
