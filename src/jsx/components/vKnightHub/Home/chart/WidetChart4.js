import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WidetChart4 extends Component {
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
               backgroundColor: ["rgba(234, 73, 137, 0"],
               borderColor: "#5F5F5F",
               pointBackgroundColor: "#5F5F5F",
               pointBorderColor: "#5F5F5F",
               borderWidth: 2,
               pointHoverBackgroundColor: "#5F5F5F",
               pointHoverBorderColor: "#5F5F5F",
               data: [
                  20,
                  18,
                  16,
                  12,
                  8,
                  10,
                  13,
                  15,
                  12,
                  6,
                  12,
                  13,
                  10,
                  18,
                  14,
                  16,
                  17,
                  15,
                  19,
                  16,
                  16,
                  14,
                  18,
                  21,
                  13,
                  15,
                  18,
                  17,
                  21,
                  11,
                  14,
                  19,
                  21,
                  17,
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

export default WidetChart4;
