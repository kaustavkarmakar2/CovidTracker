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

// Start with table live corona update

async function getApi() {
  try {
    const fetchApi = await fetch("https://api.covid19api.com/summary");
    const dataJson = await fetchApi.json();
    const total = dataJson.Countries;

    // Italy cases
    const totalConfirmedItaly = dataJson.Countries[82].TotalConfirmed;
    const totalDeathsItaly = dataJson.Countries[82].TotalDeaths;
    const totalRecoveredItaly = dataJson.Countries[82].TotalRecovered;
    const newConfirmedItaly = dataJson.Countries[82].NewConfirmed;
    const newDeathsItaly = dataJson.Countries[82].NewDeaths;
    const newRecoveredItaly = dataJson.Countries[82].NewRecovered;

    document.getElementById(
      "totalConfirmItaly"
    ).innerHTML = totalConfirmedItaly;
    document.getElementById("totalDeathsItaly").innerHTML = totalDeathsItaly;
    document.getElementById(
      "totalRecoveredItaly"
    ).innerHTML = totalRecoveredItaly;
    document.getElementById("newConfirmedItaly").innerHTML = newConfirmedItaly;
    document.getElementById("newDeathsItaly").innerHTML = newDeathsItaly;
    document.getElementById("newRecoveredItaly").innerHTML = newRecoveredItaly;

    console.log(total);

    // Brazil Cases

    const totalConfirmedBrazil = dataJson.Countries[23].TotalConfirmed;
    const totalDeathsBrazil = dataJson.Countries[23].TotalDeaths;
    const totalRecoveredBrazil = dataJson.Countries[23].TotalRecovered;
    const newConfirmedBrazil = dataJson.Countries[23].NewConfirmed;
    const newDeathsBrazil = dataJson.Countries[23].NewDeaths;
    const newRecoveredBrazil = dataJson.Countries[23].NewRecovered;

    document.getElementById(
      "totalConfirmedBrazil"
    ).innerHTML = totalConfirmedBrazil;
    document.getElementById("totalDeathsBrazil").innerHTML = totalDeathsBrazil;
    document.getElementById(
      "totalRecoveredBrazil"
    ).innerHTML = totalRecoveredBrazil;
    document.getElementById(
      "newConfirmedBrazil"
    ).innerHTML = newConfirmedBrazil;
    document.getElementById("newDeathsBrazil").innerHTML = newDeathsBrazil;
    document.getElementById(
      "newRecoveredBrazil"
    ).innerHTML = newRecoveredBrazil;

    // Iraq cases

    const totalConfirmedIraq = dataJson.Countries[79].TotalConfirmed;
    const totalDeathsIraq = dataJson.Countries[79].TotalDeaths;
    const totalRecoveredIraq = dataJson.Countries[79].TotalRecovered;
    const newConfirmedIraq = dataJson.Countries[79].NewConfirmed;
    const newDeathsIraq = dataJson.Countries[79].NewDeaths;
    const newRecoveredIraq = dataJson.Countries[79].NewRecovered;

    document.getElementById(
      "totalConfirmedIraq"
    ).innerHTML = totalConfirmedIraq;
    document.getElementById("totalDeathsIraq").innerHTML = totalDeathsIraq;
    document.getElementById(
      "totalRecoveredIraq"
    ).innerHTML = totalRecoveredIraq;
    document.getElementById("newConfirmedIraq").innerHTML = newConfirmedIraq;
    document.getElementById("newDeathsIraq").innerHTML = newDeathsIraq;
    document.getElementById("newRecoveredIraq").innerHTML = newRecoveredIraq;

    // Jordan cases

    const totalConfirmedJordan = dataJson.Countries[85].TotalConfirmed;
    const totalDeathsJordan = dataJson.Countries[85].TotalDeaths;
    const totalRecoveredJordan = dataJson.Countries[85].TotalRecovered;
    const newConfirmedJordan = dataJson.Countries[85].NewConfirmed;
    const newDeathsJordan = dataJson.Countries[85].NewDeaths;
    const newRecoveredJordan = dataJson.Countries[85].NewRecovered;

    document.getElementById(
      "totalConfirmedJordan"
    ).innerHTML = totalConfirmedJordan;
    document.getElementById("totalDeathsJordan").innerHTML = totalDeathsJordan;
    document.getElementById(
      "totalRecoveredJordan"
    ).innerHTML = totalRecoveredJordan;
    document.getElementById(
      "newConfirmedJordan"
    ).innerHTML = newConfirmedJordan;
    document.getElementById("newDeathsJordan").innerHTML = newDeathsJordan;
    document.getElementById(
      "newRecoveredJordan"
    ).innerHTML = newRecoveredJordan;

    // Germany
    const totalConfirmedGermany = dataJson.Countries[63].TotalConfirmed;
    const totalDeathsGermany = dataJson.Countries[63].TotalDeaths;
    const totalRecoveredGermany = dataJson.Countries[63].TotalRecovered;
    const newConfirmedGermany = dataJson.Countries[63].NewConfirmed;
    const newDeathsGermany = dataJson.Countries[63].NewDeaths;
    const newRecoveredGermany = dataJson.Countries[63].NewRecovered;

    document.getElementById(
      "totalConfirmedGermany"
    ).innerHTML = totalConfirmedGermany;
    document.getElementById(
      "totalDeathsGermany"
    ).innerHTML = totalDeathsGermany;
    document.getElementById(
      "totalRecoveredGermany"
    ).innerHTML = totalRecoveredGermany;
    document.getElementById(
      "newConfirmedGermany"
    ).innerHTML = newConfirmedGermany;
    document.getElementById("newDeathsGermany").innerHTML = newDeathsGermany;
    document.getElementById(
      "newRecoveredGermany"
    ).innerHTML = newRecoveredGermany;

    // Turkey

    const totalConfirmedTurkey = dataJson.Countries[178].TotalConfirmed;
    const totalDeathsTurkey = dataJson.Countries[178].TotalDeaths;
    const totalRecoveredTurkey = dataJson.Countries[178].TotalRecovered;
    const newConfirmedTurkey = dataJson.Countries[178].NewConfirmed;
    const newDeathsTurkey = dataJson.Countries[178].NewDeaths;
    const newRecoveredTurkey = dataJson.Countries[178].NewRecovered;

    document.getElementById(
      "totalConfirmedTurkey"
    ).innerHTML = totalConfirmedTurkey;
    document.getElementById("totalDeathsTurkey").innerHTML = totalDeathsTurkey;
    document.getElementById(
      "totalRecoveredTurkey"
    ).innerHTML = totalRecoveredTurkey;
    document.getElementById(
      "newConfirmedTurkey"
    ).innerHTML = newConfirmedTurkey;
    document.getElementById("newDeathsTurkey").innerHTML = newDeathsTurkey;
    document.getElementById(
      "newRecoveredTurkey"
    ).innerHTML = newRecoveredTurkey;

    // Morocco

    const totalConfirmedMorocco = dataJson.Countries[117].TotalConfirmed;
    const totalDeathsMorocco = dataJson.Countries[117].TotalDeaths;
    const totalRecoveredMorocco = dataJson.Countries[117].TotalRecovered;
    const newConfirmedMorocco = dataJson.Countries[117].NewConfirmed;
    const newDeathsMorocco = dataJson.Countries[117].NewDeaths;
    const newRecoveredMorocco = dataJson.Countries[117].NewRecovered;

    document.getElementById(
      "totalConfirmedMorocco"
    ).innerHTML = totalConfirmedMorocco;
    document.getElementById(
      "totalDeathsMorocco"
    ).innerHTML = totalDeathsMorocco;
    document.getElementById(
      "totalRecoveredMorocco"
    ).innerHTML = totalRecoveredMorocco;
    document.getElementById(
      "newConfirmedMorocco"
    ).innerHTML = newConfirmedMorocco;
    document.getElementById("newDeathsMorocco").innerHTML = newDeathsMorocco;
    document.getElementById(
      "newRecoveredMorocco"
    ).innerHTML = newRecoveredMorocco;

    // Poland

    const totalConfirmedPoland = dataJson.Countries[137].TotalConfirmed;
    const totalDeathsPoland = dataJson.Countries[137].TotalDeaths;
    const totalRecoveredPoland = dataJson.Countries[137].TotalRecovered;
    const newConfirmedPoland = dataJson.Countries[137].NewConfirmed;
    const newDeathsPoland = dataJson.Countries[137].NewDeaths;
    const newRecoveredPoland = dataJson.Countries[137].NewRecovered;

    document.getElementById(
      "totalConfirmedPoland"
    ).innerHTML = totalConfirmedPoland;
    document.getElementById("totalDeathsPoland").innerHTML = totalDeathsPoland;
    document.getElementById(
      "totalRecoveredPoland"
    ).innerHTML = totalRecoveredPoland;
    document.getElementById(
      "newConfirmedPoland"
    ).innerHTML = newConfirmedPoland;
    document.getElementById("newDeathsPoland").innerHTML = newDeathsPoland;
    document.getElementById(
      "newRecoveredPoland"
    ).innerHTML = newRecoveredPoland;

    // Mexico

    const totalConfirmedMexico = dataJson.Countries[111].TotalConfirmed;
    const totalDeathsMexico = dataJson.Countries[111].TotalDeaths;
    const totalRecoveredMexico = dataJson.Countries[111].TotalRecovered;
    const newConfirmedMexico = dataJson.Countries[111].NewConfirmed;
    const newDeathsMexico = dataJson.Countries[111].NewDeaths;
    const newRecoveredMexico = dataJson.Countries[111].NewRecovered;

    document.getElementById(
      "totalConfirmedMexico"
    ).innerHTML = totalConfirmedMexico;
    document.getElementById("totalDeathsMexico").innerHTML = totalDeathsMexico;
    document.getElementById(
      "totalRecoveredMexico"
    ).innerHTML = totalRecoveredMexico;
    document.getElementById(
      "newConfirmedMexico"
    ).innerHTML = newConfirmedMexico;
    document.getElementById("newDeathsMexico").innerHTML = newDeathsMexico;
    document.getElementById(
      "newRecoveredMexico"
    ).innerHTML = newRecoveredMexico;

    // South Africa

    const totalConfirmedSouthAfrica = dataJson.Countries[160].TotalConfirmed;
    const totalDeathsSouthAfrica = dataJson.Countries[160].TotalDeaths;
    const totalRecoveredSouthAfrica = dataJson.Countries[160].TotalRecovered;
    const newConfirmedSouthAfrica = dataJson.Countries[160].NewConfirmed;
    const newDeathsSouthAfrica = dataJson.Countries[160].NewDeaths;
    const newRecoveredSouthAfrica = dataJson.Countries[160].NewRecovered;

    document.getElementById(
      "totalConfirmedSouthAfrica"
    ).innerHTML = totalConfirmedSouthAfrica;
    document.getElementById(
      "totalDeathsSouthAfrica"
    ).innerHTML = totalDeathsSouthAfrica;
    document.getElementById(
      "totalRecoveredSouthAfrica"
    ).innerHTML = totalRecoveredSouthAfrica;
    document.getElementById(
      "newConfirmedSouthAfrica"
    ).innerHTML = newConfirmedSouthAfrica;
    document.getElementById(
      "newDeathsSouthAfrica"
    ).innerHTML = newDeathsSouthAfrica;
    document.getElementById(
      "newRecoveredSouthAfrica"
    ).innerHTML = newRecoveredSouthAfrica;
  } catch (error) {
    console.log(error);
  }
}

