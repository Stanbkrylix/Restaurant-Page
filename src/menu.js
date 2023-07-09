export default function menuContent() {
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    const menuH1 = document.createElement("h1");

    content.appendChild(menuContainer);
    menuContainer.appendChild(menuH1);
    menuH1.textContent = "Menu";

    // ===================== drinks ============================
    const drinkDiv = document.createElement("div");
    const drinkH2 = document.createElement("h2");
    // ================= drinklist =============================
    const drinkListDiv = document.createElement("div");
    const drinkUl = document.createElement("ul");
    const drinkList1 = document.createElement("li");
    const drinkList2 = document.createElement("li");
    const drinkList3 = document.createElement("li");
    const drinkList4 = document.createElement("li");
}
