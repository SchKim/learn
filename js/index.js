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
    title: "Vrije tijd",
    description:
      "De meeste vrije tijd breng ik met mijn lieve dochter Lenthè door. Uiteraard is ontwikkellen een een grote hobby daarnaast heb ik nog een paard en een huis van 100 jaar oud waar het nodige aan moet gebeuren. Daar gaat de rest van de tijd inzitten",
    symbol: "fas fa-battery-three-quarters",
  },
  {
    id: 7,
    title: "Interest",
    description:
      "Mijn interesses liggen bij  HTML, CSS, JS, TS, React en Styled components daar wil ik mij eerst om focussen en daarna kijk ik verder. ",
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
      "Ja dat vind ik altijd een beetje lastig om over mijzelf te zeggen. Mijn dochter vind mij de liefste Mama, dat is ook mijn grootste specialiteit. Mensen blijven graag eten als ik kook. Ben goed in het organiseren van dingen. ",
    symbol: "fas fa-grin-stars",
  },
];

const textDiv = document.querySelector(".karakter_text_wrapper");
const characters = CharacterJson;

function showKarakter() {
  let state = document.getElementsByClassName("karakter__revealer");
  let aNode = state[0];
  aNode.style.display = aNode.style.display === "none" ? "block" : "none";
}
function showKnowledgeBook() {
  let state = document.getElementsByClassName("knowledgeBook__revealer");
  let aNode = state[0];
  aNode.style.display = aNode.style.display === "none" ? "block" : "none";
}

const iconKarakter = (characters) => {
  const characterDivID = document.querySelector("#karakter__icon_wrapper");
  characters.forEach((character) => {
    const characterDiv = document.createElement("div");
    const characterButton = document.createElement("button");
    const characterIcon = document.createElement("i");
    const characterTitle = document.createElement("h1");
    const characterDiscription = document.createElement("p");

    characterButton.classList.add("characterBtn");
    // characterButton.addEventListener(
    //   "click",
    //   (event) => showMore(character.description, textDiv) // ik kan hier het carajter id meegeven

    characterButton.addEventListener("click", (event) =>
      main(character.description, textDiv, character.id)
    );
    characterIcon.setAttribute("class", `${character.symbol}`);
    characterTitle.classList.add("characterTitle_moreInfo");
    characterTitle.innerText = character.title;
    characterDiscription.classList.add("characterDiscription_moreInfo");
    characterDivID.appendChild(characterDiv);
    characterDiv.appendChild(characterButton);
    characterButton.appendChild(characterIcon);
  });
};

function showMore(texts) {
  const splitText = texts.split("");
  return splitText;
}

//in var opslaan hoevell keer i text aan het lopen en wlke knop
//hoeveel keer looptext
// clear time out triggeren al je wilt stoppen ]
// als er een text aan het lopee is is de text van dezelede knop aan het lopen doeniks. i het een andere knp willes text
let timer = 0;

function loopText(textLoss, show) {
  if (textLoss) {
    if (textLoss.length > 0) {
      show.innerHTML += textLoss.shift();
    } else {
      console.log(timer);
      stopTimer(timer);
      return false;
    }
    timer = setTimeout(function () {
      loopText(textLoss, show);
    }, 70);
  }
}
//waar moet dit staan met die higher order dinges

function stopTimer() {
  clearTimeout(timer);
}
function main(text, targetDiv, id) {
  console.log(text);
  // console.log(targetDiv);
  // console.log(id);

  const last = id;
  // console.log(id);
  // console.log(id);
  // console.log(last != last);
  // if (last == last) {
  //   console.log("ik ben if");
  //   stopTimer(timer);
  //   return false;
  // } else {
  //   console.log("ik ben else");
  showMore(text);
  const gesplitteText = showMore(text); // ??????? waarom moet ik text als parameter hier mee geven ?? shormore heeft toch mij uitput ?
  console.log(gesplitteText);
  //uitkomst shormmore in loop text & looptext uit show more halen
  loopText(gesplitteText, targetDiv);
}
//}

// looptext niet herhandelijk aanroepen vanuit loop text maar roept andere functie aan
//inner functie in set loopt ext timer buiten loopt text als timer niet 0 is
// high order stuctuur
iconKarakter(characters);

//main krijgt 2 aggumenten binnen text , targetdiv
// text geeft die mee aam showmore daar de uitkomst van
// mpet worden gebruikt als para meter voor loop text + de div
// dit voor komt
