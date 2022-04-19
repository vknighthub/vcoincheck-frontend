import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WidetChart3 extends Component {
   render() {
      const data = {
         defaultFontFamily: "Poppins",
         labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "January",
            "February",
            "March",
            "April",
         ],
         datasets: [
            {
               label: "Sales Stats",
               backgroundColor: ["rgba(234, 73, 137, 0)"],
               borderColor: "#2B98D6",
               pointBackgroundColor: "#2B98D6",
               pointBorderColor: "#2B98D6",
               borderWidth: 2,
               pointHoverBackgroundColor: "#2B98D6",
               pointHoverBorderColor: "#2B98D6",
               data: [
                  8,
                  7,
                  6,
                  3,
                  2,
                  4,
                  6,
                  8,
                  10,
                  6,
                  12,
                  15,
                  13,
                  15,
                  14,
                  13,
                  21,
                  11,
                  14,
                  10,
                  21,
                  10,
                  13,
                  10,
                  12,
                  14,
                  16,
                  14,
                  12,
                  10,
                  9,
                  8,
                  4,
                  1,
               ],
            },
         ],
      };

      const options = {
         title: {
            display: !1,
         },
         tooltips: {
            intersect: !1,
            mode: "nearest",
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10,
         },
         legend: {
            display: !1,
         },
         responsive: !0,
         maintainAspectRatio: !1,
         hover: {
            mode: "index",
         },
         scales: {
            xAxes: [
               {
                  display: !1,
                  gridLines: !1,
                  scaleLabel: {
                     display: !0,
                     labelString: "Month",
                  },
               },
            ],
            yAxes: [
               {
                  display: !1,
                  gridLines: !1,
                  scaleLabel: {
                     display: !0,
                     labelString: "Value",
                  },
                  ticks: {
                     beginAtZero: !0,
                  },
               },
            ],
         },
         elements: {
            line: {
               tension: 0.15,
            },
            point: {
               radius: 0,
               borderWidth: 0,
            },
         },
         layout: {
            padding: {
               left: 0,
               right: 0,
               top: 5,
               bottom: 0,
            },
         },
      };
      return (
         <>
            <Line data={data} options={options} height={75} />
         </>
      );
   }
}

export default WidetChart3;
