// from data.js
var tableData = data;

d3.select("#filter-btn").on("click",runEnter);
d3.select('form').on('submit',runEnter);

function runEnter() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);

    // create variable for tbody element
    var mybody = d3.select("tbody");

    // remove any exisitng data
    mybody.html("");

  filteredData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = mybody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufoSighting object
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
