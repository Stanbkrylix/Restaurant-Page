// import coffee from "./"
export default function menuContent() {
    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    const menuH1 = document.createElement("h1");
    menuContainer.setAttribute("class", "menuContainer");

    content.appendChild(menuContainer);
    menuContainer.appendChild(menuH1);
    menuH1.textContent = "Menu";

    // ===================== drinks ============================
    const drinkDiv = document.createElement("div");
    const drinkH2 = document.createElement("h2");
    menuContainer.appendChild(drinkDiv);

    drinkDiv.appendChild(drinkH2);
    drinkH2.textContent = "Drinks";

    // ================= drinklist =============================
    const drinkListDiv = document.createElement("div");

    const drinkCardMenus = document.createElement("div");
    const drinkCard1 = document.createElement("div");
    const drinkCard2 = document.createElement("div");
    const drinkCard3 = document.createElement("div");
    const drinkCard4 = document.createElement("div");

    const drinkDescriptionDiv = document.createElement("div");
    const drinkMenuImageDiv = document.createElement("div");

    drinkDiv.appendChild(drinkCardMenus);
    drinkCardMenus.appendChild(drinkCard1);
    drinkCardMenus.appendChild(drinkCard2);
    drinkCardMenus.appendChild(drinkCard3);
    drinkCardMenus.appendChild(drinkCard4);

    drinkCard1.appendChild(drinkDescriptionDiv);
    drinkCard1.appendChild(drinkMenuImageDiv);

    drinkDescriptionDiv.textContent = "description";
    drinkMenuImageDiv.textContent = "Image";

    // drinkList1.textContent = "Oleato";
    // drinkList2.textContent = "Coffees";
    // drinkList3.textContent = "Tea";
    // drinkList4.textContent = "Cold drinks";

    //============ food section ======================
    const foodDiv = document.createElement("div");
    const foodH2 = document.createElement("h2");
    menuContainer.appendChild(foodDiv);
    foodDiv.appendChild(foodH2);
    foodH2.textContent = "Food";

    // ================= foodlist =============================
    const foodListDiv = document.createElement("div");
    const foodUl = document.createElement("ul");
    const foodList1 = document.createElement("li");
    const foodList2 = document.createElement("li");
    const foodList3 = document.createElement("li");
    const foodList4 = document.createElement("li");

    foodDiv.appendChild(foodUl);
    foodUl.appendChild(foodList1);
    foodUl.appendChild(foodList2);
    foodUl.appendChild(foodList3);
    foodUl.appendChild(foodList4);

    foodList1.textContent = "Hot Breakfast";
    foodList2.textContent = "Lunch";
    foodList3.textContent = "Bakery";
    foodList4.textContent = "Oatmeal & Yogurt";

    //============ Merchandise section ======================
    const merchandiseDiv = document.createElement("div");
    const merchandiseH2 = document.createElement("h2");
    menuContainer.appendChild(merchandiseDiv);
    merchandiseDiv.appendChild(merchandiseH2);
    merchandiseH2.textContent = "Merchandise";

    // ================= foodlist =============================
    const merchandiseListDiv = document.createElement("div");
    const merchandiseUl = document.createElement("ul");
    const merchandiseList1 = document.createElement("li");
    const merchandiseList2 = document.createElement("li");
    const merchandiseList3 = document.createElement("li");
    const merchandiseList4 = document.createElement("li");

    merchandiseDiv.appendChild(merchandiseUl);
    merchandiseUl.appendChild(merchandiseList1);
    merchandiseUl.appendChild(merchandiseList2);
    merchandiseUl.appendChild(merchandiseList3);
    merchandiseUl.appendChild(merchandiseList4);

    merchandiseList1.textContent = "Cold Cups";
    merchandiseList2.textContent = "Mugs";
    merchandiseList3.textContent = "Tumblers";
    merchandiseList4.textContent = "Other";
}
