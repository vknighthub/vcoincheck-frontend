import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartCircle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [75, 65, 50],
      options: {
        chart: {
          type: "radialBar",
          //width:320,
          // height: 370,
          offsetY: 0,
          offsetX: 0,
        },
        plotOptions: {
          radialBar: {
            size: undefined,
            inverseOrder: false,
            hollow: {
              margin: 0,
              size: "30px",
              background: "transparent",
            },

            track: {
              show: true,
              background: "#e1e5ff",
              strokeWidth: "10%",
              opacity: 1,
              margin: 10, // margin is in pixels
            },
          },
        },
        // responsive: [
        //    {
        //       breakpoint: 830,
        //       options: {
        //          chart: {
        //             offsetY: 0,
        //             offsetX: 0,
        //          },
        //          legend: {
        //             position: "bottom",
        //             offsetX: 0,
        //             offsetY: 0,
        //          },
        //          plotOptions: {
        //             radialBar: {
        //                hollow: {
        //                   size: "20%",
        //                },
        //             },
        //          },
        //       },
        //    },
        //    {
        //       breakpoint: 800,
        //       options: {
        //          chart: {
        //             offsetY: 0,
        //             offsetX: 0,
        //          },
        //          legend: {
        //             position: "bottom",
        //             offsetX: 0,
        //             offsetY: 0,
        //          },
        //          plotOptions: {
        //             radialBar: {
        //                hollow: {
        //                   size: "10%",
        //                },
        //             },
        //          },
        //       },
        //    },
        //    {
        //       breakpoint: 768,
        //       options: {
        //          chart: {
        //             offsetY: 0,
        //             offsetX: 0,
        //          },
        //          legend: {
        //             position: "bottom",
        //             offsetX: 0,
        //             offsetY: 0,
        //          },
        //          plotOptions: {
        //             radialBar: {
        //                hollow: {
        //                   size: "30%",
        //                },
        //             },
        //          },
        //       },
        //    },

        //    {
        //       breakpoint: 330,
        //       options: {
        //          chart: {
        //             offsetY: 0,
        //             offsetX: 0,
        //          },
        //          legend: {
        //             position: "bottom",
        //             offsetX: 0,
        //             offsetY: 0,
        //          },
        //          plotOptions: {
        //             radialBar: {
        //                hollow: {
        //                   size: "20%",
        //                },
        //             },
        //          },
        //       },
        //    },
        // ],

        fill: {
          opacity: 1,
        },

        colors: ["#6418C3", "#9859E7", "#E1CAFF"],
        labels: ["New", "Recover", "In Treatment"],
        legend: {
          fontSize: "16px",
          show: false,
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
          type="radialBar"
          height={330}
        />
      </div>
    );
  }
}
export default ChartCircle;
