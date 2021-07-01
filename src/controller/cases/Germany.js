const Germany = (dataJson) => {
  // Germany
  const totalConfirmedGermany = dataJson[76].cases;
  const totalDeathsGermany = dataJson[76].deaths;
  const totalRecoveredGermany = dataJson[76].recovered;
  const newConfirmedGermany = dataJson[76].population;
  const newDeathsGermany = dataJson[76].todayDeaths;
  const newRecoveredGermany = dataJson[76].critical;

  document.getElementById("totalConfirmedGermany").innerHTML =
    totalConfirmedGermany;
  document.getElementById("totalDeathsGermany").innerHTML = totalDeathsGermany;
  document.getElementById("totalRecoveredGermany").innerHTML =
    totalRecoveredGermany;
  document.getElementById("newConfirmedGermany").innerHTML =
    newConfirmedGermany;
  document.getElementById("newDeathsGermany").innerHTML = newDeathsGermany;
  document.getElementById("newRecoveredGermany").innerHTML =
    newRecoveredGermany;
};
export default Germany;
