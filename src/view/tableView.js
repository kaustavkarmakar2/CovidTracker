const TableViewCell = (table) => {
  table.className = "entire-table";

  table.innerHTML = `<table>
        <tr style="background-color: green;" >
        <th >Countries</th>
        <th style="padding: 10px">Total Confirmed</th>
        <th >Total Deaths</th>
        <th >Total Recovered</th>
        <th >Population</th>
        <th >New Deaths</th>
        <th >Crtical</th>
        
    </tr>
    
    <tr>
        <td><b>Italy</b></td>
        <td id="totalConfirmItaly"></td>
        <td id="totalDeathsItaly"></td>
        <td id="totalRecoveredItaly"></td>
        <td id="newConfirmedItaly"></td>
        <td id="newDeathsItaly"></td>
        <td id="newRecoveredItaly"></td>
        
    </tr>
    
    <tr>
    <td><b>Brazil</b></td>
    <td id="totalConfirmedBrazil"></td>
    <td id="totalDeathsBrazil"></td>
    <td id="totalRecoveredBrazil"></td>
    <td id="newConfirmedBrazil"></td>
    <td id="newDeathsBrazil"></td>
    <td id="newRecoveredBrazil"></td>
    </tr>
    
    <tr>
    <td><b>Iraq</b></td>
    <td id="totalConfirmedIraq"></td>
    <td id="totalDeathsIraq"></td>
    <td id="totalRecoveredIraq"></td>
    <td id="newConfirmedIraq"></td>
    <td id="newDeathsIraq"></td>
    <td id="newRecoveredIraq"></td>
    </tr>
    
    
    <tr>
    <td><b>Jordan</b></td>
    <td id="totalConfirmedJordan"></td>
    <td id="totalDeathsJordan"></td>
    <td id="totalRecoveredJordan"></td>
    <td id="newConfirmedJordan"></td>
    <td id="newDeathsJordan"></td>
    <td id="newRecoveredJordan"></td>
    </tr>
    
    <tr>
    <td><b>Germany</b></td>
    <td id="totalConfirmedGermany"></td>
    <td id="totalDeathsGermany"></td>
    <td id="totalRecoveredGermany"></td>
    <td id="newConfirmedGermany"></td>
    <td id="newDeathsGermany"></td>
    <td id="newRecoveredGermany"></td>
    </tr>
    
    
    <tr>
    <td><b>Turkey</b></td>
    <td id="totalConfirmedTurkey"></td>
    <td id="totalDeathsTurkey"></td>
    <td id="totalRecoveredTurkey"></td>
    <td id="newConfirmedTurkey"></td>
    <td id="newDeathsTurkey"></td>
    <td id="newRecoveredTurkey"></td>
    </tr>
    
    <tr>
    <td><b>Morocco</b></td>
    <td id="totalConfirmedMorocco"></td>
    <td id="totalDeathsMorocco"></td>
    <td id="totalRecoveredMorocco"></td>
    <td id="newConfirmedMorocco"></td>
    <td id="newDeathsMorocco"></td>
    <td id="newRecoveredMorocco"></td>
    </tr>
    
    
    <tr>
    <td><b>Poland</b></td>
    <td id="totalConfirmedPoland"></td>
    <td id="totalDeathsPoland"></td>
    <td id="totalRecoveredPoland"></td>
    <td id="newConfirmedPoland"></td>
    <td id="newDeathsPoland"></td>
    <td id="newRecoveredPoland"></td>
    </tr>
    
    
    <tr>
    <td><b>Mexico</b></td>
    <td id="totalConfirmedMexico"></td>
    <td id="totalDeathsMexico"></td>
    <td id="totalRecoveredMexico"></td>
    <td id="newConfirmedMexico"></td>
    <td id="newDeathsMexico"></td>
    <td id="newRecoveredMexico"></td>
    </tr>
    
    <tr>
    <td><b>South Africa</b></td>
    <td id="totalConfirmedSouthAfrica"></td>
    <td id="totalDeathsSouthAfrica"></td>
    <td id="totalRecoveredSouthAfrica"></td>
    <td id="newConfirmedSouthAfrica"></td>
    <td id="newDeathsSouthAfrica"></td>
    <td id="newRecoveredSouthAfrica"></td>
    </tr>
    </table>
    <br />
    <a href="javascript:window.location.reload(true)"><button class="refresh-button">Refresh Page</button></a>
    `;
};
export default TableViewCell;
