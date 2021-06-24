const interFace = document.querySelector("#interface");

// start with search bar

// heading part
const createHeading = document.createElement("h1");
createHeading.innerText = "Covid19 Tracker using";
createHeading.style.textAlign = "center";
createHeading.setAttribute("class", "heading");
interFace.appendChild(createHeading);
//  create form
const formTag = document.createElement("form");
formTag.id = "fromTag";
interFace.appendChild(formTag);

// field part

const inputPart = document.createElement("input");
inputPart.type = "test";
inputPart.placeholder = "Enter Your Country Name";
inputPart.id = "country";
formTag.appendChild(inputPart);

// submit part
const submit = document.createElement("input");
submit.type = "submit";
submit.value = "Get Data";
submit.id = "submitBtn";
formTag.appendChild(submit);

// Total confirmed
const totalConfirmed = document.createElement("h2");
interFace.appendChild(totalConfirmed);
//  Total Recovered
const totalRecovered = document.createElement("h2");
interFace.appendChild(totalRecovered);

// Total Death
const totalDeath = document.createElement("h2");
interFace.appendChild(totalDeath);

/* fetch the data */

formTag.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitValue = inputPart.value;
  inputPart.focus();
  inputPart.value = "";

  // fetch request to get the data

  function fetchData(url) {
    return fetch(url);
  }

  function init() {
    fetchData(`https://api.covid19api.com/dayone/country/${submitValue}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const length = res.length;
        const index = length - 1;

        const confirmed = totalConfirmed;
        const recovered = totalRecovered;
        const death = totalDeath;

        confirmed.innerHTML = "";
        recovered.innerHTML = "";
        death.innerHTML = "";
        confirmed.append(`Total Confirmed: ${res[index].Confirmed}`);
        recovered.append(`Total Recovered: ${res[index].Recovered}`);
        death.append(`Total Death:  ${res[index].Deaths}`);
      })
      .catch((error) => {
        window.alert(`Please Enter your Country Name`);
        console.log(error.message);
      });
  }
  init();
});
