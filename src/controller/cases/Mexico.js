const Mexico = (dataJson) => {
  // Mexico

  const totalConfirmedMexico = dataJson[131].cases;
  const totalDeathsMexico = dataJson[131].deaths;
  const totalRecoveredMexico = dataJson[131].recovered;
  const newConfirmedMexico = dataJson[131].population;
  const newDeathsMexico = dataJson[131].todayDeaths;
  const newRecoveredMexico = dataJson[131].critical;

  document.getElementById("totalConfirmedMexico").innerHTML =
    totalConfirmedMexico;
  document.getElementById("totalDeathsMexico").innerHTML = totalDeathsMexico;
  document.getElementById("totalRecoveredMexico").innerHTML =
    totalRecoveredMexico;
  document.getElementById("newConfirmedMexico").innerHTML = newConfirmedMexico;
  document.getElementById("newDeathsMexico").innerHTML = newDeathsMexico;
  document.getElementById("newRecoveredMexico").innerHTML = newRecoveredMexico;
};
export default Mexico;
