// const URL = "./assets/api.json";

// const bla = new Request("../assets/api.json");

// const fetchCharacter = () => {
//   fetch(bla)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => {
//       console.log(error);
//     });
// };

// fetchCharacter();

// ik wil een occlick op het i element
// wlke kijket welke id ik heb geslecreerd en toont daar de juiste info bij
// optie is ook nog een for loop met een div er omheen op id

let CharacterJson = [
  {
    id: 1,
    title: "Wie ben ik ?",
    description:
      "Ik ben een enthousiaste HBO opgeleide Front-End Developer en Scrum master. Met een passie voor innovatie, wil altijd op de hoogte zijn van de laatste trends. ",
    symbol: "fas fa-smile-wink",
  },
  {
    id: 2,
    title: "Persoonlijke eigenschappen",
    description:
      "Ik ben een echt mensen mens, heb een gevoel voor humor. Ben bijna altijd vrolijk. Collega's omschrijven mij als gezellig, gedreven, doorzettingsvermogen, creatief, communicatief, analytisch en beschik over een probleemoplossend vermogen. ",
    symbol: "fas fa-user-tag",
  },
  {
    id: 3,
    title: "Team",
    description:
      "Ik Krijg energie van het creëren van coole dingen met andere geeks. Het liefst werk ik samen met andere ontwikkelaars en draag bij aan een goede sfeer binnen het team.  ",
    symbol: "fas fa-users",
  },
  {
    id: 4,
    title: "Developmentstack",
    description:
      "Ik ben een enthousiast aan het ontwikkelen met HTML, CSS, JS, TS, React en Styled components ",
    symbol: "fas fa-code",
  },
  {
    id: 5,
    title: "Ambities",
    description:
      "Mijn ambitie is om een goede senior Front-end developer te worden die het team CoDE goed kan begeleiden en ondersteunen op alle fronten ",
    symbol: "fas fa-user-cog",
  },
  {
    id: 6,
    title: "Vrijetijd",
    description:
      "De meeste vrije tijd breng ik met mijn lieve dochter Lenthè door. Uiteraard is ontwikkellen een een grote hobby daarnaast heb ik nog een paard en een huis van 100 jaar oud waar het nodige aan moet gebeuren. Daar gaat de rest van de tijd inzitten",
    symbol: "fas fa-battery-three-quarters",
  },
  {
    id: 7,
    title: "Interest",
    description:
      "Mijn interesses liggen bij  HTML, CSS, JS, TS, React en Styled components daar wil ik mij eerst om focussen en daarna kijk ik verder",
    symbol: "fas fa-glasses",
  },
  {
    id: 8,
    title: "Signature",
    description:
      "Wat absoluut kenmerkend aan mij is, is dat ik altijd een goede sfeer in het team probeer te behouden, mensen samen breng en iedereen probeer te helpen waar ik kan.",
    symbol: "fas fa-signature",
  },
  {
    id: 9,
    title: "Specialties",
    description:
      "Ja dat vind ik altijd een beetje lastig om over mijzelf te zeggen. Mensen blijven graag eten als ik kook. Ben goed in het organiseren van dingen. ",
    symbol: "fas fa-grin-stars",
  },
];

function showKarakter() {
  var state = document.getElementsByClassName("karakter__revealer");
  var aNode = state[0];
  aNode.style.visibility =
    aNode.style.visibility === "hidden" ? "visible" : "hidden";
}

const iconKarakter = (characters) => {
  const characterDivID = document.querySelector("#karakter__icon_wrapper");
  characters.forEach((character) => {
    const characterDiv = document.createElement("div");
    const characterButton = document.createElement("button");
    const characterIcon = document.createElement("i");
    const characterInnerDiv = document.createElement("div");
    const characterTitle = document.createElement("h1");
    const characterDiscription = document.createElement("p");

    characterButton.classList.add("characterBtn");
    characterButton.addEventListener("click", showMore);
    characterIcon.setAttribute("class", `${character.symbol}`); // classlist maken
    characterInnerDiv.classList.add("characterInnerDiv");
    characterTitle.classList.add("characterTitle_moreInfo");
    characterTitle.innerText = character.title;

    characterDiscription.classList.add("characterDiscription_moreInfo");
    characterDiscription.innerText = character.description;

    characterDivID.appendChild(characterDiv);
    characterDiv.appendChild(characterButton);
    characterButton.appendChild(characterIcon);
    characterDiv.appendChild(characterInnerDiv);
    characterInnerDiv.appendChild(characterTitle);
    characterInnerDiv.appendChild(characterDiscription);
  });
};

const characters = CharacterJson;
iconKarakter(characters);

// function typedOut() {
//   let text = "jsdjskdjwkjsdk jdkwjnkwdn ";
//   let putInArray = text.split("");
//   let timer;
//   function loopText() {
//     if (putInArray.length > 0) {
//       document.getElementById("type_text").innerText += putInArray.shift();
//     } else {
//       clearTimeout(timer);
//       return false;
//     }
//     timer = setTimeout("loopText()", 70);
//   }
//   loopText();
// }
// typedOut();

function showMore(kip) {
  console.log(kip);
  let state = document.querySelectorAll(".characterInnerDiv");
  console.log(state);
  //console.log(NodeList);
  let idArray = Array.from(state);
  console.log(idArray);
  // typedOut();
  let aNode = state[5];
  aNode.style.display =
    // aNode.style.visibility === "hidden" ? "visible" : "hidden";
    aNode.style.display === "none" ? "block" : "none";
}

//document.querySelectorAll(".characterBtn").addEventListener("click", showMore);

// ik wil eem id om de container te plaatsen
// dan een div
// in die div
// een button om een i tag
// een h1
// en een p

// als je op de button klikt dan gaat er een event af
// event querySelectorall
// dat event zorget er voor dat de h1 en p zichtbaar worden

// volgende uitdagingen zijn
// test letter voor letter
// juiste tekst bij juiste icon
