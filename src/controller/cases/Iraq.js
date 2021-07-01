const Iraq = (dataJson) => {
  // Iraq cases

  const totalConfirmedIraq = dataJson[96].cases;
  const totalDeathsIraq = dataJson[96].deaths;
  const totalRecoveredIraq = dataJson[96].recovered;
  const newConfirmedIraq = dataJson[96].population;
  const newDeathsIraq = dataJson[96].todayDeaths;
  const newRecoveredIraq = dataJson[96].critical;

  document.getElementById("totalConfirmedIraq").innerHTML = totalConfirmedIraq;
  document.getElementById("totalDeathsIraq").innerHTML = totalDeathsIraq;
  document.getElementById("totalRecoveredIraq").innerHTML = totalRecoveredIraq;
  document.getElementById("newConfirmedIraq").innerHTML = newConfirmedIraq;
  document.getElementById("newDeathsIraq").innerHTML = newDeathsIraq;
  document.getElementById("newRecoveredIraq").innerHTML = newRecoveredIraq;
};
export default Iraq;
