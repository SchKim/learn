// const URL = "./assets/api.json";

// const fetchCharacter = () => {
//   fetch("../assets/api.json")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => {
//       console.log(error);
//     });
// };

// fetchCharacter();

let CharacterJson = [
  {
    id: 1,
    title: "Wie ben ik ?",
    description:
      "Ik ben een enthousiaste HBO opgeleide Front-End Developer en Scrum master. Met een passie voor innovatie, wil altijd op de hoogte zijn van de laatste trends. ",
    symbol: "https://rickandmortyapi.com/api/location/1",
  },
  {
    id: 2,
    title: "Persoonlijke eigenschappen",
    description:
      "Ik ben een echt mensen mens, heb een gevoel voor humor. Ben bijna altijd vrolijk. Collega's omschrijven mij als gezellig, gedreven, doorzettingsvermogen, creatief, communicatief, analytisch en beschik over een probleemoplossend vermogen. ",
    symbol: "https://rickandmortyapi.com/api/location/1",
  },
  {
    id: 3,
    title: "Team",
    description:
      "Ik Krijg energie van het creëren van coole dingen met andere geeks. Het liefst werk ik samen met andere ontwikkelaars en draag bij aan een goede sfeer binnen het team.  ",
    symbol: "https://rickandmortyapi.com/api/location/1",
  },
  {
    id: 4,
    title: "Development stack",
    description:
      "Ik ben een enthousiast aan het ontwikkelen met HTML, CSS, JS, TS, React en Styled components ",
    symbol: "https://rickandmortyapi.com/api/location/1",
  },
  {
    id: 5,
    title: "Ambities",
    description:
      "Mijn ambitie is om een goede senior Front-end developer te worden die het team CoDE goed kan begeleiden en ondersteunen op alle fronten ",
    symbol: "https://rickandmortyapi.com/api/location/1",
  },
  {
    id: 6,
    title: "Hobby's",
    description:
      "Uiteraard is ontwikkellen een een grote hobby daarnaast heb ik nog een paard en een huis van 100 jaar oud waar het nodige aan moet gebeuren ",
    symbol: "https://rickandmortyapi.com/api/location/1",
  },
  {
    id: 7,
    title: "Interest",
    description:
      "Mijn interesses liggen bij  HTML, CSS, JS, TS, React en Styled components daar wil ik mij eerst om focussen en daarna kijk ik verder",
    symbol: "https://rickandmortyapi.com/api/location/1",
  },
  {
    id: 8,
    title: "Signature",
    description:
      "Wat absoluut kenmerkend aan mij is, is dat ik altijd een goede sfeer in het team probeer te behouden, mensen samen breng en iedereen probeer te helpen waar ik kan.",
    symbol: "https://rickandmortyapi.com/api/location/1",
  },
  {
    id: 9,
    title: "Specialties",
    description:
      "Ja dat vind ik altijd een beetje lastig om over mijzelf te zeggen. Mensen blijven graag eten als ik kook. Ben goed in het organiseren van dingen. ",
    symbol: "https://rickandmortyapi.com/api/location/1",
  },
];

let characters = CharacterJson;
console.log(characters);

const iconKarakter = (characters) => {
  const characterDiv = document.querySelector(".karakter__icon_wrapper");
  characters.forEach((character) => {
    const characterTitle = document.createElement("h1");
    const characterDiscription = document.createElement("p");
    const characterIcon = document.createElement("i");

    characterTitle.innerHTML = `Titele: ${character.title}`;
    characterDiscription.innerText = `Omschrijving: € ${character.description}`;
    characterIcon.setAttribute("class", `${character.symbol}`);

    characterDiv.append(characterTitle);
    characterDiv.append(characterDiscription);
    characterDiv.append(characterIcon);
  });
};
// iconKarakter();
console.log(CharacterJson[0].title);

function showKarakter() {
  var state = document.getElementsByClassName("karakter__revealer");
  var aNode = state[0];
  aNode.style.visibility =
    aNode.style.visibility === "hidden" ? "visible" : "hidden";
}
