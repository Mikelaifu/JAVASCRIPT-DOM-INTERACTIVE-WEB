var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#date");
var cityInput = document.querySelector("#city");
var stateInput = document.querySelector("#state");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");
var searchBtn = document.querySelector("#search");



searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredData = dataSet;
function renderTable() {
  
  tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    var data = filteredData[i];
    var fields = Object.keys(data);
    var row = tbody.insertRow(i);
    

      for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = data[field];
      };

    }
    
  };



renderTable();

function handleSearchButtonClick() {

  var addressDate = dateInput.value.trim();
  var addressCity = cityInput.value.trim().toLowerCase();
  var addressState = stateInput.value.trim().toLowerCase();
  var addressCountry = countryInput.value.trim().toLowerCase();
  var addressShape =  shapeInput.value.trim().toLowerCase();

  
  function filterDataset (filteredData) {
    var filtered = [];
    for (var k = 0; k < filteredData.length; ++k) {
    var item = filteredData[k];
    if (item.datetime == addressDate && item.city.toLowerCase() == addressCity && item.shape.toLowerCase() == addressShape && item.state.toLowerCase() == addressState  
      && item.country.toLowerCase() == addressCountry ) filtered.push(item);
  };
  
   console.log(filtered);
   return filtered;
  
  }

  filteredData = filterDataset (filteredData);

  renderTable();
};







