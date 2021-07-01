const interFace = document.querySelector("#interface");

const FormElements = () => {
  const fromElement = document.createElement("form");
  fromElement.id = "fromTag";
  interFace.appendChild(fromElement);
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Enter Your Country Name";
  inputField.id = "input-field";
  fromElement.appendChild(inputField);

  // submit part
  const submit = document.createElement("button");
  submit.innerText = "Get Data";
  submit.id = "submitBtn";
  fromElement.appendChild(submit);

  submit.addEventListener("click", () => {
    const menu = document.querySelector(".all-cases");
    menu.classList = "active-all-cases";

    const hideHeadingTable = document.querySelector(".heading-table");
    hideHeadingTable.style.display = "none";
  });
  /* fetch the data */

  fromElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitValue = inputField.value;
    inputField.focus();
    inputField.value = "";

    // fetch request to get the data

    function fetchData(url) {
      return fetch(url);
    }

    function init() {
      fetchData(`https://corona.lmao.ninja/v2/countries/${submitValue}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          const length = res.length;
          const index = length - 1;

          const confirmed = totalConfirmed;
          const recovered = totalRecovered;
          const death = totalDeath;
          const newCases = newConfirmed;

          confirmed.innerHTML = "";
          recovered.innerHTML = "";
          death.innerHTML = "";
          newCases.innerHTML = "";

          confirmed.append(`Total Confirmed: ${res.cases}`);
          recovered.append(`Total Recovered: ${res.recovered}`);
          death.append(`Total Death:  ${res.todayDeaths}`);
          newCases.append(`New Confirmed: ${res.active} `);
        })
        .catch((error) => {
          window.alert(`Please Enter your Country Name`);
          console.log(error.message);
        });
    }
    init();
  });
  const containAllCases = document.createElement("div");
  containAllCases.className = "all-cases";

  const totalConfirmed = document.createElement("h2");
  totalConfirmed.className = "total-confirm";

  const totalRecovered = document.createElement("h2");
  totalRecovered.className = "total-recover";

  const totalDeath = document.createElement("h2");
  totalDeath.className = "total-death";
  const newConfirmed = document.createElement("h2");
  newConfirmed.className = "new-confirm";

  containAllCases.appendChild(totalRecovered);
  containAllCases.appendChild(totalConfirmed);
  containAllCases.appendChild(totalDeath);

  containAllCases.appendChild(newConfirmed);

  interFace.appendChild(containAllCases);
};
export default FormElements;
