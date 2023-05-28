d3.json(url).then(function(data) {
    const myData = data;
    console.log(myData);
  
    function incomeBarChart() {
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
  
    incomeBarChart();
});



d3.json(url_1).then(function(data_1) {
  const myData_1 = data_1;
  console.log(myData_1);
  

  function delayBarChart() {
    //const airlines = [...new Set(myData_1.map(item => item.carrier_name))];
    const airlines = ['Southwest Airlines Co.',
      'American Airlines Inc.',
      'Delta Air Lines Inc.',
      'SkyWest Airlines Inc.',
      'United Air Lines Inc.',
      'JetBlue Airways',
      'Republic Airline',
      'Spirit Air Lines',
      'Frontier Airlines Inc.',
      'Alaska Airlines Inc.',
      'Envoy Air',
      'PSA Airlines Inc.',
      'Allegiant Air',
      'Endeavor Air Inc.',
      'Mesa Airlines Inc.',
      'Hawaiian Airlines Inc.',
      'Horizon Air']
    // const delayData = airlines.map(airline => {
    //   const airlineData = myData_1.filter(item => item.carrier_name === airline);
    //   const sumDelay = airlineData.reduce((sum, item) => sum + item.arr_del15, 0);
    //   return {
    //     airline: airline,
    //     sumDelays: sumDelay
    //   };
    // });
    const delayData = [305255,
      190872,
      140056,
      119580,
      118018,
      85373,
      58949,
      55480,
      47981,
      45003,
      41891,
      40071,
      38373,
      36473,
      21795,
      17131,
      14497]
      //const sortedData = delayData.sort((a, b) => b.sumDelays - a.sumDelays);

      // const xData = sortedData.map(item => item.airline); 
      // const yData = sortedData.map(item => item.sumDelays);
      const xData = airlines;
      const yData = delayData;

      let trace = {
          x: xData,
          y: yData,
          type: 'bar'
      };

      let layout = {
          height: 400,
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

  delayBarChart();
  });
      

function satBarChart() {
  const airlines = ['Southwest Airlines Co.',
      'JetBlue Airways',
      'Delta Air Lines Inc.',
      'Allegiant Air',
      'Alaska Airlines Inc.',
      'Segment Average',
      'SkyWest Airlines Inc.',
      'Air Canada',
      'United Air Lines Inc.',
      'Spirit Air Lines',
      'American Airlines Inc.',
      'Frontier Airlines Inc.',
      'WestJet']

  const satData = [849,
  828,
  813,
  803,
  794,
  792,
  777,
  774,
  772,
  770,
  755,
  751]

  const xData = airlines;
  const yData = satData;

      let trace = {
          x: xData,
          y: yData,
          type: 'bar'
      };

      let layout = {
          height: 400,
          width: 1200,
          title: 'Overall Customer Satisfaction by Airline in 2022',
          xaxis: {
              title: 'Airline'
          },
          yaxis: {
              title: '(Based on a 1000-point Scale)'
          }
      };

      let chartData = [trace];

      Plotly.newPlot('barSat', chartData, layout);
  }

  satBarChart();
