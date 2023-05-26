var selectedOption = "carrier_delay"; 

// Function to handle dropdown change
function changeOption() {
  var dropdown = document.getElementById("carrierDropdown");
  selectedOption = dropdown.value;

  createHeatmap();
};

// Function to create the heatmap
function createHeatmap() {
  // Read the CSV file
  d3.csv("C:\\Users\\mitch\\flight_cancellations_and_delays\\Airline_Delay_Cause 2022.csv").then(function(data) {
    // Parse the CSV data
    var parsedData = data.map(function(d) {
      return {
        airline: d.Carrier,
        airport: d.Airport,
        carrier_delay: +d.CarrierDelay,
        arr_del15: +d.ArrDel15,
        arr_cancelled: +d.Cancelled
      };
    });

    // Group the data by carrier and airport
    var groupedData = d3.group(parsedData, d => d.airline, d => d.airport);

    // Extract the values based on the selected option
    var heatmapData = Array.from(groupedData, ([key, value]) => {
      var obj = {
        carrier: key
      };

      value.forEach(function(d) {
        obj[d[0]] = d[1][0][selectedOption];
      });

      return obj;
    });

    // Clear the existing heatmap
    document.getElementById("heatmap").innerHTML = "";

    // Create the heatmap
    var heatmap = d3.select("heatmap")
      .selectAll("div")
      .data(heatmapData)
      .enter()
      .append("div")
      .style("width", "20px") 
      .style("height", "20px") 
      .style("background-color", function(d) {
        
        return d3.interpolateBlues(d[selectedOption] / 100); 
      });
  });
}

// Call the createHeatmap function initially
createHeatmap();