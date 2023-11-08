const yearSelector = document.querySelector("#yearsSelect");
const brandSelector = document.querySelector("#brands");
const modelSelector = document.querySelector("#models");
const statusSelector = document.querySelector("#status");

const cardColumn = document.querySelector("#cardColumn");
const valorActualDeBrand = "";

const DataCards = [];

const star = `<img src="img/cars_sales/star_rating.svg" alt="Search Icon" />`;
const starWhite = `<img src="img/cars_sales/star_rating-withe.svg" alt="Search Icon" />`;

// Cars

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    json.forEach((element) => {
      let contenedorStars = "";
      for (let i = 0; i < element.rating; i++) {
        contenedorStars += star;
      }
      let contadorRating = 5 - element.rating;
      for (let i = 0; i < contadorRating; i++) {
        contenedorStars += starWhite;
      }

      cardColumn.innerHTML += `
<div class="card mb-3">
<div class="row d-flex justify-content-center ">

  <div id="imgDiv" class=" col-sm-10 col-md-4 col-lg-2 col-lg-4">
    <img
      src="${element.image}"
      class="car img-fluid"
      alt="..."
    />
      
  </div>

  <div id ="contenido-card" class=" col-md-6 col-lg-8 card-info">
    <div class = "card-description">
    <div  class = "cardDates ">
    <h3 class = "card-title">${element.model}</h3>

    <div class="subTitle-container">
    <p>${element.year} | USD ${element.price_usd} | <p>  ${contenedorStars}</p>
  

     
    </p>

  </div>
    </div>

     
    </div>

      <p class="card-info">${element.description}
      </p>
      <div class="card-buttons mt-2">
        <button class="comprar-button">
          <i class="bi bi-cart3"> </i>Comprar
        </button>
        <button class="info-buttons">
          <i class="bi bi-plus-square-dotted"> </i>Más Información
        </button>
        <button class="compartir-buttons">
        <i class="bi bi-share-fill"> </i>Compartir
        </button>
      </div>
    </div>
  </div>
</div>
</div>`;
    });
  })
  .catch(function (err) {
    console.log("Error");
  });

// Filter

// Brands

fetch("https://ha-front-api-proyecto-final.vercel.app/brands")
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    for (const i of json) {
      const option = document.createElement("option");
      option.text = i;
      option.value = i;
      brandSelector.add(option);
    }
  })
  .catch(function (err) {
    console.log("Error");
  });

// Models

brandSelector.addEventListener("change", function () {
  fetch(
    "https://ha-front-api-proyecto-final.vercel.app/models?brand=" +
      brandSelector.value
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      modelSelector.innerHTML = "";
      for (const i of json) {
        console.log(i);

        const option = document.createElement("option");
        option.text = i;
        option.value = i;
        modelSelector.add(option);
      }
    })
    .catch(function (err) {
      console.log("Error");
    });
});

// Years

for (let i = 2023; i >= 1900; i--) {
  const option = document.createElement("option");
  option.text = i;
  yearSelector.add(option);
}

// Modal

// Form

const submitButton = document.querySelector(".submitButton");
const valorInputName = document.querySelector(".valorInputName");
const valorInputMail = document.querySelector(".valorInputMail");
const valorInputMessage = document.querySelector(".valueInputMessage");

submitButton.addEventListener("click", function () {
  if (
    valorInputName.value === "" ||
    valorInputMail.value === "" ||
    valorInputMessage.value === ""
  ) {
    
  }
});

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

const filterButton = document
  .querySelector(".filter-button")
  .addEventListener("click", function () {
    cardColumn.innerHTML = "";

    //Valores de el filtro

    let yearsSelect = document.querySelector(".yearsSelect");
    let selectMarcas = document.querySelector(".select-marcas");
    let selectModelos = document.querySelector(".select-modelos");
    let selectEstados = document.querySelector(".select-estados");

    fetch(
      "https://ha-front-api-proyecto-final.vercel.app/cars?year=" +
        yearSelector.value +
        "&brand=" +
        selectMarcas.value +
        "&model=" +
        selectModelos.value +
        "&" +
        "status=" +
        selectEstados.value
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        if (json == "") {
          cardColumn.innerHTML = `<div class="alert alert-danger" role="alert">
 No hay autos disponibles
 </div>`;
        } else {
          json.forEach((element) => {
            let contenedorStars = "";
            for (let i = 0; i < element.rating; i++) {
              contenedorStars += star;
            }
            let contadorRating = 5 - element.rating;
            for (let i = 0; i < contadorRating; i++) {
              contenedorStars += starWhite;
            }

            cardColumn.innerHTML += `
<div class="card mb-3">
<div class="row d-flex justify-content-center ">
<div id="imgDiv" class=" col-sm-10 col-md-4 col-lg-2 col-lg-4">
<img
  src="${element.image}"
  class="car img-fluid"
  alt="..."
/>
  
</div>
<div id="contenido-card" class=" col-md-6 col-lg-8 card-info">
<div class="card-description">
<div  class = "cardDates ">
<h5 class="card-title">${element.model}</h5>
<div class="subTitle-container d-inline">
<p>${element.year} | USD ${element.price_usd} | <p>  ${contenedorStars}</p>

 
</p>
</div>
</div>
 
</div>
  <p class="card-info">${element.description}
  </p>
  <div class="card-buttons mt-2">
    <button class="comprar-button">
      <i class="bi bi-cart3"> </i>Comprar
    </button>
    <button class="info-compartir-buttons">
      <i class="bi bi-plus-square-dotted"> </i>Más Información
    </button>
    <button class="info-compartir-buttons">
      <i class="bi bi-share-fill"> </i>Compartir
    </button>
  </div>
</div>
</div>
</div>
</div>`;
          });
        }
      })
      .catch(function (err) {
        console.log("Error");
      });
  });

