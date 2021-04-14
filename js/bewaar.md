const iconKarakter = (characters) => {
const characterDiv = document.querySelector("#karakter\_\_icon_wrapper");
characters.forEach((character) => {
const characterIcon = document.createElement("i");
const characterTitle = document.createElement("h2");
let tag = document.querySelector("h2");
const characterDiscription = document.createElement("p");

    characterIcon.setAttribute("class", `${character.symbol}`);
    characterTitle.innerText = character.title;
    //tag.setAttribute("class", `${character.title}`);
    characterDiscription.innerText = character.description;

    characterDiv.append(characterIcon);
    characterDiv.append(characterTitle);
    characterDiv.append(characterDiscription);

});
};

// nu selecteer ik de gehele div = niert de bedoeling
// hoe kan ik de i aanspreken

const characters = CharacterJson;
iconKarakter(characters);

// logica onclick zit op de i.. zit ook id bij
// ik moet dit proberen mee te geven om zo de juiste des erbij te tonen

document.querySelector("#karakter\_\_icon_wrapper").onclick = function () {
onClickIcon();
};

function onClickIcon() {
alert("hoi");
//to do syl op visible zetten visibility
//document.getElementById('karakter\_\_icon_wrapper').visibility.
}

// const characters = CharacterJson;

// for (const i in characters) {
// console.log(characters[i]);
// // icon = `<i src=">`
// x = `<p> ${characters[i].title}</p>`;
// }
// document.getElementById("karakter\_\_icon_wrapper").innerHTML = x;

///****\*\*****\_\_****\*\*****

const kim = `

    <div class="wrapper">
    <button class="characterIcon_moreInfo">
      <i class="${character.symbol} "></i>
    </button>
    <h1 class="characterTitle_moreInfo">${character.title}</h1>
    <p> ${character.description}</p>


    </div>`;

    const myFragment = document
      .createRange()

      .createContextualFragment(kim);

    document.body.appendChild(myFragment);

    function showMore() {
      const moreInfo = (document.querySelector(
        ".characterTitle_moreInfo"
      ).style.display = "block");
    }

    const a = document.querySelector("characterIcon_moreInfo");
    a.addEventListener("click", showMore);
    console.log(a);

});
};
//**\_\_\_**

const iconKarakter = (characters) => {
const characterDiv = document.querySelector("#karakter\_\_icon_wrapper");
characters.forEach((character) => {
const characterIcon = document.createElement("i");
characterIcon.classList.add("characterIcon_moreInfo");
const characterTitle = document.createElement("h1");
characterTitle.classList.add("characterTitle_moreInfo");
const characterDiscription = document.createElement("p");
characterDiscription.classList.add("characterDiscription_moreInfo");

    characterIcon.setAttribute("class", `${character.symbol}`);
    characterTitle.innerText = character.title;
    characterDiscription.innerText = character.description;

    characterDiv.append(characterIcon);
    characterDiv.append(characterTitle);
    characterDiv.append(characterDiscription);

});
};

// logica onclick zit op de i.. zit ook id bij
// ik moet dit proberen mee te geven om zo de juiste des erbij te tonen

// document.querySelector("#karakter\_\_icon_wrapper").onclick = function () {
// onClickIcon();
// };

// function onClickIcon() {
// alert("hoi");
// //to do syl op visible zetten visibility
// document.querySelector("h1").style.visibility = "visible";
// }
