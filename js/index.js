const URL = "https://fakestoreapi.com/products";
const parm = "products";

// promises => goede regel om aan te houden is dat wanneer je een promise hebt die afhankelijk is van een andere promise dat je async/await gebruikt

const fetchProducts = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((products) => showProducts(products))
    .catch((rejectionReason) => console.log(rejectionReason));

  showProducts = (products) => {
    const productDiv = document.querySelector("#data1");
    products.forEach((product) => {
      const productTitle = document.createElement("p");
      const productPrice = document.createElement("div");
      const productImg = document.createElement("img");

      productTitle.innerText = `titele: ${product.title}`;
      productPrice.innerHTML = `Price: € ${product.price}`;
      productImg.setAttribute("src", `${product.image}`);
      productImg.setAttribute("width", "300px");

      productDiv.append(productTitle);
      productDiv.append(productPrice);
      productDiv.append(productImg);
    });
  };
};

fetchProducts();

const getProducts = () => {
  fetch(URL)
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("gefaald");
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      renderResponse(jsonResponse);
      console.log(jsonResponse);
    });
};
getProducts();

// async await = de nieuwste =  vooral mooi als je meeredere requests wil uitvoeren die van elkaar afhankelijk zijn

async function fetchData() {
  try {
    const response = await fetch(URL);

    jsonResponse = response.json();
    console.log(jsonResponse);
  } catch (err) {
    console.log(err);
  }
}
fetchData();

//requests XHR

const ajaxFunction = () => {
  const endpiont = `${URL}`;
  const XHR = new XMLHttpRequest();
  XHR.responseType = "json";
  XHR.onreadystatechange = () => {
    if (XHR.readyState === XMLHttpRequest.DONE) {
      let renderResponse = XHR.response;
      console.log(renderResponse);
    }
  };
  XHR.open("GET", endpiont);
  XHR.send();
};
ajaxFunction();

//Request aysnc awiat & fetch

const newStuff = async () => {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

newStuff();

const renderResponse = (jsonResponse) => {};

function showKarakter() {
  var state = document.getElementsByClassName("karakter__revealer");
  var aNode = state[0];
  aNode.style.visibility =
    aNode.style.visibility === "hidden" ? "visible" : "hidden";
}

// promise bestaan pas vanaf ES6
