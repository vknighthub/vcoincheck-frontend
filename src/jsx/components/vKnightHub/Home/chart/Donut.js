import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class Donut extends Component {
   render() {
      const data = {
         weight: 0,
         defaultFontFamily: "Poppins",
         datasets: [
            {
               data: [71, 100 - 71],
               borderWidth: 0,
               backgroundColor: ["#3C4BA5", this.props.backgroundColor2],
            },
         ],
      };

      const options = {
         width: 90,
         cutoutPercentage: 80,
         responsive: false,
         maintainAspectRatio: true,
         tooltips: { enabled: false },
         hover: { mode: null },
      };
      return (
         <div className="donught-chart" style={{ marginTop: "-10px" }}>
            <Doughnut data={data} options={options} height={90} width={90} />
         </div>
      );
   }
}

export default Donut;
