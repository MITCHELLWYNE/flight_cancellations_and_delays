// Read data
d3.json(url).then(function(data) {
    const myData = data;
    console.log(myData);
  
    // Define variables to store the line graph data
    let xDataDel = [];
    let yDataDel = [];
    let xDataCan = [];
    let yDataCan = [];
  
    function init() {
      const airports = [...new Set(myData.map(d => d.airport))].sort();
      populateDropdown("selAirport", airports);
  
      const defaultAirport = airports[0];
      updateLineGraph(defaultAirport);
      createTable(defaultAirport);
  
      const dropdown = document.getElementById("selAirport");
      dropdown.value = defaultAirport;
  
      dropdown.addEventListener("change", function() {
        const selectedAirport = dropdown.value;
        updateLineGraph(selectedAirport);
        createTable(selectedAirport);
      });
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

      //added
      dropdown.addEventListener("change", function() {
        const selectedAirport = dropdown.value;
        const filteredData = myData.filter(d => d.airport === selectedAirport);
        createTable(filteredData);
        updateLineGraph();
      });
    }
    //added
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
    //added
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


    function updateLineGraph(airport) {
      // Filter data for the selected airport
      const filteredData = myData.filter(d => d.airport === airport);
  
      // Update the line graph data
      updateDelaysData(filteredData);
      updateCancellationsData(filteredData);
  
      // Update the line graph with new data
      updateLineGraphPlot();

      // Update table data
      createTable(filteredData);
    }
  
    function updateDelaysData(data) {
      const DelPoints = data.map(data => ({
        month: data.month,
        arr_flights: data.arr_del15
      }));
  
      DelPoints.sort((a, b) => a.month - b.month);
  
      xDataDel = DelPoints.map(data => data.month);
      yDataDel = DelPoints.map(data => data.arr_flights);
    }
  
    function updateCancellationsData(data) {
      const CalPoints = data.map(data => ({
        month: data.month,
        arr_flights: data.arr_cancelled
      }));
  
      CalPoints.sort((a, b) => a.month - b.month);
  
      xDataCan = CalPoints.map(data => data.month);
      yDataCan = CalPoints.map(data => data.arr_flights);
    }
  
    function updateLineGraphPlot() {
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
    }
  
    init();
  });