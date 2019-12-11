// validate if data is working
//console.log(data);

//create a function that replaces whatever is in tbody with new data
function replaceTable(table) {
    // use D3 to reference the table body
    let tbody = d3.selectAll("tbody");
    tbody.html("");
    table.forEach(report => {
        let row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        })
    })
}

// load initial data on the page
replaceTable(data);

// Add a listener for the filter button
d3.selectAll("#filter-btn").on("click", handleFilterClick)

// Function that based on a date, filter the UFO data
function filterByDate(filterDate) {
    var newdata = []
    data.forEach(event => {
        if (event.datetime === filterDate) {
            newdata.push(event)
        }
    })

    return newdata;
}

// Create a function that filters the data based on the input field and then run the replaceTable function
function handleFilterClick() {
    // Use D3 to select the date input 
    let datetime = d3.select("#datetime");
    // Extract the value of the input box and use it to run the filter function
    var filterDate = datetime.property("value");
    console.log(filterDate);
    let filteredData = filterByDate(filterDate);
    console.log(filteredData);
    // Using the filtered data, replace the values in the table (if no match it will return an empty table)
    replaceTable(filteredData);
}