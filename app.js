// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
const url = "{{url_for('airline_delay_cause')}}"
let myData;

d3.json(url).then(function(myData) {
    myData = data;
    console.log(myData);
};


// function init() {
//     let otu_ids = data.samples[0].otu_ids;
//     let sample_values = data.samples[0].sample_values;
//     let otu_labels = data.samples[0].otu_labels;
//     let otu_labels_formatted = otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);

//     let trace1 = {
//         x: sample_values.slice(0,10).reverse(),
//         y: otu_labels_formatted,
//         type: 'bar',
//         text: otu_labels.slice(0,10),
//         orientation: 'h'
//     };

//     let dataPlot = [trace1];

//     Plotly.newPlot('bar', dataPlot);
//     //////////////////////////////////////


//     let trace2 = {
//         x: otu_ids,
//         y: sample_values,
//         mode: 'markers',
//         marker: {
//             size: sample_values,
//             color: otu_ids
//             },
//     text: otu_labels
//     };

//     let dataPlot2 = [trace2];

//     Plotly.newPlot('bubble', dataPlot2);
//     /////////////////////////////////////

//     d3.select("#sample-metadata").append("panel-body").text("id: " +data.metadata[0].id);
//     d3.select("#sample-metadata").append("panel-body").append("br");
//     d3.select("#sample-metadata").append("panel-body").text("ethnicity : " +data.metadata[0].ethnicity);
//     d3.select("#sample-metadata").append("panel-body").append("br");
//     d3.select("#sample-metadata").append("panel-body").text("gender: " +data.metadata[0].gender);
//     d3.select("#sample-metadata").append("panel-body").append("br");
//     d3.select("#sample-metadata").append("panel-body").text("age: " +data.metadata[0].age);
//     d3.select("#sample-metadata").append("panel-body").append("br");
//     d3.select("#sample-metadata").append("panel-body").text("location: " +data.metadata[0].location);
//     d3.select("#sample-metadata").append("panel-body").append("br");
//     d3.select("#sample-metadata").append("panel-body").text("bbtype: " +data.metadata[0].bbtype);
//     d3.select("#sample-metadata").append("panel-body").append("br");
//     d3.select("#sample-metadata").append("panel-body").text("wfreq: " +data.metadata[0].wfreq);
// }


// for(let a=0; a< data.metadata.length; a++) {
//     d3.select("#selDataset").append("option").text(data.metadata[a].id)
// };


// d3.select("#selDataset").on("change", updateInfo);

// function updateInfo() {
//     let dropdownMenu = d3.select("#selDataset");
//     let dataset = dropdownMenu.property("value");

//     let id = [];
//     let ethnicity = [];
//     let gender = [];
//     let age = [];
//     let location = [];
//     let bbtype = [];
//     let wfreq = [];
    
//     for (let i=0; i<data.metadata.length; i++) {
//         id.push(data.metadata[i].id)
//         ethnicity.push(data.metadata[i].ethnicity)
//         gender.push(data.metadata[i].gender)
//         age.push(data.metadata[i].age)
//         location.push(data.metadata[i].location)
//         bbtype.push(data.metadata[i].bbtype)
//         wfreq.push(data.metadata[i].wfreq)
//     };


//     for (let j=0; j<id.length; j++) {
//         if (dataset == id[j]) {
//             let trace1 = {
//                 x: data.samples[j].sample_values.slice(0,10).reverse(),
//                 y:  data.samples[j].otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`),
//                 type: 'bar',
//                 text: data.samples[j].otu_labels.slice(0,10),
//                 orientation: 'h'
//             };
        
//             let dataPlot = [trace1];
        
//             Plotly.newPlot('bar', dataPlot);
//             //////////////////////////////////

//             let trace2 = {
//                 x: data.samples[j].otu_ids,
//                 y: data.samples[j].sample_values,
//                 mode: 'markers',
//                 marker: {
//                     size: data.samples[0].sample_values,
//                     color: data.samples[j].otu_ids
//                     },
//             text: data.samples[j].otu_labels
//             };
        
//             let dataPlot2 = [trace2];
        
//             Plotly.newPlot('bubble', dataPlot2);

//             d3.select(".panel-body").text("id: " +id[j]);
//             d3.select("#sample-metadata").append("panel-body").append("br");
//             d3.select("#sample-metadata").append("panel-body").text("ethnicity : " +ethnicity[j]);
//             d3.select("#sample-metadata").append("panel-body").append("br");
//             d3.select("#sample-metadata").append("panel-body").text("gender: " +gender[j]);
//             d3.select("#sample-metadata").append("panel-body").append("br");
//             d3.select("#sample-metadata").append("panel-body").text("age: " +age[j]);
//             d3.select("#sample-metadata").append("panel-body").append("br");
//             d3.select("#sample-metadata").append("panel-body").text("location: " +location[j]);
//             d3.select("#sample-metadata").append("panel-body").append("br");
//             d3.select("#sample-metadata").append("panel-body").text("bbtype: " +bbtype[j]);
//             d3.select("#sample-metadata").append("panel-body").append("br");
//             d3.select("#sample-metadata").append("panel-body").text("wfreq: " +wfreq[j]);
//         };
//     };
// }



// init();

// });





