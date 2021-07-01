import Tabel from "../view/table.js";
import CreateVirusFall from "./createVirusFall.js";
import ApiCall from "./ApiCall.js";
import FormElements from "./formElements.js";
const Form = () => {
  FormElements();
  ApiCall();
  Tabel();
  setInterval(CreateVirusFall, 300);
  // function getAllElement() {}
};
export default Form;
