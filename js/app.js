const yearSelector = document.querySelector("#years");
const brandSelector = document.querySelector("#brands");
const modelSelector = document.querySelector("#models");
const statusSelector = document.querySelector("#status");

for (let i = 1900; i <= 2023; i++) {
  yearSelector.insertAdjacentHTML += `<option value="${i}">${i}</option>`;
}

// Autos

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {})
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
