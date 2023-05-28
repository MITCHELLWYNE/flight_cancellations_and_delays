d3.json(url).then(function(data) {
    const myData = data;
    console.log(myData);
  
    function createBarChart() {
      const airlines = [...new Set(myData.map(item => item.UniqueCarrierName))];
  
      const netIncomeData = airlines.map(airline => {
        const airlineData = myData.filter(item => item.UniqueCarrierName === airline);
        const netIncomeSum = airlineData.reduce((sum, item) => sum + item.NetIncome, 0);
        return {
          airline: airline,
          netIncome: netIncomeSum
        };
      });
  
      const sortedData = netIncomeData.sort((a, b) => b.netIncome - a.netIncome);
  
      const xData = sortedData.map(item => item.airline);
      const yData = sortedData.map(item => item.netIncome);
  
      let trace = {
        x: xData,
        y: yData,
        type: 'bar'
      };
  
      let layout = {
        height: 400,
        width: 1200,
        title: 'Net Income by Airlines in 2022',
        xaxis: {
          title: 'Airline'
        },
        yaxis: {
          title: 'Net Income'
        }
      };
  
      let chartData = [trace];
  
      Plotly.newPlot('bar', chartData, layout);
    }
  
    createBarChart();
  });



d3.json(url_1).then(function(data_1) {
const myData_1 = data_1;
console.log(myData_1);

function BarChart() {
    const airlines = [...new Set(myData_1.map(item => item.carrier_name))];

    const airlineData = airlines.map(airline => {
    const filteredData = myData_1.filter(item => item.carrier_name === airline);
    const sumDelay = filteredData.reduce((sum, item) => sum + item.arr_del15, 0);
    return {
        airline: airline, // Update the property name to "airline" instead of "airlines"
        sumDelays: sumDelay
    };
    });

    const sortedData = airlineData.sort((a, b) => b.sumDelays - a.sumDelays);

    const xData = sortedData.map(item => item.airline); // Update the variable name to "airline"
    const yData = sortedData.map(item => item.sumDelays);

    let trace = {
    x: xData,
    y: yData,
    type: 'bar'
    };

    let layout = {
    height: 500,
    width: 1200,
    title: 'Total Delay Counts by Airline in 2022',
    xaxis: {
        title: 'Airline'
    },
    yaxis: {
        title: 'Total Count',
        tickformat: ',.0f'
    }
    };

    let chartData = [trace];

    Plotly.newPlot('bar1', chartData, layout);
}

  BarChart();
});
      