const Morocco = (dataJson) => {
  // Morocco

  const totalConfirmedMorocco = dataJson[138].cases;
  const totalDeathsMorocco = dataJson[138].deaths;
  const totalRecoveredMorocco = dataJson[138].recovered;
  const newConfirmedMorocco = dataJson[138].population;
  const newDeathsMorocco = dataJson[138].todayDeaths;
  const newRecoveredMorocco = dataJson[138].critical;

  document.getElementById("totalConfirmedMorocco").innerHTML =
    totalConfirmedMorocco;
  document.getElementById("totalDeathsMorocco").innerHTML = totalDeathsMorocco;
  document.getElementById("totalRecoveredMorocco").innerHTML =
    totalRecoveredMorocco;
  document.getElementById("newConfirmedMorocco").innerHTML =
    newConfirmedMorocco;
  document.getElementById("newDeathsMorocco").innerHTML = newDeathsMorocco;
  document.getElementById("newRecoveredMorocco").innerHTML =
    newRecoveredMorocco;
};
export default Morocco;
