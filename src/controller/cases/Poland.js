const Poland = (dataJson) => {
  // Poland

  const totalConfirmedPoland = dataJson[158].cases;
  const totalDeathsPoland = dataJson[158].deaths;
  const totalRecoveredPoland = dataJson[158].recovered;
  const newConfirmedPoland = dataJson[158].population;
  const newDeathsPoland = dataJson[158].todayDeaths;
  const newRecoveredPoland = dataJson[158].critical;

  document.getElementById("totalConfirmedPoland").innerHTML =
    totalConfirmedPoland;
  document.getElementById("totalDeathsPoland").innerHTML = totalDeathsPoland;
  document.getElementById("totalRecoveredPoland").innerHTML =
    totalRecoveredPoland;
  document.getElementById("newConfirmedPoland").innerHTML = newConfirmedPoland;
  document.getElementById("newDeathsPoland").innerHTML = newDeathsPoland;
  document.getElementById("newRecoveredPoland").innerHTML = newRecoveredPoland;
};
export default Poland;
