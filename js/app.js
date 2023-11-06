const yearSelector = document.querySelector("#yearsSelect");
const brandSelector = document.querySelector("#brands");
const modelSelector = document.querySelector("#models");
const statusSelector = document.querySelector("#status");

const cardColumn = document.querySelector("#cardColumn")
const valorActualDeBrand = ""

const DataCards = []


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
  .then(function (json) {
    for (const i of json) {
      const option = document.createElement("option")
      option.text =i
      option.value =i
      brandSelector.add(option)
 


    }
   
  })
  .catch(function (err) {
    console.log("Error");
  });

// Modelos

brandSelector.addEventListener("change", function () {

fetch("https://ha-front-api-proyecto-final.vercel.app/models?brand="+brandSelector.value)
.then(function (res) {
  return res.json();
})
.then(function (json) {
  modelSelector.innerHTML = ""
  for (const i of json) {
    console.log(i);

    const option = document.createElement("option")
    option.text =i
    option.value =i
    modelSelector.add(option)



  }
 
})
.catch(function (err) {
  console.log("Error");
});
})


/* status */

for( i=0; i <=1 ; i++ ){

  const option = document.createElement("option")
  option.text =i
  statusSelector.add(option)
}

/* status */

/* filtro */

/* year */

for( i=1900; i <=2023 ; i++ ){

  const option = document.createElement("option")
  option.text =i
  yearSelector.add(option)
}

/* year */

/* filtro */

  /* formulario logic */
  /* formulario logic */

  /* modelo selecion actual */

