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

// Function that based on a date, filters the UFO data
function filterByDate(filterDate) {
    var newdata = []
    data.forEach(event => {
        if (event.datetime === filterDate) {
            newdata.push(event)
        }
    })
    return newdata;
}

// Function that based on a city, filters the UFO data
function filterByCity(filterCity) {
    var newdata = []
    data.forEach(event => {
        if (event.city === filterCity) {
            newdata.push(event)
        }
    })
    return newdata;
}

// Function that based on a state, filters the UFO data
function filterByState(filterState) {
    var newdata = []
    data.forEach(event => {
        if (event.state === filterState) {
            newdata.push(event)
        }
    })
    return newdata;
}


// Function that based on a country, filters the UFO data
function filterByCountry(filterCountry) {
    var newdata = []
    data.forEach(event => {
        if (event.country === filterCountry) {
            newdata.push(event)
        }
    })
    return newdata;
}

// Function that based on a shape, filters the UFO data
function filterByShape(filterShape) {
    var newdata = []
    data.forEach(event => {
        if (event.shape === filterShape) {
            newdata.push(event)
        }
    })
    return newdata;
}

// Create a function that filters the data based on the input field and then run the replaceTable function
function handleFilterClick() {
    // Use D3 to select the input and extract the value
    let filterInput = d3.select("#datetime");
    let filterValue = filterInput.property("value");
    console.log(filterValue);
    // Use D3 to select the type of filter from the dropdown menu
    let dropDownMenu = d3.selectAll("#selFilter");
    let filterType = dropDownMenu.node().value;
    console.log(filterType);
    // Use a switch that based on the type of filter run the appropiate function to filter the data
    let filteredData = [];
    switch (filterType) {
        case "dateFilter":
            filteredData = filterByDate(filterValue);
            console.log(filteredData);
            break;
        case "cityFilter":
            filteredData = filterByCity(filterValue);
            console.log(filteredData);
            break;
        case "stateFilter":
            filteredData = filterByState(filterValue);
            console.log(filteredData);
            break;
        case "countryFilter":
            filteredData = filterByCountry(filterValue);
            console.log(filteredData);
            break;
        case "shapeFilter":
            filteredData = filterByShape(filterValue);
            console.log(filteredData);
            break;
        default:

            break;
    }
    // Using the filtered data, replace the values in the table (if no match it will return an empty table)
    replaceTable(filteredData);
}