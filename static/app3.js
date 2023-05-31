d3.json(url).then(function(data) {
  // Extract the unique airports and carrier names from the data
  const airports = [...new Set(data.map(item => item.airport))];
  const carrierNames = [...new Set(data.map(item => item.carrier_name))];

  // Create the dropdown menu for arr_del15
  const arrDel15Dropdown = d3.select('#arrDel15Dropdown');
  airports.forEach(function(airport) {
    arrDel15Dropdown.append('option').attr('value', airport).text(airport);
  });

  // Create the dropdown menu for arr_cancelled
  const arrCancelledDropdown = d3.select('#arrCancelledDropdown');
  carrierNames.forEach(function(carrierName) {
    arrCancelledDropdown.append('option').attr('value', carrierName).text(carrierName);
  });

  // Define the initial selected values
  let selectedArrDel15 = arrDel15Dropdown.property('value');
  let selectedArrCancelled = arrCancelledDropdown.property('value');

  // Function to handle arr_del15 dropdown change
  function changeArrDel15() {
    selectedArrDel15 = arrDel15Dropdown.property('value');
    createHeatmap();
  }

  // Function to handle arr_cancelled dropdown change
  function changeArrCancelled() {
    selectedArrCancelled = arrCancelledDropdown.property('value');
    createHeatmap();
  }

  // Attach the change event listeners to the dropdowns
  arrDel15Dropdown.on('change', changeArrDel15);
  arrCancelledDropdown.on('change', changeArrCancelled);

  // Function to create the heatmap
  function createHeatmap() {
    // Clear the existing heatmap
    d3.select('#heatmap').html('');

    // Filter the data based on selected values
    const filteredDataArrDel15 = data.filter(d => d.airport === selectedArrDel15);
    const filteredDataArrCancelled = data.filter(d => d.carrier_name === selectedArrCancelled);

    // Find the minimum and maximum values for scaling the colors
    const minValueArrDel15 = d3.min(filteredDataArrDel15, d => +d.arr_del15);
    const maxValueArrDel15 = d3.max(filteredDataArrDel15, d => +d.arr_del15);
    const minValueArrCancelled = d3.min(filteredDataArrCancelled, d => +d.arr_cancelled);
    const maxValueArrCancelled = d3.max(filteredDataArrCancelled, d => +d.arr_cancelled);

    // Create the x-axis labels
    const xLabelsArrDel15 = filteredDataArrDel15.map(d => d.carrier_name);
    const xLabelsArrCancelled = filteredDataArrCancelled.map(d => d.airport);

    // Create the heatmap for arr_del15
    const heatmapArrDel15 = d3.select('#heatmap')
      .append('div')
      .attr('class', 'heatmap')
      .selectAll('.heatmap-cell')
      .data(filteredDataArrDel15)
      .enter()
      .append('div')
      .attr('class', 'heatmap-cell')
      .style('background-color', d => {
        const colorScale = d3.scaleLinear().domain([minValueArrDel15, maxValueArrDel15]).range(['blue', 'red']);
        return colorScale(+d.arr_del15);
      });

    // Create the heatmap for arr_cancelled
    const heatmapArrCancelled = d3.select('#heatmap')
      .append('div')
      .attr('class', 'heatmap')
      .selectAll('.heatmap-cell')
      .data(filteredDataArrCancelled)
      .enter()
      .append('div')
      .attr('class', 'heatmap-cell')
      .style('background-color', d => {
        const colorScale = d3.scaleLinear().domain([minValueArrCancelled, maxValueArrCancelled]).range(['blue', 'red']);
        return colorScale(+d.arr_cancelled);
      });

    // Set the x-axis labels
    heatmapArrDel15.append('div')
      .attr('class', 'x-label')
      .text(d => d.carrier_name);

    heatmapArrCancelled.append('div')
      .attr('class', 'x-label')
      .text(d => d.airport);
  }

  // Call the createHeatmap function initially
  createHeatmap();
});