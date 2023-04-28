import React from "react";
import ReactEcharts from "echarts-for-react";
import { getBarchartData } from "../../utilities/getBarChartData";

type Props = {};

const { alcohol, minMagnesium } = getBarchartData();

const BarChart = (props: Props) => {
  const option = {
    xAxis: {
      type: "category",
      name: "Alcohol",
      data: getBarchartData().alcohol,
    },
    yAxis: {
      type: "value",
      name: "Minimum Magnesium",
    },
    series: [
      {
        type: "bar",
        data: minMagnesium,
      },
    ],
  };

  return (
    <div>
      <center>
        <h1>Bar Chart</h1>
      </center>
      <ReactEcharts option={option} style={{ height: "70vh", width: "100%" }} />
    </div>
  );
};

export default BarChart;
