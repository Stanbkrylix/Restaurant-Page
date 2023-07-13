import Oleato from "./Oleato.jpg";
import coffees from "./hot-coffees.jpg";
import tea from "./Tea.jpg";
import coldDrinks from "./cold-drinks.jpg";

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
    drinkCardMenus.setAttribute("class", "cardMenuDiv");

    // cards
    const drinkCard1 = document.createElement("div");
    drinkCard1.setAttribute("class", "drinkCard drinkCard1");
    const drinkCard2 = document.createElement("div");
    drinkCard2.setAttribute("class", "drinkCard drinkCard2");
    const drinkCard3 = document.createElement("div");
    drinkCard3.setAttribute("class", "drinkCard drinkCard2");
    const drinkCard4 = document.createElement("div");
    drinkCard4.setAttribute("class", "drinkCard drinkCard4");

    // descriptionDivs
    const drinkDescriptionDiv = document.createElement("div");
    drinkDescriptionDiv.setAttribute("class", "drinkDescDiv");

    const drinkDescriptionDiv2 = document.createElement("div");
    drinkDescriptionDiv2.setAttribute("class", "drinkDescDiv");

    const drinkDescriptionDiv3 = document.createElement("div");
    drinkDescriptionDiv3.setAttribute("class", "drinkDescDiv");

    const drinkDescriptionDiv4 = document.createElement("div");
    drinkDescriptionDiv4.setAttribute("class", "drinkDescDiv");

    // inside of description
    const drinkName = document.createElement("h2");
    const drinkPrice = document.createElement("h2");
    const drinkDescription = document.createElement("p");

    const drinkName2 = document.createElement("h2");
    const drinkPrice2 = document.createElement("h2");
    const drinkDescription2 = document.createElement("p");

    const drinkName3 = document.createElement("h2");
    const drinkPrice3 = document.createElement("h2");
    const drinkDescription3 = document.createElement("p");

    const drinkName4 = document.createElement("h2");
    const drinkPrice4 = document.createElement("h2");
    const drinkDescription4 = document.createElement("p");

    drinkCard1.appendChild(drinkDescriptionDiv);
    drinkCard2.appendChild(drinkDescriptionDiv2);
    drinkCard3.appendChild(drinkDescriptionDiv3);
    drinkCard4.appendChild(drinkDescriptionDiv4);

    // first card
    drinkDescriptionDiv.appendChild(drinkName);
    drinkDescriptionDiv.appendChild(drinkPrice);
    drinkDescriptionDiv.appendChild(drinkDescription);
    drinkName.textContent = "Oleato";
    drinkPrice.textContent = "$4";
    drinkDescription.textContent = "Place holder";

    // second card
    drinkDescriptionDiv2.appendChild(drinkName2);
    drinkDescriptionDiv2.appendChild(drinkPrice2);
    drinkDescriptionDiv2.appendChild(drinkDescription2);
    drinkName2.textContent = "Coffee";
    drinkPrice2.textContent = "$2";
    drinkDescription2.textContent = "Place holder";

    // third card
    drinkDescriptionDiv3.appendChild(drinkName3);
    drinkDescriptionDiv3.appendChild(drinkPrice3);
    drinkDescriptionDiv3.appendChild(drinkDescription3);
    drinkName3.textContent = "Tea";
    drinkPrice3.textContent = "$2";
    drinkDescription3.textContent = "Place holder";

    // fourth card
    drinkDescriptionDiv4.appendChild(drinkName4);
    drinkDescriptionDiv4.appendChild(drinkPrice4);
    drinkDescriptionDiv4.appendChild(drinkDescription4);
    drinkName4.textContent = "Cold Drinks";
    drinkPrice4.textContent = "$5";
    drinkDescription4.textContent = "Place holder";

    // creating images
    const myOleato = new Image();
    myOleato.src = Oleato;

    const myCoffees = new Image();
    myCoffees.src = coffees;

    const myTea = new Image();
    myTea.src = tea;

    const myColdDrinks = new Image();
    myColdDrinks.src = coldDrinks;

    // for Image
    const drinkMenuImageDiv = document.createElement("div");
    const drinkMenuImageDiv2 = document.createElement("div");
    const drinkMenuImageDiv3 = document.createElement("div");
    const drinkMenuImageDiv4 = document.createElement("div");

    drinkMenuImageDiv.setAttribute("class", "menuImage");
    drinkMenuImageDiv2.setAttribute("class", "menuImage");
    drinkMenuImageDiv3.setAttribute("class", "menuImage");
    drinkMenuImageDiv4.setAttribute("class", "menuImage");

    drinkCard1.appendChild(drinkMenuImageDiv);
    drinkCard2.appendChild(drinkMenuImageDiv2);
    drinkCard3.appendChild(drinkMenuImageDiv3);
    drinkCard4.appendChild(drinkMenuImageDiv4);

    drinkMenuImageDiv.appendChild(myOleato);
    drinkMenuImageDiv2.appendChild(myCoffees);
    drinkMenuImageDiv3.appendChild(myTea);
    drinkMenuImageDiv4.appendChild(myColdDrinks);

    // Card menu divs
    drinkDiv.appendChild(drinkCardMenus);
    drinkCardMenus.appendChild(drinkCard1);
    drinkCardMenus.appendChild(drinkCard2);
    drinkCardMenus.appendChild(drinkCard3);
    drinkCardMenus.appendChild(drinkCard4);

    // Cards with 2 divs
    drinkCard1.appendChild(drinkDescriptionDiv);
    drinkCard1.appendChild(drinkMenuImageDiv);

    drinkCard2.appendChild(drinkDescriptionDiv2);
    drinkCard2.appendChild(drinkMenuImageDiv2);

    drinkCard3.appendChild(drinkDescriptionDiv3);
    drinkCard3.appendChild(drinkMenuImageDiv3);

    drinkCard4.appendChild(drinkDescriptionDiv4);
    drinkCard4.appendChild(drinkMenuImageDiv4);

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
