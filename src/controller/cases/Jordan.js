const Jordan = (dataJson) => {
  // Jordan cases

  const totalConfirmedJordan = dataJson[103].cases;
  const totalDeathsJordan = dataJson[103].deaths;
  const totalRecoveredJordan = dataJson[103].recovered;
  const newConfirmedJordan = dataJson[103].population;
  const newDeathsJordan = dataJson[103].todayDeaths;
  const newRecoveredJordan = dataJson[103].critical;

  document.getElementById("totalConfirmedJordan").innerHTML =
    totalConfirmedJordan;
  document.getElementById("totalDeathsJordan").innerHTML = totalDeathsJordan;
  document.getElementById("totalRecoveredJordan").innerHTML =
    totalRecoveredJordan;
  document.getElementById("newConfirmedJordan").innerHTML = newConfirmedJordan;
  document.getElementById("newDeathsJordan").innerHTML = newDeathsJordan;
  document.getElementById("newRecoveredJordan").innerHTML = newRecoveredJordan;
};
export default Jordan;
