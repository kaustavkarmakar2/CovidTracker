const interFace = document.querySelector("#interface");

async function getCovidApi() {
  const jsonFormat = await fetch("https://api.covid19api.com/summary");
  const jsFormat = await jsonFormat.json();
  console.log(jsFormat);
}

getCovidApi();
