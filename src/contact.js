import steak from "./person-cooking-meats.png";

export default function contactContent() {
    const content = document.querySelector("#content");
    const contactContainer = document.createElement("div");
    const contactH1 = document.createElement("h1");
    contactContainer.setAttribute("class", "contactContainer");

    content.appendChild(contactContainer);
    contactContainer.appendChild(contactH1);
    contactH1.textContent = "Contact Us";

    // =================== contact directly div
    const directContact = document.createElement("div");
    const directContactInDiv = document.createElement("div");
    const directContactH2 = document.createElement("h2");
    directContact.setAttribute("class", "directContact");

    contactContainer.appendChild(directContact);
    directContact.appendChild(directContactInDiv);

    directContactInDiv.appendChild(directContactH2);
    directContactH2.textContent = "Contact us directly";

    // contact directly list
    const directContactListUl = document.createElement("ul");
    const directContactList1 = document.createElement("li");
    const directContactList2 = document.createElement("li");
    const directContactList3 = document.createElement("li");

    // image
    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "image-div");
    const mySteak = new Image();
    mySteak.src = steak;
    imageDiv.appendChild(mySteak);
    directContact.appendChild(imageDiv);

    directContactInDiv.appendChild(directContactListUl);
    directContactListUl.appendChild(directContactList1);
    directContactListUl.appendChild(directContactList2);
    directContactListUl.appendChild(directContactList3);

    directContactList1.textContent = "Restaurant's Manager";
    directContactList2.textContent = "Phone #: 012-345-6789";
    directContactList3.textContent =
        "Email: Stansdelicousfakerestaurant@gmail.com";

    // contact through our social media
    const socialMediaDIv = document.createElement("div");
    const socialMediaH2 = document.createElement("h2");

    const socialMediaUl = document.createElement("ul");
    const socialMediaList1 = document.createElement("li");
    const socialMediaList2 = document.createElement("li");
    const socialMediaList3 = document.createElement("li");

    const socialMediaLink1 = document.createElement("a");
    const socialMediaLink2 = document.createElement("a");
    const socialMediaLink3 = document.createElement("a");

    socialMediaDIv.setAttribute("class", "socialMediaDiv");

    contactContainer.appendChild(socialMediaDIv);
    socialMediaDIv.appendChild(socialMediaH2);
    socialMediaDIv.appendChild(socialMediaUl);

    socialMediaUl.appendChild(socialMediaList1);
    socialMediaUl.appendChild(socialMediaList2);
    socialMediaUl.appendChild(socialMediaList3);

    socialMediaList1.appendChild(socialMediaLink1);
    socialMediaList2.appendChild(socialMediaLink2);
    socialMediaList3.appendChild(socialMediaLink3);

    socialMediaH2.textContent = "Our Social Medias";
    socialMediaLink1.textContent = "Twitter";
    socialMediaLink2.textContent = "Instangram";
    socialMediaLink3.textContent = "Facebook Meta";
}
