"use client";
import React, { useState, useEffect } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { getStudents } from "@/services/api";
import Utils from "@/utilities/Utils";


// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Chart = () => {
  const [chartData, setChartData] = useState (null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Student = await getStudents();

        const branchCounts = Student.reduce((acc, student) => {
          acc[student.branch] = (acc[student.branch] || 0) + 1;
          return acc;
        }, {});

        const labels = Object.keys(branchCounts);
        const dataValues = Object.values(branchCounts);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Numbers of Students",
              data: dataValues,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth:1,
            },
          ],
        });
      } catch (error) {
        console.error("Error Processing Student Data:", error);
        
      }
    };

    fetchData();
  }, {});
   
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Branch-wise Student Distribution",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callBack: (value) => Number.isInteger(value) ? value : null,
        },
      },
    },
  };

  return (
    <div>
    
    {chartData ? (
      <Bar data={chartData} options={options} />
    ) : (
      <p>Loading data...</p>
    )}
  </div>
  );
};

export default Chart;
