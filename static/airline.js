

d3.json(url).then(function(data) {
  const myData = data;
  console.log(myData);

  function init() {
    const airlines = [...new Set(myData.map(d => d.airline))].sort();
    populateDropdown("selAirline", airlines);

    const defaultAirline = airlines[0];

    const defaultData = myData.filter(d => d.airline === defaultAirline);

    const dropdown = document.getElementById("selAirline");
    dropdown.value = defaultAirline;

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
      const selectedAirline = dropdown.value;
      const filteredData = myData.filter(d => d.airline === selectedAirline);
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

  init();
});
