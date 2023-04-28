import React, { useState } from "react";
import { getLineChartData } from "../../utilities/getLineChartData";

import ReactEcharts from "echarts-for-react";

type Props = {};

const { flavanoids, ash } = getLineChartData();

export const LineChart = (props: Props) => {
  const option = {
    xAxis: {
      type: "value",
      name: "Flavanoids",
    },
    yAxis: {
      type: "value",
      name: "Ash",
    },
    series: [
      {
        type: "line",
        data: flavanoids.map((item, index) => [item, ash[index]]),
      },
    ],
  };

  return (
    <>
      <center>
        <h1>Line Chart</h1>
      </center>
      <ReactEcharts option={option} style={{ height: "70vh", width: "100%" }} />
    </>
  );
};
