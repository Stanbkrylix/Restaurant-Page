// import "./style.css";
import smallP from "./smallAboutUsParagraph";
import steak from "../src/image/meat-with-vegetables-2.0.png";

export default function homeContent() {
    const homePageContent = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    const restaurantName = document.createElement("h1");
    const restaurantPic = document.createElement("div");
    const aboutUs = document.createElement("div");
    const aboutUsH2 = document.createElement("h2");
    const aboutUsP = document.createElement("p");
    const hoursOfOp = document.createElement("div");
    const hourH2 = document.createElement("h2");

    const hoursList = document.createElement("ul");
    const listOfHours = document.createElement("li");
    const listOfHours2 = document.createElement("li");
    const listOfHours3 = document.createElement("li");
    const listOfHours4 = document.createElement("li");
    const listOfHours5 = document.createElement("li");
    const listOfHours6 = document.createElement("li");
    const listOfHours7 = document.createElement("li");

    const location = document.createElement("div");
    const locationH2 = document.createElement("h2");
    const locationP = document.createElement("p");

    const mySteak = new Image();
    mySteak.src = steak;
    restaurantPic.appendChild(mySteak);

    hoursOfOp.setAttribute("class", "hoursOfOp");
    homePageContent.appendChild(homeContainer);

    homeContainer.appendChild(restaurantName);
    homeContainer.appendChild(restaurantPic);
    homeContainer.appendChild(aboutUs);
    homeContainer.appendChild(hoursOfOp);
    homeContainer.appendChild(location);

    aboutUs.appendChild(aboutUsH2);
    aboutUs.appendChild(aboutUsP);

    hoursOfOp.appendChild(hourH2);
    hoursOfOp.appendChild(hoursList);
    hoursList.appendChild(listOfHours);
    hoursList.appendChild(listOfHours2);
    hoursList.appendChild(listOfHours3);
    hoursList.appendChild(listOfHours4);
    hoursList.appendChild(listOfHours5);
    hoursList.appendChild(listOfHours6);
    hoursList.appendChild(listOfHours7);

    location.appendChild(locationH2);
    location.appendChild(locationP);

    homeContainer.setAttribute("class", "homeContainer");
    restaurantPic.setAttribute("class", "restaurantPic");
    location.setAttribute("class", "location");

    restaurantName.textContent = "Stan's Delicious";
    aboutUsH2.textContent = "About Us";
    aboutUsP.textContent = smallP();
    hourH2.textContent = "Hours of Operation";
    listOfHours.textContent = " Sunday: 8am - 11pm";
    listOfHours2.textContent = " Monday: 8am - 11pm";
    listOfHours3.textContent = " Tuesday: 8am - 11pm";
    listOfHours4.textContent = " Wednesday: 8am - 11pm";
    listOfHours5.textContent = " Thursday: 8am - 11pm";
    listOfHours6.textContent = " Friday: 8am - 11pm";
    listOfHours7.textContent = " Saturday: 8am - 11pm";

    locationH2.textContent = "Location";
    locationP.textContent = `1234 Elm Street Cityville, Stateborough 56789 Countryland`;
}
