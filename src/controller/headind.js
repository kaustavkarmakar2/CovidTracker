
 const interFace = document.querySelector("#interface");
 const Header=()=> {
    const createHeading = document.createElement("h1");
    createHeading.innerText = "Covid-19 Cases In The World";
    createHeading.setAttribute("class", "heading");
    interFace.appendChild(createHeading);
    
}
export default Header;
