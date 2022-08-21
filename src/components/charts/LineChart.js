import React from "react";
import { Card, Typography } from "@mui/material";
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const LineChart = ({ marks }) => {
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Students",
        data: [32,65,78,87,89,95],
        backgroundColor: "#4e73df",
        borderColor: "#4e73df",
        borderWidth: 3,
        tension: 0.3,
        fill: {
          target: "origin",
          above: "rgba(78, 115, 223, 0.05)",
        },
      },
    ],
  };

  const options = {
    layout: {
      padding: 20,
    },
    plugins: {
      tooltip: {
        intersect: false,
        titleColor: "#5a5c69",
        backgroundColor: "#fff",
        bodyColor: "#858796",
        bodyFont: {
          family: "sans-serif",
        },
        titleFont: {
          family: "sans-serif",
          size: 14,
        },
        padding: 12,
        cornerRadius: 3,
        displayColors: false,
        borderWidth: 0.5,
        borderColor: "#858796",
        callbacks: {
          label: (value) => {
            return `${value.dataset.label}: ${value.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return value;
          },
          font: {
            family: "sans-serif",
          },
          maxTicksLimit: 6,
        },
        beginAtZero: true,
        grid: {
          borderDash: [2, 2],
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "sans-serif",
          },
        },
      },
    },
  };

  return (
    <Card elevation={0}>
      <Typography variant="h6" sx={{ color: "#495057", fontWeight: "bold" }}>
        Yearly student Record of getting more than 80%
      </Typography>
      <Line data={data} options={options} />
    </Card>
  );
};

export default LineChart;
