import Oleato from "./Oleato.jpg";
import coffees from "./hot-coffees.jpg";
import tea from "./Tea.jpg";
import coldDrinks from "./cold-drinks.jpg";

import bakery from "./Bakery.jpg";
import breakfast from "./Breakfast.jpg";
import lunch from "./lunch.jpg";
import steak from "./Steak-Unsplash.jpg";

const contentFunction = function (object) {
    // ===================== drinks ============================
    object.drinkDiv.appendChild(object.drinkH2);
    object.drinkH2.textContent = "Drinks";

    // ================= drinklist =============================
    object.drinkCardMenus.setAttribute("class", "cardMenuDiv");

    // cards
    object.drinkCard1.setAttribute("class", "card drinkCard1");
    object.drinkCard2.setAttribute("class", "card drinkCard2");
    object.drinkCard3.setAttribute("class", "card drinkCard2");
    object.drinkCard4.setAttribute("class", "card drinkCard4");

    // descriptionDivs
    object.drinkDescriptionDiv.setAttribute("class", "descDiv");
    object.drinkDescriptionDiv2.setAttribute("class", "descDiv");
    object.drinkDescriptionDiv3.setAttribute("class", "descDiv");
    object.drinkDescriptionDiv4.setAttribute("class", "descDiv");

    // inside of description

    object.drinkCard1.appendChild(object.drinkDescriptionDiv);
    object.drinkCard2.appendChild(object.drinkDescriptionDiv2);
    object.drinkCard3.appendChild(object.drinkDescriptionDiv3);
    object.drinkCard4.appendChild(object.drinkDescriptionDiv4);

    // first card
    object.drinkDescriptionDiv.appendChild(object.drinkName);
    object.drinkDescriptionDiv.appendChild(object.drinkPrice);
    object.drinkDescriptionDiv.appendChild(object.drinkDescription);
    object.drinkName.textContent = "Oleato";
    object.drinkPrice.textContent = "$4";
    object.drinkDescription.textContent = "Place holder";

    // second card
    object.drinkDescriptionDiv2.appendChild(object.drinkName2);
    object.drinkDescriptionDiv2.appendChild(object.drinkPrice2);
    object.drinkDescriptionDiv2.appendChild(object.drinkDescription2);
    object.drinkName2.textContent = "Coffee";
    object.drinkPrice2.textContent = "$2";
    object.drinkDescription2.textContent = "Place holder";

    // third card
    object.drinkDescriptionDiv3.appendChild(object.drinkName3);
    object.drinkDescriptionDiv3.appendChild(object.drinkPrice3);
    object.drinkDescriptionDiv3.appendChild(object.drinkDescription3);
    object.drinkName3.textContent = "Tea";
    object.drinkPrice3.textContent = "$2";
    object.drinkDescription3.textContent = "Place holder";

    // fourth card
    object.drinkDescriptionDiv4.appendChild(object.drinkName4);
    object.drinkDescriptionDiv4.appendChild(object.drinkPrice4);
    object.drinkDescriptionDiv4.appendChild(object.drinkDescription4);
    object.drinkName4.textContent = "Cold Drinks";
    object.drinkPrice4.textContent = "$5";
    object.drinkDescription4.textContent = "Place holder";

    // creating images
    object.myOleato.src = Oleato;
    object.myCoffees.src = coffees;
    object.myTea.src = tea;
    object.myColdDrinks.src = coldDrinks;

    // for Image

    object.drinkMenuImageDiv.setAttribute("class", "menuImage");
    object.drinkMenuImageDiv2.setAttribute("class", "menuImage");
    object.drinkMenuImageDiv3.setAttribute("class", "menuImage");
    object.drinkMenuImageDiv4.setAttribute("class", "menuImage");

    object.drinkCard1.appendChild(object.drinkMenuImageDiv);
    object.drinkCard2.appendChild(object.drinkMenuImageDiv2);
    object.drinkCard3.appendChild(object.drinkMenuImageDiv3);
    object.drinkCard4.appendChild(object.drinkMenuImageDiv4);

    object.drinkMenuImageDiv.appendChild(object.myOleato);
    object.drinkMenuImageDiv2.appendChild(object.myCoffees);
    object.drinkMenuImageDiv3.appendChild(object.myTea);
    object.drinkMenuImageDiv4.appendChild(object.myColdDrinks);

    // Card menu divs
    object.drinkDiv.appendChild(object.drinkCardMenus);
    object.drinkCardMenus.appendChild(object.drinkCard1);
    object.drinkCardMenus.appendChild(object.drinkCard2);
    object.drinkCardMenus.appendChild(object.drinkCard3);
    object.drinkCardMenus.appendChild(object.drinkCard4);

    // Cards with 2 divs
    object.drinkCard1.appendChild(object.drinkDescriptionDiv);
    object.drinkCard1.appendChild(object.drinkMenuImageDiv);

    object.drinkCard2.appendChild(object.drinkDescriptionDiv2);
    object.drinkCard2.appendChild(object.drinkMenuImageDiv2);

    object.drinkCard3.appendChild(object.drinkDescriptionDiv3);
    object.drinkCard3.appendChild(object.drinkMenuImageDiv3);

    object.drinkCard4.appendChild(object.drinkDescriptionDiv4);
    object.drinkCard4.appendChild(object.drinkMenuImageDiv4);
};

