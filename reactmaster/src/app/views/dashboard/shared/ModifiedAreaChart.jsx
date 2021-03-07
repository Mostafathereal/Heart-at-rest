import React from "react";
import ReactEcharts from "echarts-for-react";
import { merge } from "lodash";

const defaultOption = {
  grid: {
    top: 16,
    left: 36,
    right: 16,
    bottom: 32
  },
  legend: {
    Data:[
      { name: "Systolic",
        color: "#666",

    },
      { name: "Diastolic"}
    ],
    selectorLabel: {color: "#666"},
    // activeColor: "#000"
  },
  tooltip: {
    show: true,
    trigger: "axis",

    axisPointer: {
      type: "cross",
      lineStyle: {
        opacity: 0
      }
    },
    crossStyle: {
      color: "#000"
    }
  },
  series: [
    {
      name: "Systolic",
      areaStyle: {},
      smooth: true,
      lineStyle: {
        width: 2,
        color: "#ff1"
      },
      color: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0.3)" // color at 0% position
            },
            {
              offset: 1,
              color: "rgba(255,255,255,0)" // color at 100% position
            }
          ],
          global: false // false by default
        }
      ]
    },
    {
      name: "Diastolic",
      areaStyle: {},
      smooth: true,
      lineStyle: {
        width: 2,
        color: "#fff"
      },
      color: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0.3)" // color at 0% position
            },
            {
              offset: 1,
              color: "rgba(255,255,255,0)" // color at 100% position
            }
          ],
          global: false // false by default
        }
      ]
    }
  ],
  xAxis: {
    show: true,
    type: "category",
    showGrid: false,
    boundaryGap: false,
    axisLabel: {
      color: "#ccc",
      margin: 20
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    min: 60,
    max: 160,
    axisLabel: {
      color: "#ccc",
      margin: 10,
      fontSize: 14,
      fontFamily: "roboto",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255, 255, 255, .1)"
      }
    },

    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  }
};

const ModifiedAreaChart = ({ height, option }) => {
  return (
    <ReactEcharts
      style={{ height: height }}
      option={merge({}, defaultOption, option)}
    />
  );
};

export default ModifiedAreaChart;
