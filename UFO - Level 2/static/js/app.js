// from data.js
var tableData = data;
// console.log(tableData);

// select the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with UFO sighting report objects (datetime, city etc.)
    tableData.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
    console.log(key, value);
//  Append a cell to the row for each value in the UFO sighting report object 
    var cell = row.append("td");
    cell.text(value);
   });
 });

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing 
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    var tbody = d3.select("tbody");
    tbody.html("");
  
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue || ufo.city === inputValue || ufo.state === inputValue || ufo.country === inputValue || ufo.shape === inputValue);
  
    console.log(filteredData);

    filteredData.forEach(function(filt) {   
        var row = tbody.append("tr");
        Object.entries(filt).forEach(function([key, value]) {
    //  Append a cell to the row for each value in the UFO sighting report object 
        var cell = row.append("td");
        cell.text(value);
        });
    });
};
