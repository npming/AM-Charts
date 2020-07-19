import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ApiCall } from "../ApiCall";
import { Spinner } from "reactstrap";

am4core.useTheme(am4themes_animated);

const XYChart = () => {
  let data = ApiCall();

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

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
    valueAxis.title.text = "Total Cases";

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "COVID-19";
    series.columns.template.tooltipText = "State: {categoryX}\ncases: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "name";
    //series.dataFields.openValueY = "recovery";

    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
    scrollbarX.scrollbarChart.seriesContainer.hide();

    chart.legend = new am4charts.Legend();

    return () => {
      chart.dispose();
    };
  }, [data != null]);

  return (
    <div className="chart-body">
      {data != null ? (
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      ) : (
        <Spinner color="primary" style={{ width: "3rem", height: "3rem" }} />
      )}
    </div>
  );
};

export default XYChart;
