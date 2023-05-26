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