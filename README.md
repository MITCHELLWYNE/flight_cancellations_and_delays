# flight_cancellations_and_delays
**A look into the cancellations and delays by airline, and the causes for those delays or cancellations**

For our project we want to look into the flight cancellation and delay rate in the United States in 2022 since post pandemic people are traveling a lot now. From a passenger's point of view, we want to offer some insight to see if there would be a better choice in terms of airline, airport or month when travelling. 

## Home Page
In home page, we offer some general comparison between each airline, the performance is based in 2022. The first graph is the overall customer satisfaction study, we were not able to find a dataset, this data source is coming from J.D. Power 2022 North America Airline Satisfaction Study, numbers are based on a 1000-point scale. According to this study, Southwest, JetBlue, and Delta are the top 3 performers, while Spirit, American airline, and Frontier are the bottom 3 performers.  
The second graph is the financial performance, the net income by airlines in 2022. According to this dataset, it’s interesting to see that Delta and Southwest which have the best performance in customer satisfaction rating also have the highest net income, while Spirit and American airline which have the lowest customer satisfaction rating also have a lowest net income. 
The last one in this page is a summary of delay rate by each airline, Allegaint, JetBlue, and Frontier have the highest delay rate, while Skywest, Endeavor, and Delta have the lowest delay rate. Although high delay rate doesn’t essentially cause low customer satisfaction or poor financial performance, we think it could be insightful to let our users to have this information.

## Airport and Airline Breakdowns
The airport and airline pages allow users to further explore cancellations and delays. They both contain a breakdown of delay information and a comparison of delays and cancellations over the course of the 2022 year. This feature can help users decide if there are certain months where travel should be avoided, or where they should expect delays. 

For example, on the airline page, if Southwest is selected, users can see that Southwest experienced high cancellations during the month of December. This spike appears abnormal compared to the rest of the year. Thus a user could conduct further research to determine if this spike in cancellations was an anomoly or standard for December. In this case, a quick search reveals that Southwest cancelled 70% of their flights during the last days of December due to weather and internal airline issues (CNN). Although weather cannot be controlled, the airline was put under the Department of Transportation's watch due to the airline's handling of the situation. This may give users pause on whether or not they want to fly Southwest. 
[CNN Why Southwest is Melting Down aritcle](https://www.cnn.com/2022/12/27/business/southwest-airlines-service-meltdown/index.html)

Similarly, if deciding between airports, looking at delay and cancellation rates by airport may be useful. For example, if a user is looking at flights and has options between a layover in Cleveland and one through Chicago O'Hare, the airport tab allows for a quick comparison of what one should expect at each airport. The table below the line chart allows users to see a breakdown of delay and cancellation percentages. 
Present on both pages is also an overview panel that includes detailed information about delays throughout the year. It gives the total number of delayed flights and then a breakdown of why flights were delayed. 

These categories are defined as such by the Bureau of Transportation Statistics:

- Air Carrier: The cause of the cancellation or delay was due to circumstances within the airline's control (e.g. maintenance or crew problems, aircraft cleaning, baggage loading, fueling, etc.).
- Extreme Weather: Significant meteorological conditions (actual or forecasted) that, in the judgment of the carrier, delays or prevents the operation of a flight such as tornado, blizzard or hurricane.
- National Aviation System (NAS): Delays and cancellations attributable to the national aviation system that refer to a broad set of conditions, such as non-extreme weather conditions, airport operations, heavy traffic volume, and air traffic control.
- Late-arriving aircraft: A previous flight with same aircraft arrived late, causing the present flight to depart late.
- Security: Delays or cancellations caused by evacuation of a terminal or concourse, re-boarding of aircraft because of security breach, inoperative screening equipment and/or long lines in excess of 29 minutes at screening areas.

[Bureau of Transportation Statistics Delay Causes](https://www.bts.gov/topics/airlines-and-airports/understanding-reporting-causes-flight-delays-and-cancellations)

## Delays and Cancellations ##
These two pages show the Carriers and Airports in a heatmap with a color scale from blue to red, for the delays page, and a color scale from purple to orange for the cancellations page how many delayed by 15 minutes, and cancelled flights there were by month.  In the delays page the brighter the red the more delays there were.  In the cancellations page the brighter the orange the more cancellations there were.  On both pages there is a hover over functioned used for easier reading.  After each hover over the grid line is greyed out to inform you that you have read that line.  In the drop down you are able to choose first from the carrier names.  In the second drop down you are able to choose from the Airport name.  Using this visualization lets you pick by your local airport and see how the carrier you chose is based on if it is late, or cancelled based on the previous years data.  

### Note ###
If the web app is used as a Github Page, the app.py file has to be downloaded and run in the terminal in order for the pages to work as intended.
