import React from "react";
import ReactApexChart from "react-apexcharts";

class Chart extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "north",
               data: [
                  {
                     x: 1996,
                     y: 340,
                  },
                  {
                     x: 1997,
                     y: 324,
                  },
                  {
                     x: 1998,
                     y: 329,
                  },
                  {
                     x: 1999,
                     y: 342,
                  },
                  {
                     x: 2000,
                     y: 348,
                  },
                  {
                     x: 2001,
                     y: 334,
                  },
                  {
                     x: 2002,
                     y: 325,
                  },
                  {
                     x: 2003,
                     y: 366,
                  },
                  {
                     x: 2004,
                     y: 318,
                  },
                  {
                     x: 2005,
                     y: 330,
                  },
                  {
                     x: 2006,
                     y: 355,
                  },
                  {
                     x: 2007,
                     y: 366,
                  },
                  {
                     x: 2008,
                     y: 337,
                  },
                  {
                     x: 2009,
                     y: 352,
                  },
                  {
                     x: 2010,
                     y: 377,
                  },
                  {
                     x: 2011,
                     y: 383,
                  },
                  {
                     x: 2012,
                     y: 344,
                  },
                  {
                     x: 2013,
                     y: 366,
                  },
                  {
                     x: 2014,
                     y: 389,
                  },
                  {
                     x: 2015,
                     y: 334,
                  },
               ],
            },
         ],
         options: {
            chart: {
               type: "area",
               height: 420,
               toolbar: {
                  show: false,
               },
            },
            dataLabels: {
               enabled: false,
            },
            responsive: [
               {
                  breakpoint: 767,
                  options: {
                     chart: {
                        height: 250,
                     },
                  },
               },
            ],

            stroke: {
               curve: "smooth",
               colors: ["#ffab2e"],
            },

            xaxis: {
               type: "datetime",
               axisBorder: {
                  show: false,
               },
               axisTicks: {
                  show: false,
               },
            },
            yaxis: {
               tickAmount: 4,
               floating: false,

               labels: {
                  style: {
                     colors: "#8e8da4",
                  },
                  offsetY: -7,
                  offsetX: 0,
               },
               axisBorder: {
                  show: false,
               },
               axisTicks: {
                  show: false,
               },
            },
            fill: {
               opacity: 0.1,
               colors: ["#ffab2e"],
            },
            toolbar: {
               enabled: false,
            },
            tooltip: {
               x: {
                  format: "yyyy",
               },
               fixed: {
                  enabled: false,
                  position: "topRight",
               },
            },
            grid: {
               yaxis: {
                  lines: {
                     offsetX: -30,
                  },
               },
               padding: {
                  left: 20,
               },
            },
         },
      };
   }

   render() {
      return (
         <div id="chart">
            <ReactApexChart
               options={this.state.options}
               series={this.state.series}
               type="area"
               height={350}
            />
         </div>
      );
   }
}

export default Chart;
