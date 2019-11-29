// from data.js
var tableData = data;

// runEnter function initiated by button click
d3.select("#filter-btn").on("click",runEnter);

function runEnter() {

  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");
  // Filter data
  var dateData = tableData.filter(sighting => sighting.datetime === inputValue1);

  // repeat for city
  var inputElement2 = d3.select("#city");
  var inputValue2 = inputElement2.property("value");
  var cityData = tableData.filter(sighting => sighting.city === inputValue2);

  // repeat for state
  var inputElement3 = d3.select("#state");
  var inputValue3 = inputElement3.property("value");
  var stateData = tableData.filter(sighting => sighting.state === inputValue3);

  // repeat for country
  var inputElement4 = d3.select("#country");
  var inputValue4 = inputElement4.property("value");
  var countryData = tableData.filter(sighting => sighting.country === inputValue4);

  // repeat for shape
  var inputElement5 = d3.select("#shape");
  var inputValue5 = inputElement5.property("value");
  var shapeData = tableData.filter(sighting => sighting.shape === inputValue5);

  // repeat for durationMinutes
  var inputElement6 = d3.select("#duration");
  var inputValue6 = inputElement6.property("value");
  var durationData = tableData.filter(sighting => sighting.durationMinutes === inputValue6);


    // create variable for tbody element
    var mybody = d3.select("tbody");

    // remove any exisitng data
    mybody.html("");


  // loop through filtered data append row for each entry
  dateData.forEach(function(ufoSighting) {
    var row = mybody.append("tr");

    // append cell in row for each key value pair 
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);

      // Append a cell to the row for each value
      // in the ufoSighting object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // repeat for city
  cityData.forEach(function(ufoSighting) {
    var row = mybody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
  // repeat for state
  stateData.forEach(function(ufoSighting) {
    var row = mybody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // repeat for country
  countryData.forEach(function(ufoSighting) {
    var row = mybody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

  //repeat for shape
  shapeData.forEach(function(ufoSighting) {
    var row = mybody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // repeat for duratiion
  durationData.forEach(function(ufoSighting) {
    var row = mybody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-hover table-striped");
