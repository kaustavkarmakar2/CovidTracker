const interFace = document.querySelector("#interface");
import TableViewCell from "./tableView.js";
function makeTable() {
  const tableHeading = document.createElement("h2");
  tableHeading.textContent =
    "If you don't found your country name in the table, please enter it in the field";
  tableHeading.className = "heading-table";
  interFace.append(tableHeading);
  const table = document.createElement("div");
  TableViewCell(table);

  interFace.append(table);
}
export default makeTable;
