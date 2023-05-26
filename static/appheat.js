d3.csv('Airline_Delay_Cause 2022.csv').then(function(data) {
    var parseData = data.map(function(d) {
        return {
            x: +d.arr_flights, 
            y: +d.month,
            value: +d.arr_del15            
        };
    });


var heatmap = d3.select("heatmap_element")
.selectAll("div")
.data(parsedData)
.enter()
.append("div")
.style("width", "20px")
.style("height", "20px")
.style("background-color", function(d){
    return d3.interpolateBlues(d.values);
    }) 
});


function init( {
    let dropdownMenu = d3.select("selDataset")
})


// d3.csv("C:\\Users\\mitch\\flight_cancellations_and_delays\\Airline_Delay_Cause 2022.csv").then(function(data) {
//     // Parse the CSV data
//     var parsedData = data.map(function(d) {
//       return {
//         airline: d.Carrier,
//         airport: d.Airport,
//         arr_del15: +d.ArrDel15,
//         arr_cancelled: +d.Cancelled
//       };
//     });
  
//     // Group the data by airline and airport
//     var groupedData = d3.group(parsedData, d => d.airline, d => d.airport);
  
//     // Extract the values for arr_del15 and arr_cancelled
//     var heatmapData = Array.from(groupedData, ([key, value]) => {
//       var obj = {
//         airline: key
//       };
  
//       value.forEach(function(d) {
//         obj[d[0]] = d[1][0].arr_del15 + d[1][0].arr_cancelled;
//       });
  
//       return obj;
//     });
  
//     // Set up the dimensions and margins of the heatmap
//     var margin = { top: 50, right: 30, bottom: 30, left: 100 },
//         width = 800 - margin.left - margin.right,
//         height = 400 - margin.top - margin.bottom;
  
//     // Create the SVG container
//     var svg = d3.select("#heatmap")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
//     // Define the color scale
//     var colorScale = d3.scaleLinear()
//       .domain([0, d3.max(heatmapData, function(d) { return d3.sum(Object.values(d)); })])
//       .range(["#e5f5f9", "#2ca25f"]); // Adjust the colors as needed
  
//     // Create the heatmap rectangles
//     var heatmap = svg.selectAll(".heatmap-rect")
//       .data(heatmapData)
//       .enter()
//       .append("rect")
//       .attr("x", function(d) { return d.airline; })
//       .attr("y", function(d, i) { return i * 20; })
//       .attr("width", function(d) { return d3.sum(Object.values(d)); })
//       .attr("height", 20)
//       .style("fill", function(d) { return colorScale(d3.sum(Object.values(d))); });
  
//     // Add labels to the heatmap
//     svg.selectAll(".heatmap-label")
//       .data(heatmapData)
//       .enter()
//       .append("text")
//       .attr("x", function(d) { return d3.sum(Object.values(d)) + 10; })
//       .attr("y", function(d, i) { return i * 20 + 15; })
//       .text(function(d) { return d.airline; });
  
//     // Add a color legend
//     var legend =

//     <!DOCTYPE html>
// <html>
// <head>
//   <title>Heatmap Example</title>
//   <script src="https://d3js.org/d3.v7.min.js"></script>
//   <script src="https://cdn.jsdelivr.net/npm/papaparse@5.3.0"></script>
//   <script src="heatmap.js"></script>
// </head>
// <body>
//   <div id="heatmap"></div>
// </body>
// </html>