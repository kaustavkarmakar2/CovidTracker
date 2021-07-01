const ItalyCases = (dataJson) => {
  // Italy cases
  const totalConfirmedItaly = dataJson[100].cases;
  const totalDeathsItaly = dataJson[100].deaths;
  const totalRecoveredItaly = dataJson[100].recovered;
  const newConfirmedItaly = dataJson[100].population;
  const newDeathsItaly = dataJson[100].todayDeaths;
  const newRecoveredItaly = dataJson[100].critical;

  document.getElementById("totalConfirmItaly").innerHTML = totalConfirmedItaly;
  document.getElementById("totalDeathsItaly").innerHTML = totalDeathsItaly;
  document.getElementById("totalRecoveredItaly").innerHTML =
    totalRecoveredItaly;
  document.getElementById("newConfirmedItaly").innerHTML = newConfirmedItaly;
  document.getElementById("newDeathsItaly").innerHTML = newDeathsItaly;
  document.getElementById("newRecoveredItaly").innerHTML = newRecoveredItaly;
};
export default ItalyCases;