getApi();

function getAllElement() {}
function makeTable() {
  const table = document.createElement("div");
  table.className = "table";

  table.innerHTML = `<table border="1">
<tr style="background-color: green;">
    <th >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</th>
    <th style="padding: 10px">Total Confirmed</th>
    <th >Total Deaths</th>
    <th >Total Recovered</th>
    <th >New Confirmed</th>
    <th >New Deaths</th>
    <th >New Recovered</th>
    <th >Last Updated</th>
</tr>

<tr>
    <td><b>Italy</b></td>
    <td id="totalConfirmItaly"></td>
    <td id="totalDeathsItaly"></td>
    <td id="totalRecoveredItaly"></td>
    <td id="newConfirmedItaly"></td>
    <td id="newDeathsItaly"></td>
    <td id="newRecoveredItaly"></td>
    <td></td>
</tr>

<tr>
<td><b>Brazil</b></td>
<td id="totalConfirmedBrazil"></td>
<td id="totalDeathsBrazil"></td>
<td id="totalRecoveredBrazil"></td>
<td id="newConfirmedBrazil"></td>
<td id="newDeathsBrazil"></td>
<td id="newRecoveredBrazil"></td>
</tr>

<tr>
<td><b>Iraq</b></td>
<td id="totalConfirmedIraq"></td>
<td id="totalDeathsIraq"></td>
<td id="totalRecoveredIraq"></td>
<td id="newConfirmedIraq"></td>
<td id="newDeathsIraq"></td>
<td id="newRecoveredIraq"></td>
</tr>


<tr>
<td><b>Jordan</b></td>
<td id="totalConfirmedJordan"></td>
<td id="totalDeathsJordan"></td>
<td id="totalRecoveredJordan"></td>
<td id="newConfirmedJordan"></td>
<td id="newDeathsJordan"></td>
<td id="newRecoveredJordan"></td>
</tr>

<tr>
<td><b>Germany</b></td>
<td id="totalConfirmedGermany"></td>
<td id="totalDeathsGermany"></td>
<td id="totalRecoveredGermany"></td>
<td id="newConfirmedGermany"></td>
<td id="newDeathsGermany"></td>
<td id="newRecoveredGermany"></td>
</tr>


<tr>
<td><b>Turkey</b></td>
<td id="totalConfirmedTurkey"></td>
<td id="totalDeathsTurkey"></td>
<td id="totalRecoveredTurkey"></td>
<td id="newConfirmedTurkey"></td>
<td id="newDeathsTurkey"></td>
<td id="newRecoveredTurkey"></td>
</tr>

<tr>
<td><b>Morocco</b></td>
<td id="totalConfirmedMorocco"></td>
<td id="totalDeathsMorocco"></td>
<td id="totalRecoveredMorocco"></td>
<td id="newConfirmedMorocco"></td>
<td id="newDeathsMorocco"></td>
<td id="newRecoveredMorocco"></td>
</tr>


<tr>
<td><b>Poland</b></td>
<td id="totalConfirmedPoland"></td>
<td id="totalDeathsPoland"></td>
<td id="totalRecoveredPoland"></td>
<td id="newConfirmedPoland"></td>
<td id="newDeathsPoland"></td>
<td id="newRecoveredPoland"></td>
</tr>


<tr>
<td><b>Mexico</b></td>
<td id="totalConfirmedMexico"></td>
<td id="totalDeathsMexico"></td>
<td id="totalRecoveredMexico"></td>
<td id="newConfirmedMexico"></td>
<td id="newDeathsMexico"></td>
<td id="newRecoveredMexico"></td>
</tr>

<tr>
<td><b>South Africa</b></td>
<td id="totalConfirmedSouthAfrica"></td>
<td id="totalDeathsSouthAfrica"></td>
<td id="totalRecoveredSouthAfrica"></td>
<td id="newConfirmedSouthAfrica"></td>
<td id="newDeathsSouthAfrica"></td>
<td id="newRecoveredSouthAfrica"></td>
</tr>
</table>

<a href="javascript:window.location.reload(true)"><button>Refresh Page</button></a>
`;

  interFace.append(table);
}
makeTable();
