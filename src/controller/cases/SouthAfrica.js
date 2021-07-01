const SouthAfrica = (dataJson) => {
  // South Africa

  const totalConfirmedSouthAfrica = dataJson[186].cases;
  const totalDeathsSouthAfrica = dataJson[186].deaths;
  const totalRecoveredSouthAfrica = dataJson[186].recovered;
  const newConfirmedSouthAfrica = dataJson[186].population;
  const newDeathsSouthAfrica = dataJson[186].todayDeaths;
  const newRecoveredSouthAfrica = dataJson[186].critical;

  document.getElementById("totalConfirmedSouthAfrica").innerHTML =
    totalConfirmedSouthAfrica;
  document.getElementById("totalDeathsSouthAfrica").innerHTML =
    totalDeathsSouthAfrica;
  document.getElementById("totalRecoveredSouthAfrica").innerHTML =
    totalRecoveredSouthAfrica;
  document.getElementById("newConfirmedSouthAfrica").innerHTML =
    newConfirmedSouthAfrica;
  document.getElementById("newDeathsSouthAfrica").innerHTML =
    newDeathsSouthAfrica;
  document.getElementById("newRecoveredSouthAfrica").innerHTML =
    newRecoveredSouthAfrica;
};
export default SouthAfrica;
