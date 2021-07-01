const Brazil = (dataJson) => {
  // Brazil Cases

  const totalConfirmedBrazil = dataJson[26].cases;
  const totalDeathsBrazil = dataJson[26].deaths;
  const totalRecoveredBrazil = dataJson[26].recovered;
  const newConfirmedBrazil = dataJson[26].population;
  const newDeathsBrazil = dataJson[26].todayDeaths;
  const newRecoveredBrazil = dataJson[26].critical;

  document.getElementById("totalConfirmedBrazil").innerHTML =
    totalConfirmedBrazil;
  document.getElementById("totalDeathsBrazil").innerHTML = totalDeathsBrazil;
  document.getElementById("totalRecoveredBrazil").innerHTML =
    totalRecoveredBrazil;
  document.getElementById("newConfirmedBrazil").innerHTML = newConfirmedBrazil;
  document.getElementById("newDeathsBrazil").innerHTML = newDeathsBrazil;
  document.getElementById("newRecoveredBrazil").innerHTML = newRecoveredBrazil;
};
export default Brazil;
