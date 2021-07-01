const Turkey = (dataJson) => {
  // Turkey

  const totalConfirmedTurkey = dataJson[138].cases;
  const totalDeathsTurkey = dataJson[138].deaths;
  const totalRecoveredTurkey = dataJson[138].recovered;
  const newConfirmedTurkey = dataJson[138].population;
  const newDeathsTurkey = dataJson[138].todayDeaths;
  const newRecoveredTurkey = dataJson[138].critical;

  document.getElementById("totalConfirmedTurkey").innerHTML =
    totalConfirmedTurkey;
  document.getElementById("totalDeathsTurkey").innerHTML = totalDeathsTurkey;
  document.getElementById("totalRecoveredTurkey").innerHTML =
    totalRecoveredTurkey;
  document.getElementById("newConfirmedTurkey").innerHTML = newConfirmedTurkey;
  document.getElementById("newDeathsTurkey").innerHTML = newDeathsTurkey;
  document.getElementById("newRecoveredTurkey").innerHTML = newRecoveredTurkey;
};
export default Turkey;