export default function menuContent() {
    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    const menuH1 = document.createElement("h1");
    menuContainer.setAttribute("class", "menuContainer");

    content.appendChild(menuContainer);
    menuContainer.appendChild(menuH1);
    menuH1.textContent = "Menu";

    // // ===================== drinks ============================
    const drinkDiv = document.createElement("div");
    const drinkH2 = document.createElement("h2");
    // menuContainer.appendChild(drinkDiv);

    // drinkDiv.appendChild(drinkH2);
    // drinkH2.textContent = "Drinks";

    // // ================= drinklist =============================
    const drinkListDiv = document.createElement("div");
    const drinkCardMenus = document.createElement("div");
    // drinkCardMenus.setAttribute("class", "cardMenuDiv");

    // // cards
    const drinkCard1 = document.createElement("div");
    // drinkCard1.setAttribute("class", "card drinkCard1");
    const drinkCard2 = document.createElement("div");
    // drinkCard2.setAttribute("class", "card drinkCard2");
    const drinkCard3 = document.createElement("div");
    // drinkCard3.setAttribute("class", "card drinkCard2");
    const drinkCard4 = document.createElement("div");
    // drinkCard4.setAttribute("class", "card drinkCard4");

    // // descriptionDivs
    const drinkDescriptionDiv = document.createElement("div");
    // drinkDescriptionDiv.setAttribute("class", "descDiv");

    const drinkDescriptionDiv2 = document.createElement("div");
    // drinkDescriptionDiv2.setAttribute("class", "descDiv");

    const drinkDescriptionDiv3 = document.createElement("div");
    // drinkDescriptionDiv3.setAttribute("class", "descDiv");

    const drinkDescriptionDiv4 = document.createElement("div");
    // drinkDescriptionDiv4.setAttribute("class", "descDiv");

    // // inside of description
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

    // drinkCard1.appendChild(drinkDescriptionDiv);
    // drinkCard2.appendChild(drinkDescriptionDiv2);
    // drinkCard3.appendChild(drinkDescriptionDiv3);
    // drinkCard4.appendChild(drinkDescriptionDiv4);

    // // first card
    // drinkDescriptionDiv.appendChild(drinkName);
    // drinkDescriptionDiv.appendChild(drinkPrice);
    // drinkDescriptionDiv.appendChild(drinkDescription);
    // drinkName.textContent = "Oleato";
    // drinkPrice.textContent = "$4";
    // drinkDescription.textContent = "Place holder";

    // // second card
    // drinkDescriptionDiv2.appendChild(drinkName2);
    // drinkDescriptionDiv2.appendChild(drinkPrice2);
    // drinkDescriptionDiv2.appendChild(drinkDescription2);
    // drinkName2.textContent = "Coffee";
    // drinkPrice2.textContent = "$2";
    // drinkDescription2.textContent = "Place holder";

    // // third card
    // drinkDescriptionDiv3.appendChild(drinkName3);
    // drinkDescriptionDiv3.appendChild(drinkPrice3);
    // drinkDescriptionDiv3.appendChild(drinkDescription3);
    // drinkName3.textContent = "Tea";
    // drinkPrice3.textContent = "$2";
    // drinkDescription3.textContent = "Place holder";

    // // fourth card
    // drinkDescriptionDiv4.appendChild(drinkName4);
    // drinkDescriptionDiv4.appendChild(drinkPrice4);
    // drinkDescriptionDiv4.appendChild(drinkDescription4);
    // drinkName4.textContent = "Cold Drinks";
    // drinkPrice4.textContent = "$5";
    // drinkDescription4.textContent = "Place holder";

    // // creating images
    const myOleato = new Image();
    // myOleato.src = Oleato;

    const myCoffees = new Image();
    // myCoffees.src = coffees;

    const myTea = new Image();
    // myTea.src = te

    const myColdDrinks = new Image();
    // myColdDrinks.src = coldDrinks;

    // // for Image
    const drinkMenuImageDiv = document.createElement("div");
    const drinkMenuImageDiv2 = document.createElement("div");
    const drinkMenuImageDiv3 = document.createElement("div");
    const drinkMenuImageDiv4 = document.createElement("div");

    // drinkMenuImageDiv.setAttribute("class", "menuImage");
    // drinkMenuImageDiv2.setAttribute("class", "menuImage");
    // drinkMenuImageDiv3.setAttribute("class", "menuImage");
    // drinkMenuImageDiv4.setAttribute("class", "menuImage");

    // drinkCard1.appendChild(drinkMenuImageDiv);
    // drinkCard2.appendChild(drinkMenuImageDiv2);
    // drinkCard3.appendChild(drinkMenuImageDiv3);
    // drinkCard4.appendChild(drinkMenuImageDiv4);

    // drinkMenuImageDiv.appendChild(myOleato);
    // drinkMenuImageDiv2.appendChild(myCoffees);
    // drinkMenuImageDiv3.appendChild(myTea);
    // drinkMenuImageDiv4.appendChild(myColdDrinks);

    // // Card menu divs
    // drinkDiv.appendChild(drinkCardMenus);
    // drinkCardMenus.appendChild(drinkCard1);
    // drinkCardMenus.appendChild(drinkCard2);
    // drinkCardMenus.appendChild(drinkCard3);
    // drinkCardMenus.appendChild(drinkCard4);

    // // Cards with 2 divs
    // drinkCard1.appendChild(drinkDescriptionDiv);
    // drinkCard1.appendChild(drinkMenuImageDiv);

    // drinkCard2.appendChild(drinkDescriptionDiv2);
    // drinkCard2.appendChild(drinkMenuImageDiv2);

    // drinkCard3.appendChild(drinkDescriptionDiv3);
    // drinkCard3.appendChild(drinkMenuImageDiv3);

    // drinkCard4.appendChild(drinkDescriptionDiv4);
    // drinkCard4.appendChild(drinkMenuImageDiv4);

    const drinkObject = {
        menuContainer,
        drinkDiv,
        drinkH2,
        drinkCardMenus,
        drinkCard1,
        drinkCard2,
        drinkCard3,
        drinkCard4,
        drinkDescriptionDiv,
        drinkDescriptionDiv2,
        drinkDescriptionDiv3,
        drinkDescriptionDiv4,
        drinkName,
        drinkName2,
        drinkName3,
        drinkName4,
        drinkPrice,
        drinkPrice2,
        drinkPrice3,
        drinkPrice4,
        drinkDescription,
        drinkDescription2,
        drinkDescription3,
        drinkDescription4,
        myOleato,
        myCoffees,
        myTea,
        myColdDrinks,
        drinkMenuImageDiv,
        drinkMenuImageDiv2,
        drinkMenuImageDiv3,
        drinkMenuImageDiv4,
    };

    contentFunction(drinkObject);
    //============ food section ======================

    const foodDiv = document.createElement("div");
    const foodH2 = document.createElement("h2");
    menuContainer.appendChild(foodDiv);
    foodDiv.appendChild(foodH2);
    foodH2.textContent = "Food";

    // ================= foodlist =============================
    const foodListDiv = document.createElement("div");
    const foodMenuDiv = document.createElement("div");
    foodMenuDiv.setAttribute("class", "cardMenuDiv");

    const foodCard1 = document.createElement("div");
    foodCard1.setAttribute("class", "card");
    const foodCard2 = document.createElement("div");
    foodCard2.setAttribute("class", "card");
    const foodCard3 = document.createElement("div");
    foodCard3.setAttribute("class", "card");
    const foodCard4 = document.createElement("div");
    foodCard4.setAttribute("class", "card");

    foodDiv.appendChild(foodMenuDiv);
    foodMenuDiv.appendChild(foodCard1);
    foodMenuDiv.appendChild(foodCard2);
    foodMenuDiv.appendChild(foodCard3);
    foodMenuDiv.appendChild(foodCard4);

    // description divs
    const foodDescriptionDiv = document.createElement("div");
    foodDescriptionDiv.setAttribute("class", "descDiv");

    const foodDescriptionDiv2 = document.createElement("div");
    foodDescriptionDiv2.setAttribute("class", "descDiv");

    const foodDescriptionDiv3 = document.createElement("div");
    foodDescriptionDiv3.setAttribute("class", "descDiv");

    const foodDescriptionDiv4 = document.createElement("div");
    foodDescriptionDiv4.setAttribute("class", "descDiv");

    // inside of description
    const foodName = document.createElement("h2");
    const foodPrice = document.createElement("h2");
    const foodDescription = document.createElement("p");

    const foodName2 = document.createElement("h2");
    const foodPrice2 = document.createElement("h2");
    const foodDescription2 = document.createElement("p");

    const foodName3 = document.createElement("h2");
    const foodPrice3 = document.createElement("h2");
    const foodDescription3 = document.createElement("p");

    const foodName4 = document.createElement("h2");
    const foodPrice4 = document.createElement("h2");
    const foodDescription4 = document.createElement("p");

    foodCard1.appendChild(foodDescriptionDiv);
    foodCard2.appendChild(foodDescriptionDiv2);
    foodCard3.appendChild(foodDescriptionDiv3);
    foodCard4.appendChild(foodDescriptionDiv4);

    // first food card
    foodDescriptionDiv.appendChild(foodName);
    foodDescriptionDiv.appendChild(foodPrice);
    foodDescriptionDiv.appendChild(foodDescription);
    foodName.textContent = "Oleato";
    foodPrice.textContent = "$4";
    foodDescription.textContent = "Place holder";

    // second food card
    foodDescriptionDiv2.appendChild(foodName2);
    foodDescriptionDiv2.appendChild(foodPrice2);
    foodDescriptionDiv2.appendChild(foodDescription2);
    foodName2.textContent = "Coffee";
    foodPrice2.textContent = "$2";
    foodDescription2.textContent = "Place holder";

    // third card
    foodDescriptionDiv3.appendChild(foodName3);
    foodDescriptionDiv3.appendChild(foodPrice3);
    foodDescriptionDiv3.appendChild(foodDescription3);
    foodName3.textContent = "Tea";
    foodPrice3.textContent = "$2";
    foodDescription3.textContent = "Place holder";

    // fourth card
    foodDescriptionDiv4.appendChild(foodName4);
    foodDescriptionDiv4.appendChild(foodPrice4);
    foodDescriptionDiv4.appendChild(foodDescription4);
    foodName4.textContent = "Cold Drinks";
    foodPrice4.textContent = "$5";
    foodDescription4.textContent = "Place holder";

    // creating images
    const myBakery = new Image();
    myBakery.src = bakery;

    const myBreakFast = new Image();
    myBreakFast.src = breakfast;

    const myLunch = new Image();
    myLunch.src = lunch;

    const mySteak = new Image();
    mySteak.src = steak;

    // image divs
    const foodMenuImageDiv = document.createElement("div");
    const foodMenuImageDiv2 = document.createElement("div");
    const foodMenuImageDiv3 = document.createElement("div");
    const foodMenuImageDiv4 = document.createElement("div");

    foodMenuImageDiv.setAttribute("class", "menuImage");
    foodMenuImageDiv2.setAttribute("class", "menuImage");
    foodMenuImageDiv3.setAttribute("class", "menuImage");
    foodMenuImageDiv4.setAttribute("class", "menuImage");

    foodCard1.appendChild(foodMenuImageDiv);
    foodCard2.appendChild(foodMenuImageDiv2);
    foodCard3.appendChild(foodMenuImageDiv3);
    foodCard4.appendChild(foodMenuImageDiv4);

    foodMenuImageDiv.appendChild(myBakery);
    foodMenuImageDiv2.appendChild(myBreakFast);
    foodMenuImageDiv3.appendChild(myLunch);
    foodMenuImageDiv4.appendChild(mySteak);

    // Card menu divs
    foodDiv.appendChild(foodMenuDiv);
    foodMenuDiv.appendChild(foodCard1);
    foodMenuDiv.appendChild(foodCard2);
    foodMenuDiv.appendChild(foodCard3);
    foodMenuDiv.appendChild(foodCard4);

    // Cards with 2 divs
    foodCard1.appendChild(foodDescriptionDiv);
    foodCard1.appendChild(foodMenuImageDiv);

    foodCard2.appendChild(foodDescriptionDiv2);
    foodCard2.appendChild(foodMenuImageDiv2);

    foodCard3.appendChild(foodDescriptionDiv3);
    foodCard3.appendChild(foodMenuImageDiv3);

    foodCard4.appendChild(foodDescriptionDiv4);
    foodCard4.appendChild(foodMenuImageDiv4);

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
