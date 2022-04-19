import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class TableChart1 extends Component {
   render() {
      const data = {
         defaultFontFamily: "Poppins",
         labels: [0, 2, 3, 2, 3, 4, 3, 3, 6, 5, 6, 4, 5, 2, 3, 4, 2, 1, 5, 3],
         datasets: [
            {
               label: "Sales Stats",
               backgroundColor: ["rgba(234, 73, 137, 0)"],
               borderColor: "#ffab2d",
               pointBackgroundColor: "#ffab2d",
               pointBorderColor: "#ffab2d",
               borderWidth: 4,
               pointHoverBackgroundColor: "#ffab2d",
               pointHoverBorderColor: "#ffab2d",
               data: this.props.data
                  ? this.props.data
                  : [
                       0,
                       2,
                       3,
                       2,
                       3,
                       4,
                       3,
                       3,
                       6,
                       5,
                       6,
                       4,
                       5,
                       2,
                       3,
                       4,
                       2,
                       1,
                       5,
                       3,
                    ],
            },
         ],
      };

      const options = {
         title: {
            display: !1,
         },
         tooltips: {
            enabled: false,
         },
         legend: {
            display: !1,
         },
         responsive: !1,
         maintainAspectRatio: !1,

         scales: {
            xAxes: [
               {
                  display: !1,
               },
            ],
            yAxes: [
               {
                  display: !1,
               },
            ],
         },
         elements: {
            line: {
               tension: 0.0,
            },
            point: {
               radius: 0,
               borderWidth: 0,
            },
         },
      };
      return (
         <div>
            <Line data={data} options={options} height={50} />
         </div>
      );
   }
}

export default TableChart1;
