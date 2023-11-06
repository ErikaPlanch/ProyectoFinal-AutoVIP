const yearSelector = document.querySelector("#yearsSelect");
const brandSelector = document.querySelector("#brands");
const modelSelector = document.querySelector("#models");
const statusSelector = document.querySelector("#status");

const cardColumn = document.querySelector("#cardColumn");
const valorActualDeBrand = "";

const DataCards = [];

const star = `<i class="bi bi-star-fill"> </i>`;

// Autos

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    json.forEach((element) => {
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

    <div class="subTitle-container">
    <p>${element.year} | USD ${element.price_usd} | <p>  ${star}</p>
  

     
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
  })
  .catch(function (err) {
    console.log("Error");
  });

// Marcas

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

// Modelos

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

/* status */

for (i = 0; i <= 1; i++) {
  const option = document.createElement("option");
  option.text = i;
  statusSelector.add(option);
}

/* status */

/* filtro */

/* year */

for (i = 1900; i <= 2023; i++) {
  const option = document.createElement("option");
  option.text = i;
  yearSelector.add(option);
}

/* year */

/* filtro */

/* formulario logic */

const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener("submit", function () {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
});
/* formulario logic */

/* modelo selecion actual */
