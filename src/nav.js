const navbar = function () {
    const nav = document.querySelector(".nav");
    const navUl = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");

    const homeLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const contactLink = document.createElement("a");

    nav.appendChild(navUl);
    navUl.appendChild(home);
    navUl.appendChild(menu);
    navUl.appendChild(contact);

    home.appendChild(homeLink);
    menu.appendChild(menuLink);
    contact.appendChild(contactLink);

    homeLink.setAttribute("class", "homeLink");
    menuLink.setAttribute("class", "MenuLink");
    contactLink.setAttribute("class", "contactLink");

    homeLink.textContent = "Home";
    menuLink.textContent = "Menu";
    contactLink.textContent = "Contact";
    console.log(nav);
};

export { navbar };
