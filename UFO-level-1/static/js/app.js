// from data.js
var tableData = data;
var tbody = d3.select('tbody');

tableData.forEach(entry =>{
    var row = tbody.append('tr');
    Object.entries(entry).forEach(([key,value])=>{
        var cell = row.append('td');
        cell.text(value);
    });
    

});

var button = d3.select("#filter-btn");

button.on("click",function(){

    var inputElement = d3.select("#datetime");
    var inputvalue = inputElement.property("value");
    console.log("click");

    var filter = tableData.filter(entry => entry.datetime === inputvalue);

    tbody.html("");

    filter.forEach(entry => {
        var row = tbody.append("tr");
        Object.entries(entry).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
});