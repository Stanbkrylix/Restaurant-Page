import Oleato from "../src/image/Oleato.jpg";
import coffees from "../src/image/hot-coffees.jpg";
import tea from "../src/image/Tea.jpg";
import coldDrinks from "../src/image/cold-drinks.jpg";

import bakery from "../src/image/Bakery.jpg";
import breakfast from "../src/image/Breakfast.jpg";
import lunch from "../src/image/lunch.jpg";
import steak from "../src/image/Steak-Unsplash.jpg";

const drinkContentFunction = function (object) {
    // ===================== drinks ============================
    object.menuContainer.appendChild(object.drinkDiv);
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
    object.drinkName.textContent = "Stan's Coffee";
    object.drinkPrice.textContent = "$4";
    object.drinkDescription.textContent = ` 
     Stan's coffee is often enjoyed with various additions like milk,
     sugar, or flavored syrups, making it a versatile and beloved 
     in our restaurant enjoyed by people all from diferent spots in the world.`;

    // second card
    object.drinkDescriptionDiv2.appendChild(object.drinkName2);
    object.drinkDescriptionDiv2.appendChild(object.drinkPrice2);
    object.drinkDescriptionDiv2.appendChild(object.drinkDescription2);
    object.drinkName2.textContent = "Coffee";
    object.drinkPrice2.textContent = "$2";
    object.drinkDescription2.textContent = `
     The original coffee is typically served hot and has a rich, dark color with a pleasant and energizing taste.
     The flavor can vary depending on the type of coffee bean, roast level, and brewing method used.
    `;

    // third card
    object.drinkDescriptionDiv3.appendChild(object.drinkName3);
    object.drinkDescriptionDiv3.appendChild(object.drinkPrice3);
    object.drinkDescriptionDiv3.appendChild(object.drinkDescription3);
    object.drinkName3.textContent = "Tea";
    object.drinkPrice3.textContent = "$2";
    object.drinkDescription3.textContent = `
    from robust and earthy to delicate and floral, 
    depending on the type and preparation. Enjoyed our tea hot or cold.
    `;

    // fourth card
    object.drinkDescriptionDiv4.appendChild(object.drinkName4);
    object.drinkDescriptionDiv4.appendChild(object.drinkPrice4);
    object.drinkDescriptionDiv4.appendChild(object.drinkDescription4);
    object.drinkName4.textContent = "Cold Drinks";
    object.drinkPrice4.textContent = "$5";
    object.drinkDescription4.textContent = `
    Our cold drinks menus contains: iced coffee, ice tea,lemonade
    soft drinks, ice latte, smoothies,cold water infusion, and milk shakes.
    `;

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

    // // ================= drinklist =============================
    const drinkCardMenus = document.createElement("div");

    // // cards
    const drinkCard1 = document.createElement("div");
    const drinkCard2 = document.createElement("div");
    const drinkCard3 = document.createElement("div");
    const drinkCard4 = document.createElement("div");

    // // descriptionDivs
    const drinkDescriptionDiv = document.createElement("div");
    const drinkDescriptionDiv2 = document.createElement("div");
    const drinkDescriptionDiv3 = document.createElement("div");
    const drinkDescriptionDiv4 = document.createElement("div");

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

    // // creating images
    const myOleato = new Image();
    const myCoffees = new Image();
    const myTea = new Image();
    const myColdDrinks = new Image();

    // // for Image
    const drinkMenuImageDiv = document.createElement("div");
    const drinkMenuImageDiv2 = document.createElement("div");
    const drinkMenuImageDiv3 = document.createElement("div");
    const drinkMenuImageDiv4 = document.createElement("div");

    const drinkObject = {
        id: "drink",
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

    drinkContentFunction(drinkObject);

    //============ food section ======================

    const foodDiv = document.createElement("div");
    const foodH2 = document.createElement("h2");
    menuContainer.appendChild(foodDiv);
    foodDiv.appendChild(foodH2);
    foodH2.textContent = "Food";

    // ================= foodlist =============================
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
    foodName.textContent = "Bakery";
    foodPrice.textContent = "$8";
    foodDescription.textContent = `
    Our bakery area is filled with the delightful aroma of 
    freshly baked goods, offering an array of delicious pastries,
    bread, and cakes to satisfy any sweet craving.`;

    // second food card
    foodDescriptionDiv2.appendChild(foodName2);
    foodDescriptionDiv2.appendChild(foodPrice2);
    foodDescriptionDiv2.appendChild(foodDescription2);
    foodName2.textContent = "Breakfast";
    foodPrice2.textContent = "$12";
    foodDescription2.textContent = `
    A wholesome and delightful morning meal,
    consisting of various dishes such as eggs, 
    toast, cereal, fruits, and beverages like coffee or tea.
    `;

    // third card
    foodDescriptionDiv3.appendChild(foodName3);
    foodDescriptionDiv3.appendChild(foodPrice3);
    foodDescriptionDiv3.appendChild(foodDescription3);
    foodName3.textContent = "Lunch";
    foodPrice3.textContent = "$20";
    foodDescription3.textContent = `
     Our midday meal that offers a variety of savory options,
     ranging from sandwiches, salads, soups, and main courses, 
     providing nourishment and satisfaction.`;

    // fourth card
    foodDescriptionDiv4.appendChild(foodName4);
    foodDescriptionDiv4.appendChild(foodPrice4);
    foodDescriptionDiv4.appendChild(foodDescription4);
    foodName4.textContent = "Special Dish";
    foodPrice4.textContent = "$25";
    foodDescription4.textContent = `
    Our special dish is one of the best meal a person could eat,
    forever thats how that's how good it is.
    `;

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
}
