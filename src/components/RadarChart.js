import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ApiCall } from "../ApiCall";
import { Spinner } from "reactstrap";

am4core.useTheme(am4themes_animated);

function RadarChart() {
  let data = ApiCall();

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.RadarChart);

    chart.paddingRight = 20;

    let datas = [];
    data != null
      ? data.regionData.map((analysis) =>
          datas.push({
            name: analysis.region,
            value: analysis.totalCases,
            recovery: analysis.recovered,
          })
        )
      : datas.push(null);

    chart.data = datas;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.title.text = "States";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    let series = chart.series.push(new am4charts.RadarSeries());
    series.name = "COVID-19";

    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "name";

    chart.legend = new am4charts.Legend();

    return () => {
      chart.dispose();
    };
  }, [data != null]);

  return (
    <div className="chart-body">
      {data != null ? (
        <div id="chartdiv" style={{ width: "100%", height: "600px" }}></div>
      ) : (
        <Spinner color="primary" style={{ width: "3rem", height: "3rem" }} />
      )}
    </div>
  );
}

export default RadarChart;
