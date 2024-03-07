import React, { useEffect } from "react";
// import { PieChart } from "react-minimal-pie-chart";
import Chart from "chart.js/auto";
import PieChart from "./PieChart";


function renderPieChart() {
  const ctx = document.getElementById("pie-chart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Post Graduate", "Female", "Male", "Undergraduate"],
      datasets: [
        {
          data: [22, 8.9, 13.3, 56.6],
          backgroundColor: [
            "#fff",
            "rgba(0,100,200,0.3)",
            "rgba(0,100,200,0.1)",
            "rgba(0,100,200,0.6)",
          ],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}
function ChartComponent() {
  // const data = {
  //   labels: ["Red", "Blue", "Yellow"],
  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: [300, 50, 100],
  //       backgroundColor: [
  //         "rgb(255, 99, 132)",
  //         "rgb(54, 162, 235)",
  //         "rgb(255, 205, 86)",
  //       ],
  //       hoverOffset: 4,
  //     },
  //   ],
  // };


  useEffect(() => {
    // renderPieChart();

  }, []);
  

  return (
    <div className="flex flex-col items-center justify-between h-fit md:flex-row md:h-screen md:w-full bg-[#018FA6]">
      <div className="w-full h-full flex items-center justify-center">
        <PieChart/>
      </div>

      <div className="w-full px-8 md:w-1/2 flex flex-col items-center justify-evenly">
        <h2 className="font-bold text-3xl text-white my-2 mx-1">
          Snapshot of our scholarship fund report
        </h2>
        <p className="text-white font-light text-2xl my-2 mx-1">
          We'are grateful to all education champions that are supporting and
          donating to our mission of bringing quality education to frica's
          talent to accelerate the continent's productive workforce
        </p>
        <button className="bg-white text-cyan-500 my-2 rounded-full h-12 p-2 w-fit font-semibold">
          Login to read full report
        </button>
      </div>
    </div>
  );
}

export default ChartComponent;
