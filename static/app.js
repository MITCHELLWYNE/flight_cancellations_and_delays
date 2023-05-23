// Create URL variable
// const url = "http://127.0.0.1:5000/api/airline_delay_cause.json";
// const url = "{{url_for('airline_delay_cause')}}"
//const dataPromise = d3.json(url);
//console.log("Data Promise: ", dataPromise);



// =================================================================================

// THIS ONLY RUNS IF I PYTHON3 APP.PY RUN APP.PY IN THE TERMINAL AND HAVE THE JSON PAGE OPEN

// =================================================================================

// Read in JSON 
//d3.json(url).then(function(data) {
    //console.log(data);
    //console.log(data[1].airport);

    //for (let i = 0; i < data.length; i++) {
        //let months = data[i].month;
        //console.log(months);
        //let lateArrival = data[i].arr_delayed;
        //console.log(lateArrival);
        //let filterLateArrival = lateArrival.filter(result => result[i].airport == airport);
        //console.log(filterLateArrival);
        // let carrierCancellation = dataPromise[i].carrier_ct; // are these carrier cancellations?
        // let filterarrierCancellation = carrierCancellation.filter(sample => dataPromise[i].airport === airport);
    //};

//});


// Ariel's Code
d3.json(url).then(function(data) {
    const myData = data;
    console.log(myData);
  
    function init() {
      const airports = [...new Set(myData.map(d => d.airport))].sort();
      populateDropdown("selAirport", airports);
  
      const defaultAirport = airports[0];
  
      const defaultData = myData.filter(d => d.airport === defaultAirport);
  
      const dropdown = document.getElementById("selAirport");
      dropdown.value = defaultAirport;
  
      createTable(defaultData);
  
    }
  
    function populateDropdown(elementId, options) {
      const dropdown = document.getElementById(elementId);
      dropdown.innerHTML = "";
  
      options.forEach(function(option) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        dropdown.appendChild(optionElement);
      });
  
      dropdown.addEventListener("change", function() {
        const selectedAirport = dropdown.value;
        const filteredData = myData.filter(d => d.airport === selectedAirport);
        createTable(filteredData);
      });
    }
  
    function calculateRates(data) {
      const airlineData = d3.nest()
        .key(d => d.carrier_name)
        .rollup(function(values) {
          const totalFlights = d3.sum(values, d => parseFloat(d.arr_flights));
          const totalCancelled = d3.sum(values, d => parseFloat(d.arr_cancelled));
          const totalDelayed = d3.sum(values, d => parseFloat(d.arr_del15));
  
          const cancellationRate = (totalCancelled / totalFlights * 100).toFixed(2);
          const delayRate = (totalDelayed / totalFlights * 100).toFixed(2);
  
          return {
            cancellationRate,
            delayRate
          };
        })
        .entries(data);
  
      return airlineData.map(d => {
        return {
          airline: d.key,
          cancellationRate: parseFloat(d.value.cancellationRate),
          delayRate: parseFloat(d.value.delayRate)
        };
      });
    }
  
    function createTable(data) {
      const processedData = calculateRates(data);
  
      // Create the table element
      const table = document.createElement("table");
      table.style.borderCollapse = "collapse";
      table.style.textAlign = "center";
  
      // Create the table header row
      const headerRow = table.insertRow();
      headerRow.style.border = "1px solid black";
      const airlineHeader = headerRow.insertCell();
      airlineHeader.textContent = "Airline";
      airlineHeader.style.border = "1px solid black";
      airlineHeader.classList.add("bold");
      const cancellationRateHeader = headerRow.insertCell();
      cancellationRateHeader.textContent = "Cancellation Rate (%)";
      cancellationRateHeader.style.border = "1px solid black";
      const delayRateHeader = headerRow.insertCell();
      delayRateHeader.textContent = "Delay Rate (%)";
      delayRateHeader.style.border = "1px solid black";
  
  
      // Create table rows
      processedData.forEach(function(d) {
        const row = table.insertRow();
        row.style.border = "1px solid black";
        const airlineCell = row.insertCell();
        airlineCell.textContent = d.airline;
        airlineCell.style.border = "1px solid black";
        const cancellationRateCell = row.insertCell();
        cancellationRateCell.textContent = d.cancellationRate;
        cancellationRateCell.style.border = "1px solid black";
        const delayRateCell = row.insertCell();
        delayRateCell.textContent = d.delayRate;
        delayRateCell.style.border = "1px solid black";
      });
  
      // Clear the previous table content
      const tableContainer = document.getElementById("table");
      tableContainer.innerHTML = "";
  
      // Append the table to the container
      tableContainer.appendChild(table);
    }




    // Test 
    // Extracting the month and arr_delayed values
    const DelPoints = myData.map(data => ({
      month: data.month,
      arr_flights: data.arr_flights
    }));
    
    // Sorting the DelPoints array based on the month
    DelPoints.sort((a, b) => a.month - b.month);
    
    // Creating arrays for x-axis (months) and y-axis (arr_flights)
    const xDataDel = DelPoints.map(data => data.month);
    const yDataDel = DelPoints.map(data => data.arr_flights);

    // Extracting the month and arr_cancelled values
    const CalPoints = myData.map(data => ({
      month: data.month,
      arr_flights: data.arr_cancelled
    }));
    
    // Sorting the CalPoints array based on the month
    CalPoints.sort((a, b) => a.month - b.month);

    // Creating arrays for x-axis (months) and y-axis (arr_cancelled)
    const xDataCan = CalPoints.map(data => data.month);
    const yDataCan = CalPoints.map(data => data.arr_cancelled);
    
    // Creating a line graph using Chart.js library
    // Line Chart
          let delays = {
            x: xDataDel,
            y: yDataDel,
            type: 'line'
          };

          let cancellations = {
            x: xDataCan,
            y: yDataCan,
            type: 'line'
          };
          
          let lineData = [delays, cancellations];
          
          Plotly.newPlot("bar", lineData);
    
        
      

    //Create data references  
    //const airports = [...new Set(myData.map(d => d.airport))].sort();
    //const defaultAirport = airports[0];
    //let filter = myData.filter(d => d.airport === defaultAirport);
    //let months = myData.map(d => d.month).filter(filter);
    //let months = myData.map(d => d.month).filter(d => d.airport === defaultAirport);
    //console.log(months);
    //let lateArrival = [...new Set(myData.map(d => d.arr_delayed))].filter(d => d.airport === defaultAirport);
    //console.log(lateArrival);
    
    // works but stored as dictionary
    //const arrDelayedByAirport = {};
    //myData.forEach(data => {
      //const { airport, arr_delayed } = data;
      //if (arrDelayedByAirport[airport]) {
        //arrDelayedByAirport[airport] += arr_delayed;
      //} else {
        //arrDelayedByAirport[airport] = arr_delayed;
      //}
    //});
    //console.log(arrDelayedByAirport);
    
    //for (let i = 0; i < data.length; i++) {
        //let months = data[i].month;
        //console.log(months);
        //let lateArrival = data[i].arr_delayed;
        //console.log(lateArrival);
        //let filterLateArrival = lateArrival.filter(d => d.airport === defaultAirport);

        //let lateArrival = [...new Set(myData.map(d => d.arr_delayed))].filter(d => d.airport === defaultAirport);
  
    
  
    //const defaultData = myData.filter(d => d.airport === defaultAirport);
            //let carrierCancellation = data[i].carrier_ct; // are these carrier cancellations?
            //let filterarrierCancellation = carrierCancellation.filter(sample => dataPromise[i].airport === airport);
    //};

        // Line Chart
        //let cancellations = {
            //x: filterLateArrival,
            //y: months,
            //type: 'scatter'
          //};
          
          //let delays = {
            //x: filterarrierCancellation,
            //y: months,
            //type: 'scatter'
          //};
          
          //let lineData = [cancellations, delays];
          
          //Plotly.newPlot("line", lineData);

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

    init();
  }
);