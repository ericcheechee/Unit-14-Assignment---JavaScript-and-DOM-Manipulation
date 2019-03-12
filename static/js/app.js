// from data.js
var tableData = data;

var table = d3.select("tbody");

function generateTable(array) {
    // Maybe clear out the existing data on the front end
    // for each item in the array data: add a row
    // for each key: value pair in each item from the
    // array data (eg. city: "benton") add a cell
    array.forEach(function(item){
      var row = table.append("tr");
      Object.entries(item).forEach(function([key,value]){
        var cell = row.append("td")
        cell.text(value);
      });
    });
};

generateTable(tableData);

function handleClick(){

  d3.select("#filter-btn").on("click", function() {
    d3.event.preventDefault();
    d3.selectAll('td').remove();

  var inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);
  var filterData = tableData.filter(item => item.datetime === inputValue);
    console.log(filterData);

  var inputValuecity = d3.select("#city").property("value");
    console.log(inputValuecity);
  var filterDatacity = tableData.filter(item => item.city === inputValue);
    console.log(filterDatacity);

  // var inputValue = d3.select("#country").property("value");
  //   console.log(inputValue);
  // var filterData = tableData.filter(item => item.country === inputValue);
  //   console.log(filterData);
  //
  // var inputValue = d3.select("#shape").property("value");
  //   console.log(inputValue);
  // var filterData = tableData.filter(item => item.shape === inputValue);
  //     console.log(filterData);
  //
  // var inputValue = d3.select("#comment").property("value");
  //     console.log(inputValue);
  // var filterData = tableData.filter(item => item.comment === inputValue);
  //     console.log(filterData);

  generateTable(filterData);

  });
  };



handleClick();

// some code that only executes when the submit button gets clicked

// function handleClick(){
//     // prevent the refresh of the page (default hmtl button behavior)
//     d3.event.preventDefault();
//     // THink about how to handle when someone enters an empty date
//     // grab the user entered datetime value
//     d3.select("#filter-btn").on("click", function(){
//       text = d3.select("#datetime").property("value");

    // FILTER THE DATASET TO THE USER ENTERED value
    // HINT: use the .filter() function

    // Call generateTable() function above using new filtered data



// d3.select("#filter-btn").on("change", handleClick)
