// Create URL variable
// const url = "http://127.0.0.1:5000/api/airline_delay_cause.json";
// const url = "{{url_for('airline_delay_cause')}}"
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// =================================================================================

// THIS ONLY RUNS IF I PYTHON3 APP.PY RUN APP.PY IN THE TERMINAL AND HAVE THE JSON PAGE OPEN

// =================================================================================

// Read in JSON 
d3.json(url).then(function(data) {
    console.log(data);
    console.log(data[1].airport);

    for (let i = 0; i < dataPromise.length; i++) {
        let months = dataPromise[i].month;
        console.log(months);
        let lateArrival = dataPromise[i].arr_delayed;
        console.log(lateArrival);
        let filterLateArrival = lateArrival.filter(result => result[i].airport == airport);
        console.log(filterLateArrival);
        // let carrierCancellation = dataPromise[i].carrier_ct; // are these carrier cancellations?
        // let filterarrierCancellation = carrierCancellation.filter(sample => dataPromise[i].airport === airport);
    };

});

// Init function for dropdown menu 
function init() {
    d3.json(url).then(function(dataPromise) {

        // Select dropdown menu and grab information
        let dropdownMenu = d3.select("#selDataset");
        for (let i = 0; i < dataPromise.length; i++) {
            let airport_name = dataPromise[i].airport_name;
        };

        // Append IDs to dropdown menu
        airport_name.forEach((airport) => {
            dropdownMenu.append("option").text(airport)
        });
    
        // Determine inital graph data 
        let firstData = airport_name[0];

        // Display inital graphs 
        Plots(firstData);
        //Demographics(firstData);
    });
};

// Plots
function Plots(airport) {

    d3.json(url).then(function(dataPromise) {
        
        // Create data references  
        for (let i = 0; i < dataPromise.length; i++) {
            let months = dataPromise[i].month;
            console.log(months);
            let lateArrival = dataPromise[i].arr_delayed;
            console.log(lateArrival);
            let filterLateArrival = lateArrival.filter(dataPromise => dataPromise[i].airport === airport);
            let carrierCancellation = dataPromise[i].carrier_ct; // are these carrier cancellations?
            let filterarrierCancellation = carrierCancellation.filter(sample => dataPromise[i].airport === airport);
        };

        // Line Chart
        let cancellations = {
            x: filterLateArrival,
            y: months,
            type: 'scatter'
          };
          
          let delays = {
            x: filterarrierCancellation,
            y: months,
            type: 'scatter'
          };
          
          let lineData = [cancellations, delays];
          
          Plotly.newPlot("line", lineData);

        // Bar Chart 
        // let graphData = {
            // x: sampleValueTop10,
            //y: otuIdTop10,
            //text: otuLabelTop10,
            //type: "bar",
            //orientation: "h"
        //};
  
        // Data trace array
        //let traceData = [graphData];

        //let layout = {
            //height: 600,
            //: 800
        //};
    
        //Plotly.newPlot("bar", traceData, layout);

    });

}


// Demographics 
//function Demographics(id) {

    // Grab information
    //d3.json(url).then(function(data) {

        // Filter metadata for each ID
        //let demoInfo = data.metadata.filter(info => info.id == id);

        // Grab first value
        //let firstDemo = demoInfo[0];

        // Select metadata location in html file
        //d3.select("#sample-metadata").html("");

        // Append each key-value pair 
        //Object.entries(firstDemo).forEach(([key, value]) => {
            //console.log(key, value);
            //d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        //});
    //});
//};

// Update the Plots
function optionChanged(value) { 
    Plots(value);
    //Demographics(value);
}
  
init();