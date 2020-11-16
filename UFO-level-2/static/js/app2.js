// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select("tbody");
data.forEach((ufosighting) => {
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button=d3.select("#filter-btn");
var form=d3.select("#form");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node for date
    var date = d3.select("#datetime");
  
    // Get the value property of the input element Date
    var dateValue = date.property("value");

    // Select the input element and get the raw HTML node for state
    var state = d3.select("#state");
    var stateValue = state.property("value")


  
    console.log(inputValue);
  
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
    console.log(filteredData);
  
    
  
    // remove any children from the table to
    tbody.html("");
    filteredData.forEach((signting) => {
      var row = tbody.append("tr");
      Object.entries(signting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };