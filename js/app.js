const yearSelector = document.querySelector("#years");
const brandSelector = document.querySelector("#brands");
const modelSelector = document.querySelector("#models");
const statusSelector = document.querySelector("#status");

const cardColumn = document.querySelector("#cardColumn")

const DataCards = []


// for (let i = 1900; i <= 2023; i++) {
  // yearSelector.insertAdjacentHTML += `<option value="${i}">${i}</option>`;
// }

// Autos

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    json.forEach(element => {
    
      cardColumn.innerHTML += `
<div class="card mb-3">
<div class="row g-0">
  <div class="col-6 col-lg-4">
    <img
      src="${element.image}"
      class="img-fluid"
      alt="..."
    />
  </div>
  <div class="col-md-6 col-lg-6 card-info">
    <div class="card-description">
      <h5 class="card-title">${element.model}</h5>
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
</div>`

      
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
  .then(function (json) {})
  .catch(function (err) {
    console.log("Error");
  });

// Modelos

fetch("https://ha-front-api-proyecto-final.vercel.app/models?brand=Audi")
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {})
  .catch(function (err) {
    console.log("Error");
  });


  /* formulario logic */

  